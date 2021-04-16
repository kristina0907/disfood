<template>
    <div class="modal modal_message" data-easein="slideRightIn" id="messageModal" tabindex="-1"
         aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="title_modal_message">Сообщения</div>
                    <button type="button" id="message_close" class="btn-close" data-dismiss="modal"><svg width="24"
                                                                                    height="24" viewBox="0 0 24 24" fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 6L18.7742 18.7742" stroke="#22262A" stroke-width="2"
                              stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6 18.7742L18.7742 5.99998" stroke="#22262A" stroke-width="2"
                              stroke-linecap="round" stroke-linejoin="round" />
                    </svg></button>
                </div>
                <div id="cont" class="modal-body">
                    <div class="modal_item_message" v-for="message in messages">
                        <div class="top_last_message">
                            <div class="sender_last_message">
                                <div class="photo_sender_last_message"
                                     style="background-image: url(/images/photo.png);"></div>
                                <div class="info_sender_last_message">
                                    <div class="name_sender_last_message">{{message.author.name}}</div>
                                    <div class="post_sender_last_message m-b-10" v-for="role in message.author.roles">
                                        {{role.name}}
                                    </div>
                                </div>
                            </div>
                            <div class="time_last_message">{{ message.created_at }}</div>
                        </div>
                        <div class="text_last_message">
                           {{message.message}}
                        </div>

                    </div>

                </div>
                <div class="modal_footer_message">
                    <form action="">
                        <div class="modal_container_input_message">
                            <input type="text" placeholder="Сообщение ..." v-model="newMessage">
                            <div class="container_message_file">
                                <div class="form-group">
                                    <input type="file" name="file" id="file" class="input-file" />
                                    <label for="file" class="btn btn-tertiary js-labelFile">
                                        <svg width="23" height="25" viewBox="0 0 23 25" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M21.981 11.6672L12.0815 21.5667C12.0815 21.5667 7.48528 26.1629 3.24264 21.9203C-1 17.6776 3.59619 13.0814 3.59619 13.0814L13.8492 2.82837C13.8492 2.82837 16.6777 -5.7091e-05 19.5061 2.82837C22.3345 5.6568 19.5061 8.48522 19.5061 8.48522L9.6066 18.3847C9.6066 18.3847 8.19239 19.7989 6.77817 18.3847C5.36396 16.9705 6.77817 15.5563 6.77817 15.5563L15.9706 6.3639"
                                                stroke="#8898A8" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="btn_send_message">
                            <button  @click="sendMessage($event)">
                                <svg width="23" height="24" viewBox="0 0 23 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1.72693 11.827C0.899184 11.5087 0.864737 10.3503 1.6721 9.98331L20.407 1.46743C21.2482 1.08508 22.1135 1.95043 21.7312 2.7916L13.2153 21.5265C12.8483 22.3339 11.69 22.2994 11.3716 21.4717L8.85208 14.9209C8.7505 14.6568 8.5418 14.4481 8.27771 14.3466L1.72693 11.827Z"
                                        stroke="white" stroke-width="2" />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

</template>

<script>


export default {
    name:'chat-room',

    components: {},
    data(){
        return {
            messages:[],
            isExpand:false,
            newMessage:''
        }
    },
    methods:{

        getMessages()
        {
            axios.get('/get/messages/'+this.$attrs.offerId)
                .then((response)=>{

                    if(response.data !== 'undefined' && response.data !== null)
                    {
                        this.messages = response.data;
                    }
                })
        },
        sendMessage(event)
        {
            event.preventDefault();
            let self = this;
            let message = self.newMessage;
            let author = 11;//TODO подтянуть сюда user_id
            let chat_room = self.$attrs.offerId;
            axios.post('/send/messages',{
                message:message,
                author:author,
                room:chat_room
            }).then((response)=>{

                    if(response.data !== 'undefined' && response.data !== null)
                    {
                        this.messages.push(response.data);
                        this.newMessage = '';
                    }
                    self.$emit('changeLastMessage', {
                        lastMessage: response.data,
                    })
            })
        },
        scroll() {
            document.getElementById('cont').scrollTop = document.getElementById('cont').scrollHeight;
        },
        changeDropdown()
        {
            this.isExpand = !this.isExpand
        }
    },
    updated() {
        this.scroll();
    },
    mounted() {
        this.getMessages();
    }
}
</script>

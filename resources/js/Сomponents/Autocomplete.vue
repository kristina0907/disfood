<template>
    <div>
        <input type="text" placeholder="Enter Country name..." v-model="query" @keyup="getData()" autocomplete="off" class="form-control input-lg" />
        <div class="panel-footer" v-if="search_data.length">
            <ul class="list-group">
                <a href="#" class="list-group-item" v-for="data1 in search_data" @click="getName(data1.country_name)">{{ data1.country_name }}</a>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name:"autocomplete",
        props:['url','query'],
        data:function(){
            return{
                query:'',
                search_data:[]
            }
        },
        methods:{
            getData:function(){
                this.search_data = [];
                axios.post(this.props.url, {
                    query:this.props.query
                }).then(response => {
                    this.search_data = response.data;
                });
            },
            getName:function(name){
                this.query = name;
                this.search_data = [];
            }
        }
    }
</script>


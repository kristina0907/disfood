<template>
    <div class="container-fluid">
        <div class="row">
            <UserLKHeader></UserLKHeader>
        </div>
        <div class="content row">
            <div class="main_container">
                <div class="title_page">Мои товары</div>
                <div class="table_container table-responsive">
                    <div class="sort_taable">
                        <div class="item_sort active">Все <span>&#183;</span> 100</div>
                        <div class="item_sort">Активные <span>&#183;</span> 10</div>
                        <div class="item_sort">Неактивные <span>&#183;</span> 10</div>
                    </div>
                    <div class="search_table_btn">
                        <div class="container_search_table">
                            <div class="icon_search">
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M11 20.5C15.9706 20.5 20 16.4706 20 11.5C20 6.52944 15.9706 2.5 11 2.5C6.02944 2.5 2 6.52944 2 11.5C2 16.4706 6.02944 20.5 11 20.5Z"
                                        stroke="#71BF45" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M22 22.5L18 18.5" stroke="#71BF45" stroke-width="2" stroke-linecap="round"
                                          stroke-linejoin="round" />
                                </svg>
                            </div>
                            <input type="text" placeholder="Найти товар по наименованию">
                        </div>
                        <div class="container_btn_table">
                            <button>
                        <span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 3V21" stroke="#71BF45" stroke-width="2" stroke-linecap="round"
                                      stroke-linejoin="round" />
                                <path d="M3 12L21 12" stroke="#71BF45" stroke-width="2" stroke-linecap="round"
                                      stroke-linejoin="round" />
                            </svg>
                        </span> Добавить товар</button>
                            <button>Утвердить цену</button>
                            <button>Утвердить все</button>
                        </div>
                    </div>
                    <table class="table default_table table_product">
                        <thead>
                        <tr>
                            <th scope="col">
                                <div class="checkbox">
                                    <input class="custom-checkbox" type="checkbox" id="color-1" name="color-1"
                                           value="indigo">
                                    <label for="color-1"></label>
                                </div>
                            </th>
                            <th scope="col">Фото</th>
                            <th scope="col">Наименование
                                <span class="sort_col">
                                <svg width="15" height="9" viewBox="0 0 15 9" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.72223 1.69751L7.52487 7.50015L13.3275 1.69751" stroke="#22262A"
                                          stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                            </th>
                            <th scope="col">Статус
                                <span class="sort_col">
                                <svg width="15" height="9" viewBox="0 0 15 9" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.72223 1.69751L7.52487 7.50015L13.3275 1.69751" stroke="#22262A"
                                          stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                            </th>
                            <th scope="col">Категория
                            </th>
                            <th scope="col">Тип</th>
                            <th scope="col">Регион погрузки</th>
                            <th scope="col">Фасовка</th>
                            <th scope="col">Текущий объём</th>
                            <th scope="col">Цена, кг / Цена, кг с НДС
                                <span class="sort_col">
                                <svg width="15" height="9" viewBox="0 0 15 9" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.72223 1.69751L7.52487 7.50015L13.3275 1.69751" stroke="#22262A"
                                          stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                            </th>
                            <th class="price-term" scope="col">Срок цены</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="product in products">
                            <td>
                                <div class="checkbox">
                                    <input class="custom-checkbox" type="checkbox" id="color-2" name="color-2"
                                           value="indigo">
                                    <label for="color-2"></label>
                                </div>
                            </td>
                            <td>
                                <div class="image_product_table"
                                     style="background-image: url(/public/images/product.png);"></div>
                            </td>
                            <td class="bold">{{ product.product.name }}</td>
                            <td>{{ product.active }}</td>
                            <td>{{ product.product.category.name }}</td>
                            <td>{{ product.product.type.name }}</td>
                            <td>{{product.adress}}</td>
                            <td>50 кг</td>
                            <td>{{product.capacity}}</td>
                            <td class="nowrap modal_price" data-bs-toggle="modal" data-bs-target="#changePrice"><span
                                class="price">{{ product.price }}₽</span><span class="price_nds">{{ product.price + ' +10%'}}₽ НДС
                            </span></td>
                            <td class="nowrap price-term">до 13:00 МСК<span class="status_time_good">8ч</span></td>
                        </tr>


                        </tbody>
                    </table>
                    <!-- Modal -->
                    <div class="modal fade modal_change_price" id="changePrice" tabindex="-1" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-body">
                                    <form action="">
                                        <div class="title_madal_price">Изменение цены</div>
                                        <div class="modal_name_product">Рис круглый шлифованный</div>
                                        <div class="container_modal_old_price">
                                            <div class="title_modal_old_price">Старая цена</div>
                                            <div class="modal_old_price">
                                                <span>46 Р</span>
                                                <span class="modal_old_price_nds">46 Р НДС</span>
                                            </div>
                                        </div>
                                        <div class="modal_input"><input type="text" value="46 Р"></div>
                                        <div class="modal_input">
                                            <div class="model_price_percent">13%</div><input type="text" value="46 Р НДС">
                                        </div>
                                        <div><button class="modal_btn_change_price" type="submit">Применить</button></div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="navigation_table">
                        <div class="num_rows">
                    <span>
                        Количество сторок
                    </span>
                            <div class="container_select_rows">
                                <select name="" id="">
                                    <option value="">5</option>
                                    <option value="">10</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <nav aria-label="Page navigation example">
                                <ul class="pagination">
                                    <li class="page-item">
                                        <a class="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">
                                        <svg width="9" height="16" viewBox="0 0 9 16" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 1L1.03683 7.96317L8 14.9263" stroke="#22262A" stroke-width="2"
                                                  stroke-linecap="round" stroke-linejoin="round" />
                                        </svg></span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                    </li>
                                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item">
                                        <a class="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">
                                        <svg width="9" height="16" viewBox="0 0 9 16" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L7.96317 7.96317L1 14.9263" stroke="#22262A" stroke-width="2"
                                                  stroke-linecap="round" stroke-linejoin="round" />
                                        </svg></span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div class="page_count">
                            1-5 из 100
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


import UserLKHeader from "../../../Сomponents/LK/UserLKHeader";
export default {
    components: {UserLKHeader},
    data(){
        return {
            products:[],
        }
    },
    methods:{
        getProducts()
        {
            axios.get('/get/my-products/1')
                .then((response)=>{

                    if(response.data !== 'undefined' && response.data !== null)
                    {
                        this.products = response.data;
                    }

                })
        }
    },
    mounted() {
        this.getProducts();
    }
}
</script>

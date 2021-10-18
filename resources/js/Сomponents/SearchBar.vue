<template>
    <div>
        <input type="text" placeholder="Найти товар" v-model="searchBar" v-on:keyup="searchText">
        <div class="search-panel" v-if="Object.keys(searchResults).length">
            <div class="search-result-product" v-if="searchResults && searchResults.products">
                <div v-for="product in searchResults.products">
                    <div class="search-result_product-item">
                        <a href="#" @click="searchClickProduct(product.category_id,product.type_id)">
                            <div class="title_search-result_product-item">{{product.name}}</div>
                            <div class="price_search-result_product-item"><spa class="provider_search-result_product-item">36 поставщиков,</spa> от 75 ₽/ кг</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
 export default {
     name:"search-bar",
     data(){
         return {
             searchBar:'',
             searchResults:[],
         }
     },
     methods:{
         /**
          *
          * @returns {Promise<void>}
          */

         async searchText()
         {
             if(this.searchBar.length >= 3)
             {
                 await axios.get('/get/search/all?search='+this.searchBar)
                     .then(response => {
                         if (response.data !== 'undefined' && response.data !== null) {
                             this.searchResults = response.data
                         }
                     });
             }else
             {
                 this.searchResults = []
             }
         },
     }
 }
</script>

<style>
.search-panel
{
    display: block;
    position: absolute;
    float: left;
    width: 100%;
    height: auto;
    top: 46px;
    background: #FFFFFF;
    border: 1px solid #C5C5C5;
    box-shadow: 0px 4px 20px rgba(34, 54, 74, 0.05);
    border-radius: 10px;
    padding: 15px 0;
}
.search-result_product-item{
    padding: 10px 20px;
}
.search-result_product-item:hover{
    background: #F0F2F4;
}
.search-result_product-item a{
    font-weight: normal;
    font-size: 15px;
    line-height: 20px;
    color: #22262A;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
.search-result_product-item:hover a{
    color: #71BF45;
}
.search-result_product-item:hover .provider_search-result_product-item{
    color: #71BF45;
}
.provider_search-result_product-item{
    color: #8898A8;
}
.product-item
{
    margin: 2.5px 0;
}
.product-item:hover,
.product-item:hover a
{
    background: #ccc;
    text-decoration: none;
    color: #fff;
    cursor:pointer;
}
.search-img
{
    height: 50px;
    width: auto;
}

</style>

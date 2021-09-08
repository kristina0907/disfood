<template>
    <div>
        <input type="text" placeholder="Найти товар" v-model="searchBar" v-on:keyup="searchText">
        <div class="search-panel" v-if="Object.keys(searchResults).length">
            <div class="search-result-product" v-if="searchResults && searchResults.products">
                <div class="col-md-4" style="margin-top: 20px;margin-bottom: 20px;">
                    Продукты
                </div>
                <div class="col-md-12" v-for="product in searchResults.products">
                    <div class="row product-item">
                        <a href="#" @click="searchClickProduct(product.category_id,product.type_id)" class="col-md-12">
                            <div class="row">
                                <div class="col-md-1">
                                    <img :src="product.image" alt="" class="search-img" >
                                </div>
                                <div class="col-md-11">
                                    {{product.name}}
                                </div>
                            </div>
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
   /* position: fixed;*/

    float: left;
    width:1100px;
    height:400px;
    top: 120px;
    background: #fafafa;
}
.search-panel a
{
    color:#000;
    cursor: pointer;

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

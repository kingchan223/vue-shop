<template>
  <div class="product-list">
    <main class="mt-3">
      <div class="container">
        <div class="row mb-3">
          <div class="col-12">
            <select class="form-select">
              <option selected></option>
              <option value="1">키보드</option>
              <option value="2">마우스</option>
              <option value="3">모니터</option>
            </select>
          </div>
        </div>
        <div class="row g-3">
          <div class="col-xl-3 col-lg-4 col-md-6" :key="i" v-for="(product,i) in productList">
            <div class="card" style="width: 18rem">
              <a href="product_detail.html"
                ><img
                  :src="product.thumbnail_image_path"
                  height="300"
                  class="card-img-top"
                  alt="product_img"
              /></a>
              <div class="card-body">
                <h5 class="card-title">
                  {{product.product_name}}
                </h5>
                <p class="card-text">
                  <span class="badge bg-secondary mr-1">{{product.category1}}</span>
                  <span class="badge bg-secondary mr-1">{{product.category2}}</span>
                  <span class="badge bg-secondary">{{product.category3}}</span>
                </p>
                <div class="d-flex justify-content-between align-item-center">
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button type="button" class="btn btn-sm btn-outline-dark">
                      장바구니
                    </button>
                    <button type="button" class="btn btn-sm btn-outline-dark">
                      주문하기
                    </button>
                  </div>
                  <small class="text dark">{{product.product_price}}원</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import axios from 'axios'
export default{
  data(){
    return {
      productList:[]
    }
  },
  created(){
    this.getProductList();
  },
  methods: {
    // async getProductList(){
    //   let productList = await this.$api("http:localhost:8090/api/product/all",{});
    //   console.log(productList);
    // },
    async getProductList(){
      await axios.get("api/product/all")
      .then((res)=>{
        return res;
        })
      .then((res)=>{
        this.productList = res.data.data;
      });
    }
  }
}
</script>

<style scoped>
      .card {
        margin-top: 10px;
      }
</style>

<template>
  <main class="mt-3">
      <div class="container">
        <div class="row pb-5 border-bottom">
          <div class="col-md-5">
            <div
              id="carouselExampleIndicators"
              class="carousel carousel-dark slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/162864901850364364.jpg?gif=1&w=1280&h=1280&c=c"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/images/162864958465740734.jpg?gif=1&w=1280&h=1280&c=c"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/images/162864958675502753.jpg?gif=1&w=1280&h=1280&c=c"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div class="col-md-7">
            <div class="card shadow-sm">
              <div class="card-body">
                <h5 class="card-title">
                  {{product.product_name}}
                </h5>
                <h5 class="card-title pt-3 pb-3 border-top">{{product.product_price}}원</h5>
                <p class="card-text pt-3 border-top">
                  <span class="badge bg-secondary mr-1">{{product.category.category1}}</span>
                  <span class="badge bg-secondary mr-1">{{product.category.category2}}</span>
                  <span class="badge bg-secondary">{{product.category.category3}}</span>
                </p>
                <p class="card-text pb-3">
                  베송비 {{product.delivery_price}}원 |
                  도서산관(제주도) 배송비 추가 {{product.add_delivery_price}}원 |
                  <br>
                  택배배송 | {{product.outbound_days}}일 이내 출고 (주말, 공휴일 제외)
                </p>
                <p class="card-text pb-3">
                  판매자 {{product.seller.name}} ||
                  <br>
                  연락처 📨{{product.seller.email}} 📞:{{product.seller.phone}}
                </p>
                <div class="card-text pb-3 border-top">
                    <div class="row">
                        <div class="col-auto mt-3">
                            <label class="col-form-label">구매수량</label>
                        </div>
                        <div class="col-auto">
                            <div class="input-group mt-3">
                                <span class="input-group-text">-</span>
                                <input type="text" class="form-control" style="width:40px;" value="1">
                                <span class="input-group-text">+</span>
                              </div>
                        </div>
                    </div>
                  </div>
                  <div class="row pt-3 pb-3 border-top">
                    <div class="col-6">
                        <h3>총 상품 금액</h3>
                    </div>
                    <div class="col-6" style="text-align: right;">
                        <h3>219,000</h3>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between align-item-center ">
                    <div class="col-6 d-grid p-1">
                        <button type="button" class="btn btn-lg btn-dark">장바구니</button>
                    </div>
                    <div class="col-6 d-grid p-1">
                        <button type="button" class="btn btn-lg btn-danger">주문하기</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row pt-5 border-top">
              <div class="col-12">
                  <img src="https://exit.ohou.se/713ae97ebf6d3e09fd00f3c330950fe147bfbcf8/ai.esmplus.com/crtek/1Lee/PC_ETC/Keychron/K1%20V4/Keychron-K1V4_01.jpg" class="img-fluid">
              </div>
          </div>
        </div>
    </main>
</template>
<script>
import axios from 'axios'
export default{
  data(){
    return {
      productId :0,
      product:[]
    }
  },
  created(){
    this.productId = this.$route.query.product_id;//ProductList의 goToDetail에서 넘어온 걸 그대로 사용한다.
    this.getProductDetail();
  },
  methods: {
    async getProductDetail(){
      await axios.get("api/product?id="+this.productId)
      .then((res)=>{
        return res;
        })
      .then((res)=>{
        this.product = res.data.data;
      });
      console.log(this.product);
    },
  }
}
</script>
<template>
  <div class="container d-flex justify-content-center">
    <div class="col-lg-8 d-flex">
      <div class="col-lg-8 text-start">
        <h3 class="my-4">Thanh toán</h3>
        <div class="d-flex justify-content-between align-items-center">
          <h4>Phương thức thanh toán</h4>
          <div class="py-2 px-2 fs-8">
            <span class="me-2">Kết nối bảo mật</span>
            <i class="bi bi-lock-fill"></i>
          </div>
        </div>

        <div class="d-flex justify-content-between">
          <div class="d-flex justify-content-between align-items-center py-2 px-3 border bg-dropdown w-100">
            <h4 class="fs-6 mb-0">
              <input type="radio" name="paymentMethod" id="momoRadio" class="me-2" />Momo
            </h4>
            <div class="">
              <img src="../../assets/images/logo/momo.png" alt="" srcset="" width="30" height="30" class="rounded" />
            </div>
          </div>
          <div class="d-flex justify-content-between align-items-center py-2 px-3 border bg-dropdown w-100">
            <h4 class="fs-6 mb-0">
              <input type="radio" name="paymentMethod" id="VnPayRadio" class="me-2" />VnPay
            </h4>
            <div class="">
              <img src="../../assets/images/logo/vnpayment.png" alt="" srcset="" width="30" height="30" class="rounded" />
            </div>
          </div>
        </div>


        <!-- thông tin mua hàng -->
        <div class="d-block mb-5">
          <h4 class="pb-3 pt-5">Thông tin mua hàng</h4>
          <div class="d-flex justify-content-between">
            <div class="col-9">
              <img src="../../assets/images/logo/momo.png" alt="" srcset="" width="25" height="25" class="me-2" />
              Rest API Testing (Automation) from Scratch-Rest Assured Java
              &nbsp;
            </div>
            <div class="col-2"><span class="fs-8 me-1">đ</span>1.699.000</div>
          </div>
          <div class="d-flex justify-content-between">
            <div class="col-9">
              <img src="../../assets/images/logo/vnpay.png" alt="" srcset="" width="25" height="25" class="me-2" />
              50+ Web Projects with HTML, CSS, and JavaScript &nbsp;
            </div>
            <div class="col-2"><span class="fs-8 me-1">đ</span>1.699.000</div>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="py-5 px-3 text-start">
          <h4 class="fs-7">Tóm tắt</h4>
          <ul class="list-group list-group-flush">
            <li class="list-group-item d-flex justify-content-between fs-8">
              Giá gốc:
              <div><span class="fs-8 me-1">đ</span>1.699.000</div>
            </li>
            <li class="list-group-item d-flex justify-content-between fw-bold fs-7">
              Tổng:
              <div><span class="fs-8 me-1">đ</span>1.699.000</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'payment',
    setup(){
      
    },
    methods: {
    },
    mounted(){
      let vnpay = document.getElementById("VnPayRadio");
      let momo = document.getElementById("momoRadio");
      if(vnpay.checked){
        alert("vnpay check")
      }else if(momo.checked){
        alert("momo check")
      }
    }
};
</script>

<style scoped></style>

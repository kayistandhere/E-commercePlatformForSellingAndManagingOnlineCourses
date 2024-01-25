<template>
    <div class="container-fruid" >
        <div class="d-flex justify-content-center">
            <div class="col-lg-8">
                <div class="row mb-4">
                    <div class="col-lg-12 slideshow" id="imageContainer">
                        <img class="slide" src="../../assets/images/banner/homePage1.jpg" style="width: 100%" />
                    </div>
                </div>
                <div class="row p-2">
                    <div class="d-flex justify-content-between">
                    <!-- thay levinhthuan khi co profile -->
                        <div class="p-2">
                            <h2 class="fs-4">Lê Vĩnh Thuận ơi hãy bắt đầu học nào </h2> 
                        </div>
                        <div class="p-2">
                            <a class="text-btn fw-bold" href="">Quá trình học tập của tôi</a>
                        </div>
                    </div>
                    <div class="pt-2 d-flex">
                        <div class="d-flex position-relative col-lg-4 text-start border p-1 m-1">
                            <img src="../../assets/images/Icon-more/clock.png" alt="" srcset="" width="80" height="80">
                            <div class="ms-2 p-2">
                                <h6 class="fs-7">Lên lịch thời gian học</h6>
                                <p class="fs-8 two-lines">Tích lũy kiến thức bằng cách học một chút mỗi này. 
                                    Nhận lời nhắc từ lịch của bạn.</p>
                                <button class="border-0 bg-white fs-8 text-btn" type="button">Bắt đầu</button>
                            </div>
                            <button class="border-0 bg-white position-absolute top-0 end-0 p-2" type="button"><i class="bi bi-x fs-5"></i></button>
                        </div>
                        <div class="d-flex position-relative col-lg-4 text-start border p-1 m-1">
                            <img src="../../assets/images/Icon-more/clock.png" alt="" srcset="" width="80" height="80">
                            <div class="ms-2 p-2">
                                <h6 class="fs-7">Lên lịch thời gian học</h6>
                                <p class="fs-8 two-lines ">Tích lũy kiến thức bằng cách học một chút mỗi này. 
                                    Nhận lời nhắc từ lịch của bạn.</p>
                                <button class="border-0 bg-white fs-8 text-btn" type="button">Bắt đầu</button>
                            </div>
                            <button class="border-0 bg-white position-absolute top-0 end-0 p-2" type="button"><i class="bi bi-x fs-5"></i></button>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <!-- Title name user -->
                    <div class="d-flex justify-content-start">
                        <div class="p-2">
                            <h2 class="fs-4">Lĩnh vực sẽ học tiếp theo</h2> 
                        </div>
                    </div>
                    <!-- recomment course for customer -->
                    <div class="d-flex justify-content-start">
                        <div class="p-2">
                            <h3 class="fs-4 text-break text-start">Đề xuất dành cho bạn</h3> 
                            <div class="d-flex position-relative justify-content-between">
                                <!-- course -->
                                <div class="rounded-0 m-2">
                                    <img src="../../assets/images/course/masterc.jpg" class="custom-object-fit border" alt="..." width="210" height="110">
                                    <div class="text-start pt-4" style="max-width:210px;">
                                        <p class="fs-8 fw-bold text-wrap">Thực hành tư duy phản biện , tư duy lập kế hoạch </p>
                                        <p class="fs-9 custom-line">Vui lên</p>
                                        <p class="fs-9 custom-line">4,5 &nbsp; <i class="bi bi-star-fill text-warning"></i></p>
                                        <div class="d-flex justify-content-start custom-line">
                                        <p class="fs-15 fw-bold"> đ <span class="fs-8 fw-bolder">1.099.000</span></p>
                                        </div>
                                    </div>
                                </div>
                               
                                <div class="button-next">
                                    <button class="p-4 rounded-circle bg-dark border-0 " type="button">
                                    <i class="bi bi-caret-right icon-button-next"></i>
                                </button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-start">
                        <div class="p-2">
                            <h3 class="fs-4 text-break text-start">Đề xuất dành cho bạn</h3> 
                            <div class="d-flex position-relative justify-content-between">
                                <!-- course -->
                                <div class="rounded-0 m-2">
                                    <img src="../../assets/images/course/masterc.jpg" class="custom-object-fit border" alt="..." width="210" height="110">
                                    <div class="text-start pt-4" style="max-width:210px;">
                                        <p class="fs-8 fw-bold text-wrap">Thực hành tư duy phản biện , tư duy lập kế hoạch </p>
                                        <p class="fs-9 custom-line">Vui lên</p>
                                        <p class="fs-9 custom-line">4,5 &nbsp; <i class="bi bi-star-fill text-warning"></i></p>
                                        <div class="d-flex justify-content-start custom-line">
                                        <p class="fs-15 fw-bold"> đ <span class="fs-8 fw-bolder">1.099.000</span></p>
                                        </div>
                                    </div>
                                </div>
                               
                                <div class="button-next">
                                    <button class="p-4 rounded-circle bg-dark border-0 " type="button">
                                    <i class="bi bi-caret-right icon-button-next"></i>
                                </button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    </div>
</template>

<script>
export default {
    name: "homePage.view",
    data() {
        return {

        }

    },
    created() {

    },
    methods: {

    },
    mounted() {
     
    }
};
</script>
<style>
.slideshow {
      display: flex;
      overflow: hidden;
      max-width: 100%;
    }

    .slide {
      width: 100%;
      transition: 2s ease-in-out;
    }

    .slideshow img {
      width: 100%;
      height: auto;
    }
.custom-object-fit {
    object-fit: cover;
}

.two-lines {
  overflow: hidden;
  text-overflow: ellipsis; /* Nếu muốn hiển thị dấu ba chấm khi văn bản bị cắt ngắn */
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Số dòng tối đa bạn muốn hiển thị */
  -webkit-box-orient: vertical;
}

</style>

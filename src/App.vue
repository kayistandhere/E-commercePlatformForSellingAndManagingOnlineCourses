<template>
  <section>
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm p-2 mb-6 bg-body rounded">
      <div class="container-fluid ">
        <!-- Logo -->
        <router-link :to="'/homePage'" class="navbar-brand">
          <img src="./assets/images/logo/logo-udemy.svg" alt="logo-udemy" width="80" height="40">
        </router-link>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="nav-item dropdown " data-mdb-toggle="dropdown">
          <a class="nav-link text-decoration-none custom-text-nav" href="#" >Thể loại</a>
          <ul class="dropdown-menu pt-2 pt-2 custom-text-nav">
              <li><a class="dropdown-item" href="#">Kiến thức</a></li>
              <li><a class="dropdown-item" href="#">Kinh nghiệm</a></li>
              <li><a class="dropdown-item" href="#">Trải nghiệm</a></li>
            </ul>
        </div>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <!-- Search -->
          <div class="navbar-nav position-relative">
            <div class="d-flex">
              <div class="custom-search-button">
                  <i class="bi bi-search"></i>
                </div>
              <input class="custom-search" type="search" placeholder="Tìm nội dung bất kỳ" />
            </div>
          </div>
        </div>
        <!-- Item -->
        <div class="nav-item dropdown" data-mdb-toggle="dropdown">
          <a class="nav-link px-3 text-decoration-none custom-text-nav" href="#">Udemy Business</a>
            <ul class="dropdown-menu p-2 pt-2">
                <div class="badge text-wrap text-dark fs-6">Cho phép nhóm của bạn truy cập vào hơn 25.000 khóa học hàng đầu của Udemy,
                   ở mọi nơi và mọi lúc.</div>
                   <button class="btn btn-dark w-100 rounded-0 fw-bold" type="button">Dùng thử Udemy Business</button>
            </ul>
        </div>

        <div class="nav-item dropdown" data-mdb-toggle="dropdown">
          <a class="nav-link px-3 text-decoration-none custom-text-nav" href="#">Giảng dạy trên Udemy</a>
            <ul class="dropdown-menu p-2 pt-2">
                <div class="badge text-wrap text-dark fs-6">Biến kiến thức của bạn thành cơ hội và tiếp cận với hàng triệu người trên thế giới.</div>
                   <button class="btn btn-dark w-100 rounded-0 fw-bold" type="button">Tìm hiểu thêm</button>
            </ul>
        </div>

        <div class="nav-item">
          <a class="nav-link px-3 text-decoration-none custom-text-nav" href="#">Quá trình học tập của tôi</a>
        </div>

        <div class="nav-item">
          <a class="nav-link px-3 text-decoration-none custom-text-nav" href="#"><i class="bi bi-heart fs-6"></i></a>
        </div>
        <div class="nav-item">
          <a class="nav-link px-3 text-decoration-none custom-text-nav" href="#"><i class="bi bi-cart3 fs-6"></i></a>
        </div>
        <div class="nav-item">
          <a class="nav-link px-3 text-decoration-none custom-text-nav" href="#"><i class="bi bi-bell fs-6"></i></a>
        </div>
        <!-- Note đổi tên theo tài khoản -->
        <div class="nav-item btn-group" >
          <button class="nav-link custom-text-nav bg-white border-0" type="button"  data-bs-toggle="dropdown" data-bs-display="static">
            <div class="userIcon"><span class="fs-8 text-white fw-bold">TL</span></div>
          </button>
          <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-star custom-text-nav">
                <li class="d-flex justify-content-start px-3 border-bottom">
                  <div class="col-3">
                    <div class="userIcon1"><span class="custom-text-profile">TL</span></div>
                  </div>
                  <div class="col-9">
                    <a class="text-decoration-none text-dark fw-bold ps-2" href="#">Lê Vĩnh Thuận</a>
                    <p class="ps-2">levinhthuan@gmail.com</p>
                  </div>
                </li>
              <li><a class="dropdown-item" href="#">Quá trình học tập của tôi</a></li>
              <li><a class="dropdown-item" href="#">Giỏ hàng của tôi</a></li>
              <li><a class="dropdown-item" href="#">Mong muốn</a></li>
              <li><a class="dropdown-item" href="#">Giảng dạy trên Udemy</a></li>
            </ul>
        </div>
      </div>
    </nav>
    <!-- Menu type course -->
    <div class="navbar navbar-expand-lg container-fluid position-absolute d-flex custom-Navbar shadow-sm p-1 mb-5 bg-body rounded justify-content-center">
      <div class="nav-item position-relative">
          <a class="nav-link px-3 text-decoration-none custom-text-nav" href="#">Phát triển
            <div class="container-fluid bg-primary full-width-div mt-1 ">
              <div class="nav-item">
                <a class="nav-link text-decoration-none custom-text-nav" href="#">Năng suất làm việc với Offline</a>
              </div>
              <div class="nav-item">
                <a class="nav-link text-decoration-none custom-text-nav" href="#">Năng suất làm việc với Offline</a>
              </div>
              <div class="nav-item">
                <a class="nav-link text-decoration-none custom-text-nav" href="#">Năng suất làm việc với Offline</a>
              </div>
            </div>
          </a>
        </div>
        <div class="nav-item">
          <a class="nav-link px-3 text-decoration-none custom-text-nav" href="#">Kinh doanh</a>
        </div>
        <div class="nav-item">
          <a class="nav-link px-3 text-decoration-none custom-text-nav" href="#">Tài chính & Kế toán</a>
        </div>
        <div class="nav-item">
          <a class="nav-link px-3 text-decoration-none custom-text-nav" href="#">Thiết kế</a>
        </div>
        <div class="nav-item">
          <a class="nav-link px-3 text-decoration-none custom-text-nav" href="#">Năng suất làm việc với Offline</a>
        </div>
        <div class="nav-item">
          <a class="nav-link px-3 text-decoration-none custom-text-nav" href="#">Marketing</a>
        </div>
        <div class="nav-item">
          <a class="nav-link px-3 text-decoration-none custom-text-nav" href="#">Âm nhạc</a>
        </div>
        <div class="nav-item">
          <a class="nav-link px-3 text-decoration-none custom-text-nav" href="#">Thiết kế</a>
        </div>
    </div>
    
    <section class="pt-5">
      <router-view />
    </section>
    <section class="container-fluid bg-dark">
      <div class="border-bottom  d-flex justify-content-between">
        <a class="navbar-brand" href="#">
          <img src="./assets/images/logo/logo-udemy.svg" alt="logo-udemy" width="80" height="40">
      </a>
      <div class="nav-item  ">
        <button class="me-auto border bg-dark p-2 m-2 "><span class="p-2 text-white">Giảng dạy trên Udemy</span></button>
      </div>
      </div>
      <div class="border-bottom  d-flex justify-content-center">
        <a class="navbar-brand " href="#">
          <img src="./assets/images/logo/logo-udemy.svg" alt="logo-udemy" width="300" height="260">
      </a>

      </div>
     
    </section>
    <section>
      <!-- <course-detail :data-to-pass="'Dữ liệu từ Cha đến Con'"></course-detail> -->
    </section>
  </section>
</template>

<script>
// import courseDetail from './components/ClientComponent/course_detail.vue';
  export default {
    data() {
    return {
      dataToPass: 'Dữ liệu từ Cha đến Con 1'
    };
  },
  //   components: {
  //     courseDetail
  // }
  }

</script>
<style >
*{
  box-sizing: border-box;
  padding: 0 ;
  margin: 0;
}
::-webkit-scrollbar {
    width: 10px;    
} 
::-webkit-scrollbar-track {
    box-shadow: inset 0 0 2px rgb(0, 0, 0); 
    border-radius: 5px;
}
::-webkit-scrollbar-thumb {
    background: #575757; 
    border-radius: 5px;
}
::-webkit-scrollbar-thumb:hover {
    background: #464646; 
}
#app {
  font-family: 'Roboto', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.custom-Navbar {
  top: 67px;
}
.custom-search {
  border-radius: 50px;
  padding: 10px 20px 10px 40px;
  border: 1px solid #000;
  font-size: 13px;
  background: #F7F9FA;
}
.custom-search:active { 
  outline: none;

}
.custom-search-button {
  position: absolute;
  left: 17px;
  padding-top: 8px;
  color:#000000;
  font-weight: bold;
  z-index: 9999;
}

.userIcon1 {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
}
.custom-text-profile {
  font-size: 15px;
  font-weight: 700;
  color: #fff;
}
.custom-text-nav {
  font-size: 13px;
  font-weight: 400;
  color: #000;
}
.dropdown-menu {
  animation: showw 0.1s linear;
  width: 250px;
}
.dropdown:hover>.dropdown-menu {
  display: block;
}
.dropdown>.dropdown-toggle:active {
  /*Without this, clicking will make it sticky*/
  pointer-events: none;
}
@keyframes showw {
  0% {
    opacity: 0%;
    scale: 90%;
  }
  100% {
    opacity: 100%;
    scale: 100%;
  }
}
.full-width-div {
  position: absolute;
  left : 0 ;
  z-index: 999;
  width: 100%;
  display: none;
  background-color: blue;

}
.nav-link:hover .full-width-div {
  display: block;
}
</style>

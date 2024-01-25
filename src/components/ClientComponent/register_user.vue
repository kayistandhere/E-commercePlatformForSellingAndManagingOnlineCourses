<template>
  <div class="container-fluid pb-5 my-5 ">
    <div class="d-flex justify-content-center align-items-center">
      <div class="col-lg-3">
        <form action="">
            <span class="fs-6 fw-bold">Đăng ký và bắt đầu học</span>
            <div class="border border-dark m-2">
                <div class="form">
                  <input type="text" name="text" autocomplete="off" required />
                  <label for="text" class="label-name">
                    <span class="content-name">
                      Tên đầy đủ
                    </span>
                  </label>
                  </div>
            </div>
            <div class="border border-dark m-2">
                <div class="form">
                  <input type="text" name="text" autocomplete="off" required />
                  <label for="text" class="label-name">
                    <span class="content-name">
                      Email
                    </span>
                  </label>
                  </div>
            </div>
            <div class="border border-dark m-2">
                <div class="form">
                  <input type="text" name="text" autocomplete="off" required />
                  <label for="text" class="label-name">
                    <span class="content-name">
                      Mật khẩu
                    </span>
                  </label>
                  </div>
            </div>
            <div class="p-3 d-flex ">
              <input class="mb-3" type="checkbox" name="" id="">
              <span class="custom-font-size text-start px-2 custom-font-size">Gửi cho tôi các ưu đãi đặc biệt , đề xuất cá nhân hoá và bí quyết học tập</span>
            </div>
            <div class="p-3">
              <button class="btn w-100 bg-btn rounded-0 text-white fw-bold">Đăng ký</button>
            </div>
            <div class="pb-2">
              <span class="custom-font-size-1 px-2">Bằng việc đăng ký, bạn đồng ý với 
                <span class="text-decoration-underline">Điều khoản sử dụng</span>và 
                <span class="text-decoration-underline">Chính sách về quyền riêng tư</span>.
            </span>
            </div>
            
            <div class="border-top px-2 py-2 ">
              <span class="custom-font-size">Bạn đã có tài khoản? Hãy <router-link :to="'/'" class="text-link fw-bold">đăng nhập</router-link> </span>
            </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
      return {
        count: 0,
      };
    },
    created(){
      console.log(this.$store.state.count)
    }

}
</script>

<style scoped>
.form {
  width: 100%;
  position: relative;
  height: 50px;
  overflow: hidden;
}

.form input {
  width: 100%;
  height: 100%;
  color: #000000;
  padding-top: 20px;

  padding-left: 10px;
  font-size: 14px;
  border: none;
  background-color: #ffffff;
}
.form label {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  pointer-events: none;
  border-bottom: 1px solid white;
}
.form label::after {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 0px;
  width: 100%;
  height: 100%;
  border-bottom: 2px solid #000000;
  transform: translateX(-100%);
  transition: all 0.3s ease;
}

.content-name {
  position: absolute;
  bottom: 0px;
  left: 5px;
  font-size: 13px;
  font-weight: 600;
  padding-left: 10px;
  padding-bottom: 10px;
  margin-bottom: 5px;
  transition: all 0.3s ease;
}
.form input:focus {
  outline: none;
}
.form input:focus + .label-name .content-name,
.form input:valid + .label-name .content-name {
  transform: translateY(-60%);
  font-size: 11px;
  left: 0px;
  color: #000000;
}
.form input:focus + .label-name::after,
.form input:valid + .label-name::after {
  transform: translateX(0%);
}
.custom-font-size {
  font-size: 14px;
}
.custom-font-size-1 {
  font-size: 12px;
}
</style>

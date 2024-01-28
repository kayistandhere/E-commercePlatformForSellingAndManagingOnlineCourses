<template>
  <div class="container-fluid pb-5 my-5">
    <div class="d-flex justify-content-center align-items-center">
      <div class="col-lg-3">
        <form action="">
          <span class="fs-6 fw-bold"
            >Đăng nhập vào tài khoản Udemy của bạn</span
          >
          <div class="border border-dark m-2 d-flex justify-content-start">
            <i class="bi bi-facebook px-3 fs-2 custom-color-logo"></i>
            <button class="btn bg-none" type="button">
              Tiếp tục bằng tài khoản Facebook
            </button>
          </div>
          <div class="border border-dark m-2 d-flex justify-content-start">
            <i class="bi bi-facebook px-3 fs-2 custom-color-logo"></i>
            <GoogleLogin :callback="callback"/>
          </div>
          <form @submit.prevent="formLogin">
          <div class="border border-dark m-2">
            <div class="custom-form">
              <input type="text" name="text" autocomplete="off" required v-model="account.email" @blur="validate()" />
              <label for="text" class="label-name">
                <span class="content-name"> Email </span>
              </label>
            </div>
          </div>
          <div class="border border-dark m-2">
            <div class="custom-form">
              <input type="text" name="text" autocomplete="off" required v-model="account.password" @blur="validate()"/>
              <label for="text" class="label-name">
                <span class="content-name"> Mật khẩu </span>
              </label>
            </div>
          </div>
          <div class="px-3 py-2">
            <button class="btn w-100 bg-btn rounded-0 text-white fw-bold py-2" type="submit">
              Đăng nhập
            </button>
          </div>
          
        </form>
          
          <div class="pb-2">
            <span class="fs-6 px-2"
              >Hoặc
              <span class="text-decoration-underline fw-bold text-link"
                >Quên mật khẩu</span
              >
            </span>
          </div>
          <div class="border-top px-2 py-2">
            <span class="custom-font-size"
              >Bạn không có tài khoản? Hãy
              <router-link class="text-link fw-bold" :to="'/register'"
                >đăng ký</router-link>
            </span>
            
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import btn from '../../components/Btn/btn_1.vue'
import authMixin from "../../mixin/auth.js";
export default {
  mixins : [authMixin],
  name: "login",
  data() {
    return {
        error: {
          email: "",
          password: "",
        },
        account:{
          email :"",
          password :"",
        },
        count : 0,
    };
  },
  setup(){
      const callback = (response) => {
      const userData = decodeCredential(response.credential)
      console.log("Handle the userData", userData)
      console.log( "KEY",process.env.VUE_APP_CLIENT_ID_KEY)
}
  },
  methods: {
    validate() {
        let invalid = true;
        this.error = {
          email: "",
          password: "",
        };
        if (!this.account.email) {
          this.error.email = "Product email is required";
          invalid = false;
        } else if (!this.isEmail(this.account.email)) {
          this.error.email = "Product email to wrong";
          invalid = false;
        }
        if (!this.account.password) {
          this.error.password = "Product password is required";
          invalid = false;
        }
        return invalid;
      },
    isEmail(value) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
    },
    formLogin(){
    },
    updateMessage() {
      // Kích hoạt mutation để cập nhật thông điệp
      this.$store.commit("updateMessage", "Thông điệp được cập nhật!");
    },
    asyncUpdateMessage() {
      // Kích hoạt action để cập nhật thông điệp theo kiểu không đồng bộ
      this.$store.dispatch("asyncUpdateMessage");
    },
  },
  onMounted(){
    googleOneTap({ autoLogin: true })
    .then((response) => {
      console.log("Handle the response", response)
    })
    .catch((error) => {
      console.log("Handle the error", error)
    })
  },
  components: {
      webBtn1 : btn
  }
};
</script>

<style>
.custom-form {
  width: 100%;
  position: relative;
  height: 50px;
  overflow: hidden;
}

.custom-form input {
  width: 100%;
  height: 100%;
  color: #000000;
  padding-top: 20px;

  padding-left: 10px;
  font-size: 14px;
  border: none;
  background-color: #ffffff;
}
.custom-form label {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  pointer-events: none;
  border-bottom: 1px solid white;
}
.custom-form label::after {
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
.custom-form input:focus {
  outline: none;
}
.custom-form input:focus + .label-name .content-name,
.custom-form input:valid + .label-name .content-name {
  transform: translateY(-60%);
  font-size: 11px;
  left: 0px;
  color: #000000;
}
.custom-form input:focus + .label-name::after,
.custom-form input:valid + .label-name::after {
  transform: translateX(0%);
}
.custom-font-size {
  font-size: 14px;
}
.custom-font-size-1 {
  font-size: 12px;
}
.custom-color-logo {
  color: #4267b2;
}
</style>

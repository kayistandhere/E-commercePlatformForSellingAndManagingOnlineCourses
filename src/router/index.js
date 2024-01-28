import { createRouter, createWebHistory } from 'vue-router'
import loginUser from '../views/ClientComponent/login_user.vue'
import registerUser from '../views/ClientComponent/register_user.vue'
import homePage from '../views/ClientComponent/home_page.vue'
import courseDetail from '../views/ClientComponent/course_detail.vue'
import profileEdit from '../views/ClientComponent/course_detail.vue'
import payCourse from '../views/ClientComponent/payment.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: loginUser
  },
  {
    path : '/register',
    name : 'register.form',
    component : registerUser
  },
  {
    path : '/homePage',
    name : 'homePage.view',
    component : homePage
  },
  {
    path : '/courseDetail',
    name : 'courseDetail.view',
    component : courseDetail
  },
  {
    path : '/profileEdit',
    name : 'profileEdit.view',
    component : profileEdit
  },
  {
    path : '/payment',
    name : 'payment.view',
    component : payCourse
  },

]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

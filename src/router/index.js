import { createRouter, createWebHistory } from 'vue-router'
import loginUser from '../components/ClientComponent/login_user.vue'
import registerUser from '../components/ClientComponent/register_user.vue'
import homePage from '../components/ClientComponent/home_page.vue'
import courseDetail from '../components/ClientComponent/course_detail.vue'
import profileEdit from '../components/ClientComponent/profile_edit.vue'
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

]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

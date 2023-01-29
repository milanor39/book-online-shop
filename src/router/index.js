import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/store/HomeView.vue'
import LoginView from '../views/member/LoginView.vue'
import LoggedoutView from '../views/LoggedoutView'
import RegisterView from '../views/member/RegisterView.vue'
import RegisterSucess from '../views/member/RegisterSucess.vue'
import MembercenterView from '../views/member/MembercenterView.vue'
import CartView from '../views/cart/CartView.vue'
import ShoppingFinish from '../views/cart/ShoppingFinish.vue'

import LiteratureView from '../views/store/LiteratureView.vue'
import LiteratureDetail from '../components/book/detail/LiteratureDetail.vue'
import BusinessView from '../views/store/BusinessView.vue'
import BusinessDetail from '../components/book/detail/BusinessDetail.vue'
import ArtView from '../views/store/ArtView.vue'
import ArtDetail from '../components/book/detail/ArtDetail.vue'
import HumanitiesView from '../views/store/HumanitiesView.vue'
import HumanitiesDetail from '../components/book/detail/HumanitiesDetail.vue'
import TravelView from '../views/store/TravelView.vue'
import TravelDetail from '../components/book/detail/TravelDetail.vue'
import ComicView from '../views/store/ComicView.vue'
import ComicDetail from '../components/book/detail/ComicDetail.vue'

import NotfoundView from '../views/NotfoundView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/loggedout',
    name: 'loggedout',
    component: LoggedoutView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/register/sucess',
    component: RegisterSucess
  },
  {
    path: '/membercenter',
    name: 'membercenter',
    component: MembercenterView
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView
  },
  {
    path: '/cart/finish',
    component: ShoppingFinish
  },
  //分類
  {
    path: '/literature',
    name: 'literature',
    component: LiteratureView
  },
  {
    path: '/literature/:id',
    component: LiteratureDetail,
    props: true
  },
  {
    path: '/business',
    name: 'business',
    component: BusinessView
  },
  {
    path: '/business/:id',
    component: BusinessDetail,
    props: true
  },
  {
    path: '/art',
    name: 'art',
    component: ArtView
  },
  {
    path: '/art/:id',
    component: ArtDetail,
    props: true
  },
  {
    path: '/humanities',
    name: 'humanities',
    component: HumanitiesView
  },
  {
    path: '/humanities/:id',
    component: HumanitiesDetail,
    props: true
  },
  {
    path: '/travel',
    name: 'travel',
    component: TravelView
  },
  {
    path: '/travel/:id',
    component: TravelDetail,
    props: true
  },
  {
    path: '/comic',
    name: 'comic',
    component: ComicView
  },
  {
    path: '/comic/:id',
    component: ComicDetail,
    props: true
  },
  {
    path: '/:notFound(.*)',
    name: 'notfound',
    component: NotfoundView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

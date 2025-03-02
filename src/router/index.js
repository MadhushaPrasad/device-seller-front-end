import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Home from '@/views/Home.vue'
import Register from '@/views/Register.vue'
import Profile from '@/views/Profile.vue'
import Admin from '@/views/Admin.vue'
import UnauthorizedAccess from '@/views/UnauthorizedAccess.vue'
import NotFound from '@/views/NotFound.vue'
import Role from '@/models/role'
import Store from '@/stores/index'
const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      roles: [Role.USER, Role.ADMIN],
    },
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: {
      roles: [Role.ADMIN],
    },
  },
  {
    path: '/not-found',
    name: '/404',
    component: NotFound,
  },
  {
    path: '/unauthorized',
    name: '/401',
    component: UnauthorizedAccess,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/Admin.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const { roles } = to.meta
  const currentUser = Store.getters['currentUser']

  if (!roles?.length) {
    if (currentUser) {
      return next({ path: '/login' })
    } else {
      return next()
    }
  }

  if (!roles?.includes(currentUser.role)) {
    return next({ path: '/unauthorized' })
  }

  next()
})

export default router

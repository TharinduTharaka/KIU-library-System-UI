import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
// import componentsRouter from './modules/components'
// import chartsRouter from './modules/charts'
// import tableRouter from './modules/table'
// import nestedRouter from './modules/nested'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile/index'),
        name: 'Profile',
        meta: { title: 'Profile', icon: 'user', noCache: true }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/module_3',
    component: Layout,
    redirect: '/module_3/add_documents',
    alwaysShow: true, // will always show the root menu
    name: 'LibraryDocuments',
    meta: {
      title: 'Library Documents',
      icon: 'lock',
    },
    children: [
      {
        path: 'add_documents',
        component: () => import('@/views/library-documents/add-documents/index'),
        name: 'AddDocuments',
        meta: {
          title: 'Add Documents',
        }
      },
      // {
      //   path: 'directive',
      //   component: () => import('@/views/permission/directive'),
      //   name: 'DirectivePermission',
      //   meta: {
      //     title: 'Directive Permission'
      //     // if do not set roles, means: this page does not require permission
      //   }
      // },
      // {
      //   path: 'role',
      //   component: () => import('@/views/permission/role'),
      //   name: 'RolePermission',
      //   meta: {
      //     title: 'Role Permission',
      //     roles: ['admin']
      //   }
      // }
    ]
  },


  {
    path: '/module_1',
    component: Layout,
    children: [
      {
        path: 'resources',
        component: () => import('@/views/e-resources/complex-table'),
        name: 'Tab',
        meta: { title: 'E Resources', icon: 'tab' }
      }
    ]
  },
  {
    path: '/module_2',
    component: Layout,
    children: [
      {
        path: 'database_UI',
        component: () => import('@/views/database-ui/index'),
        name: 'Tab',
        meta: { title: 'Database UI', icon: 'tab' }
      }
    ]
  },

  // {
  //   path: '/module_3',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'library_documents',
  //       component: () => import('@/views/library-documents/index'),
  //       name: 'Tab',
  //       meta: { title: 'Library Documents', icon: 'tab' }
  //     }
  //   ]
  // },
  {
    path: '/module_4',
    component: Layout,
    children: [
      {
        path: 'library_concerns',
        component: () => import('@/views/library-concerns/index'),
        name: 'Tab',
        meta: { title: 'Library Concerns', icon: 'tab' }
      }
    ]
  },
  {
    path: '/module_5',
    component: Layout,
    children: [
      {
        path: 'book_requirements',
        component: () => import('@/views/book-requirements/index'),
        name: 'Tab',
        meta: { title: 'Book Requirements', icon: 'tab' }
      }
    ]
  },
  {
    path: '/module_6',
    component: Layout,
    children: [
      {
        path: 'library_resource_concerns',
        component: () => import('@/views/library-resource-concerns/index'),
        name: 'Tab',
        meta: { title: 'Library Resource Concerns', icon: 'tab' }
      }
    ]
  },
  {
    path: '/module_7',
    component: Layout,
    children: [
      {
        path: 'service_concerns',
        component: () => import('@/views/service-concerns/index'),
        name: 'Tab',
        meta: { title: 'Service Concerns', icon: 'tab' }
      }
    ]
  },
  {
    path: '/module_8',
    component: Layout,
    children: [
      {
        path: 'meetings',
        component: () => import('@/views/meetings/index'),
        name: 'Tab',
        meta: { title: 'Meetings', icon: 'tab' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router

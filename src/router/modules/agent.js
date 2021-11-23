import Layout from '@/layout'

const agnetRouter = {
  path: '/agent',
  component: Layout,
  redirect: '/agent/index',
  name: 'Agent',
  meta: {
    title: '代理商管理',
    icon: 'tree'
  },
  children: [
    {
      path: 'index',
      component: () => import('@/views/agent/index'),
      name: '代理商列表',
      meta: { title: '代理商列表' }
    },
    {
      path: 'add',
      component: () => import('@/views/agent/add'),
      name: '添加代理商',
      hidden: true,
      meta: { title: '添加代理商', activeMenu: '/agent/index' }
    },
    {
      path: 'details',
      component: () => import('@/views/agent/details'),
      name: '代理商详情',
      hidden: true,
      meta: { title: '代理商详情', activeMenu: '/agent/index' }
    }
  ]
}
export default agnetRouter

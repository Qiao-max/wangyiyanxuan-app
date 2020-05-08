// 商品详情数据
export default {
  path: '/itemdetail/:id',
  components: {
    detail: ()=>import('@pages/common/goods-detail')
  },
  props: {
    detail: true
  },
  children: [
    {
      path: 'buy',
      component: ()=>import('@pages/common/handle-buy')
    }
  ]
}
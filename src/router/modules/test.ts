export default {
  path: "/test",
  meta: {
    title: "测试"
  },
  children: [
    {
      path: "/test/index",
      name: "Test",
      component: () => import("@/views/test/index.vue"),
      meta: {
        title: "测试"
      }
    }
  ]
};

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "productlist",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProductList.vue"),
  },
  {
    path: "/detail",
    name: "productdetail",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProductDetail.vue"),
  },
  {
    path: "/create",
    name: "productcreate",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProductCreate.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

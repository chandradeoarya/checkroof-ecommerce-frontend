import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Product from "@/views/Product";
import Category from "@/views/Category";
import Search from "../views/Search.vue";
import Cart from "../views/Cart.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/:category_slug/:product_slug/",
    name: "Product",
    component: Product,
  },
  {
    path: "/:category_slug/",
    name: "Category",
    component: Category,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

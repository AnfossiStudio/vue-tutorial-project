import { createRouter, createWebHistory } from "vue-router";
import DCHeros from "./pages/DCHeros";
import Calendar from "./pages/Calendar";
import Home from "./pages/Home";
import Markdown from "./pages/Markdown";
import Slider from "./pages/Slider";
import Calculator from "./pages/Calculator";
import Chats from "./pages/Chats";
import UserCrud from "./pages/UserCrud";
import store from "./store/index";

const routes = [
  { path: "/", component: Home },
  { path: "/dc-heros", component: DCHeros },
  { path: "/calendar", component: Calendar },
  { path: "/markdown", component: Markdown },
  { path: "/slider", component: Slider },
  { path: "/calculator", component: Calculator },
  {
    path: "/chats",
    component: Chats,
    meta: { middleware: "auth" },
    beforeEnter: (_, __, next) => {
      if (!store.state.isLoggedIn) {
        next("/");
        store.commit("setLoginModal", true);
      } else {
        next();
      }
    }
  },
  {
    path: "/user-crud",
    component: UserCrud
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "text-white font-semibold opacity-100"
});

export default router;

import store from "../store";

export default function (_, __, next) {
  if (!store.state.isLoggedIn) {
    next("/");
  } else {
    next();
  }
}

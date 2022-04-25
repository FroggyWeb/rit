import { createWebHistory, createRouter } from "vue-router";
import Catalog from "../component/Catalog.vue";
import Form from "../component/Form.vue";
const routes = [
  {
    path: "/html/configurator.html",
    name: "Catalog",
    component: Catalog,

  },
  {
    path: "/html/configurator-form.html",
    name: "CartForm",
    component: Form,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;

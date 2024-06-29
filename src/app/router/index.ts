import { createMemoryHistory, createRouter } from "vue-router";

const routes = [
  { name: "home", path: "/", component: () => import("~pages/home") },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

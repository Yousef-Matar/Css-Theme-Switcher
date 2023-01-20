import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "HomeView",
		component: () => import("@/views/HomeView.vue")
	},
	{
		path: "/about",
		name: "AboutView",
		component: () => import("@/views/AboutView.vue")
	},
	{
		path: "/login",
		name: "LoginView",
		component: () => import("@/views/LoginView.vue")
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import NewPassword from "../views/NewPassword.vue";
import NewPasswordToken from "../views/NewPasswordToken.vue";

const routes = [
    {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard,
    },
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: "/new-password",
        name: "new-password",
        component: NewPassword,
    },
    {
        path: "/new-password/token",
        name: "new-password-token",
        component: NewPasswordToken,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

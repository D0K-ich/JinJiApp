import {createRouter, createWebHistory} from "vue-router";
import MainPage from "../views/pages/MainPage.vue";
import DJINneirochat from "../views/pages/DJINneirochat.vue";
import RegLog from "../views/pages/RegLog.vue";

export default createRouter ({
    history: createWebHistory(),
    routes: [
        { path: '/', component: MainPage},
        { path: '/neirochat', component: DJINneirochat },
        { path: '/reglog', component: RegLog}
    ]
})
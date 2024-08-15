import {createRouter, createWebHistory} from "vue-router";
import MainPage from "../views/pages/MainPage.vue";
import Chat from "../views/pages/Chat.vue";
import RegLog from "../views/pages/RegLog.vue";

export default createRouter ({
    history: createWebHistory(),
    routes: [
        { path: '/', component: MainPage},
        { path: '/jin-chat', component: Chat },
        { path: '/auth', component: RegLog}
    ]
})
import {createRouter, createWebHistory} from "vue-router";
import MainPage from "../views/pages/MainPage.vue";
import Chat from "../views/pages/Chat.vue";
import RegLog from "../views/pages/RegLog.vue";
import AnimeSearch from "../views/pages/AnimeSearch.vue";
import Aiselection from "../views/pages/Aiselection.vue";

export default createRouter ({
    history: createWebHistory(),
    routes: [
        { path: '/', component: MainPage},
        { path: '/jin-chat', component: Chat },
        { path: '/auth', component: RegLog},
        { path: '/anime', component: AnimeSearch},
        { path: '/AIselection', component: Aiselection}
    ]
})
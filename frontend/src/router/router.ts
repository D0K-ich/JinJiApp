import {createRouter, createWebHistory} from "vue-router";
import MainPage from "../views/main/MainPage.vue";
import Chat from "../views/general/Chat.vue";
import RegLog from "../views/auth/RegLog.vue";
import AnimeSearch from "../views/search/AnimeSearch.vue";
import AiSelection from "../views/selections/ai/AiSelection.vue";
import NotFound from "../views/general/errors/NotFound.vue";
import Error502 from "../views/general/errors/Error502.vue";


export default createRouter ({
    history: createWebHistory(),
    routes: [
        { path: '/',                component: MainPage},
        { path: '/jin-chat',        component: Chat},
        { path: '/auth',            component: RegLog},
        { path: '/search-anime',    component: AnimeSearch},
        { path: '/502',             component: Error502},
        { path: '/AiSelection',     component: AiSelection},

        {path: '/:pathMatch(.*)*',  component: NotFound},

    ]
})
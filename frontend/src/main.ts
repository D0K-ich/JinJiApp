import "vuetify/styles";
import {createApp} from 'vue'
import App from './App.vue'
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader
import "@fortawesome/fontawesome-free/css/all.css"; // Ensure your project is capable of handling css files

const app = createApp(App)

const dok_theme = {
    dark: true,
    colors: {
        background: '#120332',
        surface: '#120332', //for fill components
        'surface-bright': '#9370DBFF',
        'surface-light': '#9370DBFF',
        'surface-variant': '#424242',
        'on-surface-variant': '#120332',
        primary: '#1867C0',
        'primary-darken-1': '#1F5592',
        secondary: '#48A9A6',
        'secondary-darken-1': '#018786',
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
    },
    variables: {
        'border-color': '#000000',
        'border-opacity': 0.12,
        'high-emphasis-opacity': 0.87,
        'medium-emphasis-opacity': 0.60,
        'disabled-opacity': 0.38,
        'idle-opacity': 0.04,
        'hover-opacity': 0.04,
        'focus-opacity': 0.12,
        'selected-opacity': 0.08,
        'activated-opacity': 0.12,
        'pressed-opacity': 0.12,
        'dragged-opacity': 0.08,
        'theme-kbd': '#212529',
        'theme-on-kbd': '#9370DBFF',
        'theme-code': '#9370DBFF',
        'theme-on-code': '#000000',
    }
}

const vuetify = createVuetify({
    theme: {
        defaultTheme: 'dok_theme',
        themes: {
            dok_theme,
        },
    },
    icons: {
        defaultSet: "mdi",
    },
    components,
    directives,
});

app.use(vuetify)
app.mount("#app")
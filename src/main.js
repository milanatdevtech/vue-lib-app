import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'

import store from './store/index.js';
import router from './router.js';

import BaseCard from './components/ui/BaseCard.vue';
//import BaseBadge from './components/ui/BaseBadge.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseSpinner from './components/ui/BaseSpinner.vue';
import BaseDialog from './components/ui/BaseDialog.vue';

const app = createApp(App)

app.use(store);
app.use(router);

app.component('base-spinner', BaseSpinner);
app.component('base-dialog', BaseDialog);
app.component('base-button', BaseButton);
app.component('base-card', BaseCard);

app.mount('#app');

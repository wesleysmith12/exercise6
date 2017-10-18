import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
    methods: {
        sendServerId(servers, id) {
            this.$emit('idWasSent', servers, id);
        }
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
})

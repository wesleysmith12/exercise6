<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
                    class="list-group-item"
                    v-for="server in this.servers"
                    @click="sendDetails(server.id)">
                Server #{{ server.id }}
            </li>
        </ul>
    </div>
</template>

<script>
    import { eventBus } from '../../main.js';
    export default {
        data: function() {
            return {

                servers: [

                    { id: 1, status: 'Normal'},
                    { id: 2, status: 'Critical'},
                    { id: 3, status: 'Unknown'},
                    { id: 4, status: 'Normal'}
                ]

            };

        },
        methods: {
            sendDetails(id){
                //alert("hello server #" + server.id + " status: " + server.status);
                eventBus.sendServerId(this.servers, id);
            }

        }
    }
</script>

<style>

</style>

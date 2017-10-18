<template>
    <div class="col-xs-12 col-sm-6">
        <!--<p>Server Details are currently not updated</p>-->
        <p>{{selectedStatus}}</p>
        <button @click="toNormal">Change to Normal</button>
    </div>

</template>

<script>
    import { eventBus } from '../../main.js';
    export default {
        props: {
            servers: Array,
            serverId: Number,
            status: String
        },
        data: function() {
            return {

                selectedStatus: "Please Select a Server"

            };

        },
        methods: {
            toNormal(){
                if(this.serverId == null)
                {
                    alert("select a server first");
                    return;
                }
                this.selectedStatus = "Server #" + this.serverId + " Selected, Status: Normal";
            }
        },
        created() {
            eventBus.$on('idWasSent', (servers, id) => {
                //this.userAge = age;
                this.servers = servers;
                for(var i = 0; i < servers.length; i++)
                {
                    if(this.servers[i].id == id)
                    {
                        this.serverId = this.servers[i].id;
                        this.selectedStatus = "Server #" + this.serverId + " Selected, Status: " + this.servers[i].status;
                    }
                }
            });
        }
    }
</script>

<style>

</style>

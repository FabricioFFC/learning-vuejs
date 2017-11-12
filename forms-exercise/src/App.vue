<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <sign-up :user="user" @submittedData="updateSubmittedData"> </sign-up>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="showSubmittedData">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{user.fullName}}</p>
                        <p>Mail: {{user.email}}</p>
                        <p>Password: {{user.password}}</p>
                        <p>Store in Database?: {{user.stored}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SignUp from './components/SignUp.vue';

    export default {
        components: {
            'sign-up': SignUp
        },
        data: () => {
            return {
                user: {},
                showSubmittedData: false
            }
        },
        methods: {
            updateSubmittedData() {
                this.showSubmittedData = true;
            }
        }
    }
</script>

<style>
</style>

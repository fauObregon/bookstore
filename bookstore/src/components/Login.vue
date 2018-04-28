<template>
    <auth-form actions="login" v-on:process="login($event)" />
</template>

<script>
    import AuthForm from '@/forms/Auth';
    import {db} from '@/main'
    export default {
        name: 'login',
        components: { AuthForm },
        methods: {
            login(user){
                console.log(user);
            }
        }
    }
</script>

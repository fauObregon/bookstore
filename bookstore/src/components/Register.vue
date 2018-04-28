<template>
    <auth-form actions="register" v-on:process="register($event)" />
</template>

<script>
    import AuthForm from '@/forms/Auth';
    export default {
        name: 'Register',
        components: { AuthForm },
        methods: {
            register(user){
                console.log(user);
                this.$store.dispatch('firebaseRegister',user)
                .then((userRegistered)=>{
                    const data = {
                        uid: userRegistered.uid,
                        email: user.email,
                        rol: 'customer'
                    };
                    db.collection('users').doc(userRegistered.uid).set(data)
                    .then(()=>{
                        this.$store.commit('setRole', data.role);
                        this.$router.push('/');
                    });
                }).catch((error)=>{
                    console.log(error);
                })
            }
        }
    }
</script>


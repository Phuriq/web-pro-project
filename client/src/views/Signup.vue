<script>
import axios from "axios"
import { required } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
export default {
    setup: () => ({ v$: useVuelidate() }),
    data() {
        return {
            username: '',
            password: '',
            useremail: '',
            userphone: ''
        }

    },
    validations() {
        return {
            formData: {
                code: { required },
                title: { required },
                term: { required },
            }
        }
    },
    methods: {
        async register() {
            try {
                const response = await axios.post('http://localhost:8080/api/user/signup', {
                    userName: this.username,
                    userPassword: this.password,
                    userEmail: this.useremail,
                    userPhone: this.userphone,
                })
                //response.data.User.userName
                console.log(response)
                this.$router.push('/signin')
                    .then(() => window.location.reload());

            } catch (error) {
                alert(error.response.data.message)
            }
        }
    }
}
</script>

<template>
    <div class="fade flex text-4xl justify-content-center mt-4">
        <h5>Sign up</h5>
    </div>
    <div class="fadein flex justify-content-center">
        <Card style="width: 30rem" class="surface-50 border-round-xs">
            <template #content>
                <div class="flex flex-column">
                    <h5>Email</h5>
                    <InputText type="text" v-model="useremail" />
                    <h5>Username</h5>
                    <InputText type="text" v-model="username" />
                    <h5>Password</h5>
                    <InputText type="text" v-model="password" />
                    <h5>Tel</h5>
                    <InputText type="number" v-model="userphone" />
                </div>
                <div class="flex flex-column">
                    <Button label="let's get started" @click.prevent="register"
                        class=" text-xl flex flex-column justify-content-center p-button-primary mt-5" />
                </div>
                <router-link to="/signin">
                    <div class="flex flex-column">
                        <Button label="Go back"
                            class="text-xl flex flex-column justify-content-center p-button-secondary mt-5" />
                    </div>
                </router-link>
            </template>
        </Card>
    </div>
</template>
<style></style>

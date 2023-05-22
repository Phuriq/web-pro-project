<script>
import axios from "axios"
import { required, email, maxLength } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
export default {
    setup() { return { v$: useVuelidate() } },
    data() {
        return {
            formData: {
                username: '',
                password: '',
                useremail: '',
                userphone: ''
            }
        }

    },
    validations() {
        return {
            formData: {
                username: { required, },
                password: { required, maxLength: maxLength(10) },
                useremail: { required, email },
                userphone: { required, maxLength: maxLength(10) }
            }
        }
    },
    methods: {
        async register() {
            try {
                this.v$.$touch(); // Trigger validation
                if (!this.v$.$invalid) {
                    await axios.post('http://localhost:8080/api/user/signup', {
                        userName: this.formData.username,
                        userPassword: this.formData.password,
                        userEmail: this.formData.useremail,
                        userPhone: this.formData.userphone,
                    });
                     this.$router.push('/signin')
                         .then(() => window.location.reload());
                } else {
                    throw new Error("validate is not pass")
                }
            } catch (error) {
                alert(error?.response?.data?.message || error?.message)
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
        <form @submit.prevent="handleSubmit(!v$.$invalid)">
            <Card style="width: 30rem" class="surface-50 border-round-xs">
                <template #content>
                    <div class="flex flex-column">
                        <h5>Email</h5>
                        <InputText type="email" v-model="formData.useremail" class="w-full"
                            :class="{ 'p-invalid': v$.formData.useremail.$invalid && submitted }" />
                        <small
                            v-if="(v$.formData.useremail.$invalid && submitted) || v$.formData.useremail.$pending.$response"
                            class="p-error px-1">{{ v$.formData.useremail.required.$message.replace('Value',
                                'รหัสรายวิชา').replace('is required', 'จำเป็นต้องกรอก') }}
                        </small>
                        <h5>Username</h5>
                        <InputText type="text" v-model="formData.username" />
                        <h5>Password</h5>
                        <InputText type="text" v-model="formData.password" />
                        <h5>Tel</h5>
                        <InputText type="number" v-model="formData.userphone" />
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
        </form>
    </div>
</template>
<style></style>

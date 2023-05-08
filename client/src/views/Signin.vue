<script>
import CardItem from "../components/CardItem.vue"
import axios from 'axios'

export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:8080/api/user/signin', {
          userName: this.username,
          userPassword: this.password
        })
        localStorage.setItem('accessToken', response.data.accessToken)
        localStorage.setItem("user", JSON.stringify(response.data.user));
        this.$router.push('/home')
      } catch (error) {
        alert(error.response.data.message)
      }
    }
  }
}
</script>

<template>
    <div>
        <img src="" alt="">
    </div>
    <div class="flex text-4xl justify-content-center mt-8">
        <h5>Sign in to MAXCIMA</h5>
    </div>
    <div class="flex justify-content-center mt-5">
        <Card style="width: 25rem" class="surface-50 border-round-xs" id="grad2">
            <template #content>
                <div class="flex flex-column">
                    <h5>Username</h5>
                    <InputText type="text" v-model="username"/>
                    <h5 class="mt-5">Passwordㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
                        <router-link to="/forgot">
                        <span class="text-pink-100">Forgot password?</span>
                    </router-link>
                    </h5>
                    <InputText type="password" v-model="password"/>
                </div>
                <router-link to="/home">
                <div class="flex flex-column">
                    <Button @click.prevent="login" label="Sign in" class="flex justify-content-center p-button-primary mt-5" />
                </div>
                </router-link>
            </template>
        </Card>
    </div>
    <div class="flex justify-content-center mt-4">
        <Card style="width: 25rem" class="border-round-xs" id="grad2">
            <template #content>
                <div class="flex justify-content-center">
                    New to MAXCIMA?ㅤ
                    <router-link to="/signup">
                        <span class="text-pink-100">Create a account</span>
                    </router-link>
                </div>
            </template>
        </Card>
    </div>
</template>
<style>
body{
    background-image: url("https://cdn.discordapp.com/attachments/944864017460101151/1080893542676840458/image-removebg-preview_1_1.png");
    background-repeat: no-repeat;
    background-size: auto;
    background-position:  50% -130%;
}
#grad2 {
    background-image: linear-gradient(to  bottom right, #000000, #000000, #000000);}
</style>


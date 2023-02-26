<script setup>
import CardItem from "../components/CardItem.vue"
</script>

<template>
    <div>
        <img src="" alt="">
    </div>
    <div class="flex text-4xl justify-content-center mt-8">
        <h5>Sign in to Madooxxxx</h5>
    </div>
    <div class="flex justify-content-center">
        <Card style="width: 25rem" class="surface-50 border-round-xs">
            <template #content>
                <div class="flex flex-column">
                    <h5>Username</h5>
                    <InputText type="text" v-model="value1" />
                    <h5>Passwordㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
                        <router-link to="/forgot">
                        <span class="text-pink-100">Forgot password?</span>
                    </router-link>
                    </h5>
                    <InputText type="text" v-model="value1" />
                </div>
                <router-link to="/home">
                <div class="flex flex-column">
                    <Button label="Sign in" class="flex justify-content-center p-button-primary mt-5" />
                </div>
                </router-link>
            </template>
        </Card>
    </div>
    <div class="flex justify-content-center mt-4">
        <Card style="width: 25rem" class="border-round-xs">
            <template #content>
                <div class="flex justify-content-center">
                    New to Madooxxxx?ㅤ
                    <router-link to="/signup">
                        <span class="text-pink-100">Create a account</span>
                    </router-link>
                </div>
            </template>
        </Card>
    </div>
</template>


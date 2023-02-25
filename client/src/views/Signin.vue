<script setup>
import CardItem from "../components/CardItem.vue"
</script>

<template>
    <div class="flex justify-content-center">
        <div class="card mt-5 bg-black-alpha-50 shadow-2 ">
            <h5 class="text-center">Sign in</h5>
            <div class="field">
                <span class="p-float-label">
                    <InputText id="username" type="text" v-model="value" />
                    <label for="username">Username</label>
                </span>
            </div>
        </div>
    </div>
</template>


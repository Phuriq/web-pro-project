<template>
    <div class="flex justify-content-between w-full bg-gray-900 p-2">
        <div>
            <Avatar label="P" class="mx-3" style="background-color:#2196F3; color: #ffffff" shape="circle" />
            <router-link to="/home">
            <Button label="Home" class="p-button-text ml-5" />
            </router-link>
            <router-link to="/movie">
            <Button label="Cinema" class="p-button-text ml-3" />
            </router-link>
            <router-link to="/theater">
            <Button label="Theater" class="p-button-text ml-3" />
            </router-link>
        </div>
        <div class="flex align-content-center h-full">
            <div>
                <input class="p-inputtext p-component mr-5 border-green-600 p-inputtext-sm" placeholder="Search" type="text">
            </div>
            <p class="mt-2"> kstandforkyu </p>
            <Avatar label="K" class="mx-3" style="background-color:#2196F3; color: #ffffff" shape="circle" />
        </div>
    </div>
</template>
<script>
export default {
};
</script>
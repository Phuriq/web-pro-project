<template>
    <div id=grad1 class="flex align-items-center justify-content-between w-full bg-gray-900 p-2">
        <div class="flex align-items-center">
            <Avatar label="P" class="align-self-center" style="background-color:#2196F3; color: #ffffff" shape="circle" />
            <router-link to="/home">
                <Button label="Home" class="p-button-text ml-5" id=button />
            </router-link>
            <router-link to="/movie">
                <Button label="Cinema" class="p-button-text ml-3" id=button />
            </router-link>
            <router-link to="/theater">
                <Button label="Theater" class="p-button-text ml-3" id=button />
            </router-link>
        </div>
        <div class="flex align-content-center h-full">
            <div>
                <!-- <form action="" method="GET"> -->
                    <input class="p-inputtext p-component mr-4 border-green-600 p-inputtext-sm border-round-3xl"
                        placeholder="Search" type="text">
                <!-- </form> -->
            </div>
            <p class="align-self-center"> kstandforkyu </p>
            <Avatar label="K" class="align-self-center mx-4" style="background-color:#2196F3; color: #ffffff" shape="circle" />
        </div>
    </div>
</template>
<script>
export default {
};
</script>

<style>
#grad1 {
    background-image: linear-gradient(to bottom right, #000000, #2F4F4F, #8FBC8F);
}

#button:hover {
    background-color: #5F9EA0;
    color: white;
}
</style>
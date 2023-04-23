<script>
export default {
    props: [
        "id",
        "name",
        "date",
        "image",
        "title",
        "trailer",
        "category",
        "time"
    ]
}
</script>

<template>
    <div id=card-bg class="flex flex-row surface-ground border-round-2xl mt-8" style="height: 250px; width: 750px ">
        <img :src="image" style="height: 250px" class="border-round-xl" />
        <div>
            <div class="flex flex-row mx-5">
                <h4 class="text-xl mt-3"> {{ name }}</h4>
            </div>
            <div class="flex flex-row mx-5">
                <h2 class="text-xl mt-3"> {{ time }} </h2>
            </div>
            <div class="flex flex-row mx-5">
                <h3 class="text-xl mt-3"> {{ category }}</h3>
            </div>
        </div>
    </div>
</template>
<style>
#card-bg {
    background-image: linear-gradient(to bottom right, #0b4438, #141b17, #165346)
}
</style>
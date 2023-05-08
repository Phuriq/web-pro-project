<script>
export default {
    props: [
        'img_src',
        'title',
        'date',
        'price',
        'seat',
        "trailer"
    ]
}
</script>

<template>
    <Card id=card-bg class="flex surface-ground border-3 border-round border-green-600"
        style="height: 650px; width: 300px ">
        <template #content>
            <img :src="img_src" style="height: 400px" class="border-round-xl" />
            <h5 class="text-xl mt-1">{{ title }}</h5>
            <h4 class="text-sm mt-1 text-yellow-200">ราคา : {{ price }} ที่นั่ง : {{ seat }}</h4>
            <router-link to="/checkout">
                <Button class="flex flex-column mt-5" label="KYU" style="width: 260px" />
            </router-link>
        </template>
    </Card>
</template>
<style>
#card-bg {
    background-image: linear-gradient(to bottom right, #0b4438, #141b17, #165346)
}
</style>
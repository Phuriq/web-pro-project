<script>
export default {
    props: [
        "id",
        "name",
        "date",
        "image",
        "title",
        "trailer"
    ]
}
</script>

<template>
    <div>
        <Card id=card-bg class="flex flex-column surface-ground border-round-2xl" style="height: 550px; width: 300px ">
            <template #content>
                <img :src="image" style="height: 400px" class="border-round-xl" />
                <h5 class="text-green-400 mt-2">{{ date }}</h5>
                <h4 class="text-xl mt-3">{{ name }}</h4>
            </template>
        </Card>
    </div>
</template>
<style>
#card-bg {
    background-image: linear-gradient(to bottom right, #0b4438, #141b17, #165346)
}
</style>
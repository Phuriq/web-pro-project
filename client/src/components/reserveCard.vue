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
        "seat",
        "theater",
        "round",
    ]
}
</script>

<template>
    <div>
        <Card id=card-bg class="flex flex-column align-items-center surface-ground border-round-2xl" style="height: 595px; width: 275px ">
            <template #content>
                <div>
                <img :src="image" style="height: 300px; width: 250px" class="border-round-xl" />
                <h5 class="text-green-400 mt-2">วันที่ซื้อ : {{ date }}</h5>
                <h4 class="mt-3">{{ name }}</h4>
                <h4 class="mt-3">ที่นั่ง : {{ seat }}</h4>
                <h4 class="mt-3">{{ theater }}</h4>
                <h4 class="mt-3">รอบฉาย : {{ round }} </h4>
                </div>
            </template>
        </Card>
    </div>
</template>
<style>
#card-bg {
    background: linear-gradient(150deg, #013812, #200467 100%);
}
</style>
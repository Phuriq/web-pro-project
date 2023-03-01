<script>
export default {
    props: [
        'img_src',
        'title',
        'date',
        'price',
        'seat'
    ]
}
</script>

<template>
    <div>
        <Card class="flex flex-column surface-ground" style="height: 550px; width: 300px ">
            <template #content>
                <img :src="img_src" style="height: 400px" class="border-round-xl"/>
                    <h5 class="text-xl mt-3">{{ title }}</h5>
                    <h4 class="text-xl mt-3 text-yellow-200" >ราคา : {{ price }} ที่นั่ง : {{ seat }}</h4>
            </template>
        </Card>
    </div>
</template>
<script>
export default {
    props: [
        'img_src',
        'title',
        'date'
    ]
}
</script>

<template>
    <div>
        <Card class="flex flex-column surface-ground" style="height: 550px; width: 300px ">
            <template #content>
                <img :src="img_src" style="height: 400px" class="border-round-xl"/>
                <p class="text-green-400 mt-2">{{ date }}</p>
                <router-link to="/movieinfo">
                    <h5 class="text-xl mt-3">{{ title }}</h5>
                </router-link>
            </template>
        </Card>
    </div>
</template>
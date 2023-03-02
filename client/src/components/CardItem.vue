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
        <Card id= card-bg class="flex flex-column surface-ground border-round-2xl" style="height: 550px; width: 300px ">
            <template #content>
                <img :src="img_src" style="height: 400px" class="border-round-xl"/>
                <h5 class="text-green-400 mt-2">{{ date }}</h5>
                <router-link to="/movieinfo">
                    <h4 class="text-xl mt-3">{{ title }}</h4>
                </router-link>
            </template>
        </Card>
    </div>
</template>
<style>
#card-bg{
    background-image:  linear-gradient(to  bottom right, #0b4438, #141b17, #165346)
}
</style>
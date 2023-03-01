<script>
import CardItem from "../components/CardItem.vue"
export default {
    data() {
        return {
        }
    },
    components: {
        CardItem
    }
}
</script>

<template>
    <div class="grid mt-5">
        <div class="col-3" style="width: 20rem">
            <CardItem></CardItem>
        </div>
        <div class="ml-6 p-5 text-xl">
            <p>Date</p>
            <div class="mt-5 text-2xl">
                <h5>Movie name</h5>
            </div>
            <div class="mt-8">
                <router-link to="/booking">
                    <Button class="p-button-outlined" label="จองรอบฉาย" />
                </router-link>
            </div>
        </div>
        <div class="flex justify-content-end flex-wrap ml-8">
            <iframe width="800" height="450" src="https://www.youtube.com/embed/JY6rUiuxyFI" title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
        </div>
    </div>
    <div class="mt-5">
        <div class="text-xl">
            <h5>เรื่องย่อ</h5>
            <p>ชื่อ: Hong Eunchae (홍은채) (ฮงอึนแช)</p>
        </div>
    </div>
</template>

<style>
* {
    margin: 0;
    padding: 0;
}
</style>


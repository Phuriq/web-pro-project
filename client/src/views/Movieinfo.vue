<script >
import CardItem from "../components/CardItem.vue"
import Movies from '../mockup/movies.json';

export default {
    name: "Movieinfo",
    props: {
        id: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            movie: {},
        }
    },
    methods: {
        goBooking: function () {
            this.$router.push('/booking/' + this.id)
        }
    },
    mounted() {
        this.movie = Movies.find(movie => movie.id == this.id);
    },
    components: {
        CardItem
    },
}
</script>

<template>
    <div class="grid mt-5 px-5">
        <div class="col-3" style="width: 20rem">
            <img :src="this.movie.image" style="height: 400px" class="border-round-xl">
        </div>
        <div class=" p-5 text-xl">
            <p> {{ this.movie.date }} </p>
            <div class="mt-5 text-2xl">
                <h5>{{ this.movie.name }}</h5>
            </div>
            <div class="mt-8">
                <Button class="p-button-outlined" label="จองรอบฉาย" @click="goBooking()" />
            </div>
        </div>
        <div class="flex justify-content-end flex-wrap">
            <iframe width="800" height="450" :src="this.movie.trailer" title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen>
            </iframe>
        </div>
    </div>
    <div class="mt-5 px-5">
        <div class="text-xl">
            <h5>เรื่องย่อ</h5>
            <p class="">{{ this.movie.title }}</p>
        </div>
    </div>
</template>

<style>
* {
    margin: 0;
    padding: 0;
}

iframe {
    position: relative;
    left: 50%;
}
</style>


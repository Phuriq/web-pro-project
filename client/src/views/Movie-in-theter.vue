<script>

import CardItem from "../components/CardItem.vue"
import Movieintheater from "../components/movieintheater.vue";
import Movies from '../mockup/movies.json';
import Showtimes from '../components/showtime.vue';

export default {
    name: "App",
    components: {
        CardItem,
        Movieintheater,
        Showtimes
    },
    data() {
        return {
            movies: []
        };
    },
    mounted() {
        this.movies = Movies
    },
    methods: {
        filterTag(tag) {
            console.log(tag)
        },
        navigateInfo(id) {
            this.$router.push('/movieinfo/' + id)
        }
    },

};
</script>

<template>
    <div class="fadeinleft animation-duration-200">
        <div class="flex justify-content-center mt-5 mb-5">
            <Button class="p-button-text mr-5 text-3xl" label="NowShowing" />
        </div>
        <div class="" id=bg3>
            <div class="row" v-for="movie in movies" :key="movie.id" id=bg1>
                <div class="grid">
                </div>
                <Movieintheater class="cursor-pointer" :image="movie.image" :name="movie.name" :category="movie.category"
                    :time="movie.time" id="card" @click="navigateInfo(movie.id)">
                </Movieintheater>
                <div>
                    <Showtimes :theater="movie.theater" :showtime="movie.showtime">
                    </Showtimes>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>
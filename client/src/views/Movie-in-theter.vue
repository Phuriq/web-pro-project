<script>

import CardItem from "../components/CardItem.vue"
import Movieintheater from "../components/movieintheater.vue";
import Movies from '../mockup/movies.json';
import Showtimes from '../components/showtime.vue';
import axios from "axios"

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
    created(){
        this.allmovie();
    },
    mounted() {
        this.movieId = this.$route.params.id;
        this.allmovie(this.movieId)
    },
    methods: {
        async allmovie(){
            const res = await axios.get('http://localhost:8080/api/movie/movieall');
            this.movies = res.data;
            console.log(this.movies)
        },
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
                <Movieintheater class="cursor-pointer" :image="movie.movieImage" :name="movie.movieName" :category="movie.moiveCategory"
                    :time="movie.movieHour" id="card" @click="navigateInfo(movie.id)">
                </Movieintheater>
                <div>
                    <Showtimes :theater="movie.movieTheater" :showtime="movie.showtime">
                    </Showtimes>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
</style>
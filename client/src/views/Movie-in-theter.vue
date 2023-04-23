<script>

import CardItem from "../components/CardItem.vue"
import Movieintheater from "../components/movieintheater.vue";
import Movies from '../mockup/movies.json';

export default {
    name: "App",
    components: {
    CardItem,
    Movieintheater
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
            <Button class="p-button-text text-3xl" label="Coming Soon" />
        </div>
        <div id=bg3>
            <div class="row-3" v-for="movie in movies" :key="movie.id" id=bg1>
                <Movieintheater class="cursor-pointer" :name="movie.name" :date="movie.date" :image="movie.image" id="card"
                    @click="navigateInfo(movie.id)">
                </Movieintheater>
            </div>
        </div>
    </div>
</template>

<style></style>
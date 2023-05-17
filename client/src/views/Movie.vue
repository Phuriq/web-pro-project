<script>
import CardItem from "../components/CardItem.vue"
import Movies from '../mockup/movies.json';
import axios from "axios"

export default {
  name: "App",
  components: {
    CardItem,
  },
  data() {
    return {
      movies: []
    };
  },
  created() {
    this.allmovie();
  },
  mounted() {
  },
  methods: {
    async allmovie() {
      const res = await axios.get('http://localhost:8080/api/movie/movieall');
      this.movies = res.data;
      console.log(this.movies)
    },
    async navigateInfo(id) {
            const movie = await axios.get('http://localhost:8080/api/movie/movieall')
            this.$router.push('/movieinfo/' + id)
        }
  },
  filterTag(tag) {
    console.log(tag)
  },

};
</script>

<template>
  <div class="fadeinleft animation-duration-200">
    <div class="flex justify-content-center mt-5 mb-5">
      <Button class="p-button-text mr-5 text-3xl" label="NowShowing" />
      <Button class="p-button-text text-3xl" label="Coming Soon" />
    </div>
    <div class="grid p-3" id=bg3>
      <div class="col-3" v-for="movie in movies" :key="movie.id" id=bg1>
        <CardItem class="cursor-pointer" :name="movie.movieName" :date="movie.movieReleaseDate" :image="movie.movieImage"
          id="card" @click="navigateInfo(movie.id)">
        </CardItem>
      </div>
    </div>
  </div>
</template>

<style></style>
<script>
import CardItem from "../components/CardItem.vue"
import Movies from '../mockup/movies.json';
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
    <div class="grid p-3" id=bg3>
      <div class="col-3" v-for="movie in movies" :key="movie.id" id=bg1>
        <CardItem class="cursor-pointer" :name="movie.name" :date="movie.date" :image="movie.image" id="card"
          @click="navigateInfo(movie.id)">
        </CardItem>
      </div>
    </div>
  </div>
</template>

<style></style>
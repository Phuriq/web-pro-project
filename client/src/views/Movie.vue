<script>
import CardItem from "../components/CardItem.vue"

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
    let movies = localStorage.getItem("movies")
    this.movies = JSON.parse(movies);
  },
  methods: {

  },
};
</script>

<template>
  <div class="fadeinleft animation-duration-200">
    <div class="flex justify-content-center mt-5 mb-5">
      <Button class="p-button-text mr-5 text-3xl" label="NowShowing" />
      <Button class="p-button-text text-3xl" label="Coming Soon" />
    </div>
    <div class="grid p-3">
      <div class="col-3" v-for="movie in movies">
        <CardItem :title="movie.name" :date="movie.date" :img_src="movie.image"></CardItem>
      </div>
    </div>
  </div>
</template>

<style></style>
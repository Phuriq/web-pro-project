<script>
import CardItem from '../components/CardItem.vue'
import axios from 'axios'

export default {
  name: 'Movieinfo',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      movies: [],
      movieId: '',
      actor_show: [
        {
          name: 'kiw',
          pic: 'http://pm1.narvii.com/6320/40c7636eb746312edf10d70e00327e7a7830d103_00.jpg'
        },
        {
          name: 'kiwww',
          pic: 'http://pm1.narvii.com/6320/40c7636eb746312edf10d70e00327e7a7830d103_00.jpg'
        },
        {
          name: 'kiwwwl',
          pic: 'http://pm1.narvii.com/6320/40c7636eb746312edf10d70e00327e7a7830d103_00.jpg'
        }
      ],
      director: [
        {
          name: 'kiwwwlddddirrrr',
          pic: 'http://pm1.narvii.com/6320/40c7636eb746312edf10d70e00327e7a7830d103_00.jpg'
        }
      ]
    }
  },
  methods: {
    async allmovie(id) {
      const res = await axios.get(`http://localhost:8080/api/movie/movieinfo/${id}`)
      console.log(res.data)
      this.movies = res.data
    },
    async gotheaterinbook(id) {
      this.$router.push(`/theaterinbooking/${id}`)
    }
  },
  mounted() {
    this.movieId = this.$route.params.id
    this.allmovie(this.movieId)
  },
  components: {
    CardItem
  },
  created() {
    this.allmovie()
  }
}
</script>

<template>
  <div class="grid fadeinleft animation-duration-200">
    <div class="flex col-8 mt-5 px-5">
      <div class="" style="width: 20rem">
        <img :src="movies.movieImage" style="height: 400px" class="border-round-xl" />
      </div>
      <div class="p-5 text-xl">
        <p>{{ movies.movieReleaseDate }}</p>
        <div class="mt-5 text-2xl">
          <h5>{{ movies.movieName }}</h5>
        </div>
        <div class="mt-8">
          <Button class="p-button-outlined" label="จองรอบฉาย" @click="gotheaterinbook(id)" />
        </div>
      </div>
      <div class="flex col-4">
        <div class="flex justify-content-end flex-wrap">
          <iframe
            width="500"
            height="300"
            :src="movies.movieTrailer"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          >
          </iframe>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-5 px-5">
    <div class="text-xl">
      <h5>เรื่องย่อ</h5>
      <p class="">{{ movies.movieTitle }}</p>
    </div>
  </div>
  <div class="flex justify-content-between flex-wrap">
    <div class="grid block bg-black-500 font-bold text-left p-4 border-round mt-5 w-6">
      <div class="col mt-5">
        <h5 class="text-xl">Actor</h5>
        <div class="flex flex-wrap justify-between">
          <div v-for="actor in actor_show" :key="actor.name" class="w-1/3 px-4">
            <div class="text-center">
              <img :src="actor.pic" style="height: 200px" class="border-round-xl" />
              <h1 class="text-white text-base mt-2">{{ actor.name }}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid block bg-black-500 font-bold text-left p-4 border-round mt-5 w-6">
      <div class="col mt-5">
        <h5 class="text-xl">Director</h5>
        <div class="flex flex-wrap justify-between">
          <div v-for="dir in director" :key="dir.name" class="w-1/3 px-4">
            <div class="text-center">
              <img :src="dir.pic" style="height: 200px" class="border-round-xl" />
              <h1 class="text-white text-base mt-2">{{ dir.name }}</h1>
            </div>
          </div>
        </div>
      </div>
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
  left: 30%;
}
</style>

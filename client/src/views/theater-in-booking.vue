<script>
import CardItem from '../components/CardItem.vue'
import Cardsum from '../components/Cardsum.vue'
import Showtimes from '../components/showtime.vue'
import axios from 'axios'

export default {
  name: 'Booking',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      name: 'App',
      row: ['A', 'B', 'C', 'D', 'E', 'F'],
      seat: [],
      movie: [],
      theaters: [],
      dateResult: [],
      date: new Date(),
      isOnce: true,
      movies: [],
      movieId: '',
      theaterId: ''
    }
  },
  components: {
    CardItem,
    Cardsum,
    Showtimes
  },
  methods: {
    getDate(week = 0) {
      this.isOnce = false
      let numOfWeek = 7
      console.log(numOfWeek)
      for (let i = week * numOfWeek; (i = week * numOfWeek + numOfWeek); i++) {
        let nextDay = new Date(this.today)
        nextDay.setDate(this.date.getDate() + i)
        this.dateResult.push({ data: nextDay, isSelect: false })
      }
      this.dateResult[0].isSelect = true
    },
    arrayRemove(arr, value) {
      return arr.filter(function (ele) {
        return ele != value
      })
    },
    async movieselected(id) {
      const res = await axios.get(`http://localhost:8080/api/movie/movieinfo/${id}`)
      this.movies = res.data
      console.log(this.movies)
    },
    async alltheater() {
      const res = await axios.get(`http://localhost:8080/api/rou/${this.movieId}`)
      this.theaters = res.data
    },
    async navigateInfo(id) {
      this.$router.push(`/movieinfo/${id}`)
    },
    async navigatebooking(roundId) {
      this.$router.push(`/booking/${roundId}`)
    }
  },
  mounted() {
    this.movieselected(this.movieId)
  },
  created() {
    this.movieId = this.$route.params.id
    console.log(this.movieId)
    this.movieselected()
    this.alltheater()
  }
}
</script>

<style>
.customdate {
  width: 80px;
  height: 70px;
  border-width: 5px;
  border-radius: 8px;
  background-image: linear-gradient(to bottom right, #2f4f4f, #8fbc8f);
}

.isSelected {
  color: red;
  font-weight: bold;
}

h1 {
  color: lightgreen;
}

h1:hover {
  color: lightcoral;
  cursor: pointer;
}

#sum {
  position: absolute;
  top: 80%;
  left: 80%;
}

#sumt {
  position: absolute;
  top: 95%;
  left: 80%;
}
</style>

<template>
  <div class="bg-black container fadeinleft animation-duration-200">
    <div class="flex col-8 mt-5 px-5">
      <div class="" style="width: 20rem">
        <img :src="movies.movieImage" style="height: 400px" class="border-round-xl" />
      </div>
      <div class="p-5 text-xl">
        <p>{{ movies.movieReleaseDate }}</p>
        <div class="mt-5 text-2xl">
          <h5>{{ movies.movieName }}</h5>
        </div>
      </div>
      <div class="flex col-4">
        <div class="flex justify-content-end flex-wrap ml-8">
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
    <div class="flex justify-content-between w-full bg-gray-800 p-1">
      <div>
        <Button label="เลือกวัน" class="p-button-text text-xl ml-4" />
        <Button label="จองตั๋ว" class="p-button-text text-xl ml-4" />
        <Button label="ชำระเงิน" class="p-button-text text-xl ml-4" />
      </div>
    </div>

    <div v-for="theater in theaters" :key="theater.id" class="flex">
      <div id="card-bg" class="flex border-round-2xl mt-8 ml-8" style="height: 150px; width: 750px">
        <img :src="image" style="height: 250px" class="border-round-xl" />
        <div>
          <div class="flex flex-row ml-7">
            <h4 class="text-xl mt-3">
              {{ theater.theaterName }} ( {{ theater.theaterLocation }} )
            </h4>
          </div>
          <div class="flex flex-row mx-5">
            <Button
              class="mx-5"
              v-for="round in theater.rounds"
              :key="round.id"
              @click="navigatebooking(round.id)"
            >
              {{ new Date(round.roundStart).toLocaleTimeString('th').slice(0, 5) }}
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardItem from "../components/CardItem.vue"
import Cardsum from "../components/Cardsum.vue";
import Movies from '../mockup/movies.json';
import Showtimes from '../components/showtime.vue';
import axios from "axios"



export default {
    name: "Booking",
    props: {
        id: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            name: 'App',
            row: ["A", "B", "C", "D", "E", "F"],
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
        formatDate(dateString) {
            const date = dayjs(dateString);
            // Then specify how you want your dates to be formatted
            return date.format('ddd D MMM ');
        },
        selectSeat(index, seatNo) {
            if (!this.seat.includes(seatNo)) {
                this.seat.push(seatNo);
            }
            else {
                this.seat.splice(this.seat.indexOf(seatNo), 1);
            }
        },
        getDate(week = 0) {
            this.isOnce = false;
            let numOfWeek = 7;
            console.log(numOfWeek);
            for (let i = week * numOfWeek; i = (week * numOfWeek) + numOfWeek; i++) {
                let nextDay = new Date(this.today);
                nextDay.setDate(this.date.getDate() + i);
                this.dateResult.push({ data: nextDay, isSelect: false });
            }
            this.dateResult[0].isSelect = true
        },
        arrayRemove(arr, value) {
            return arr.filter(function (ele) {
                return ele != value;
            });
        },
        goCheckout: function () {
            this.$router.push('/checkout/' + this.id)
        },

        async movieselected(movieId) {
            const res = await axios.get(`http://localhost:8080/api/movie/movieinfo/${movieId}`);
            this.movies = res.data;
            console.log(this.movies)
        },
        async theaterselected(theaterId) {
            const res = await axios.get(`http://localhost:8080/api/theater/theater/${theaterId}`);
            this.theaters = res.data;
            console.log(this.theaters)
        },
    },
    mounted() {
        this.movieId = this.$route.params.movieId;
        this.theaterId = this.$route.params.theaterId;
        console.log(this.movieId);
        console.log(this.theaterId);
        this.movieselected(this.movieId);
        this.theaterselected(this.theaterId);
    },
    created() {
        this.movieselected();
        this.theaterselected();
    },
}
</script>

<style>
.customdate {
    width: 80px;
    height: 70px;
    border-width: 5px;
    border-radius: 8px;
    background-image: linear-gradient(to bottom right, #2F4F4F, #8FBC8F);
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
                <img :src="movies.movieImage" style="height: 400px" class="border-round-xl">
            </div>
            <div class=" p-5 text-xl">
                <p> {{ movies.movieReleaseDate }} </p>
                <div class="mt-5 text-2xl">
                    <h5>{{ movies.movieName }}</h5>
                </div>
            </div>
            <div class="flex col-4">
                <div class="flex justify-content-end flex-wrap ml-8">
                    <iframe width="500" height="300" :src="movies.movieTrailer" title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen>
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
        <div class="mt-5 grid mr-8">
            <div class="col flex justify-content-center">
                <div class="customdate isSelected flex align-items-center justify-content-center pt-2 m-3 "
                    v-for="date in 7">
                    {{ date }}
                </div>
            </div>
        </div>
        <div class="flex mx-8 pl-8">
            <div>
                <Showtimes :theater="movies.movieTheater" :showtime="movies.showtime">
                </Showtimes>
            </div>
        </div>
        <div class="grid mt-8">
            <div class="col-8">
                <div class="flex justify-content-center align-content-center">
                    <h2> {{ this.row[5] }}</h2>
                    <h1 v-for="i, index in 12" class="ml-2" @click="selectSeat(index, this.row[5] + i.toString())">
                        <font-awesome-icon icon="fa-solid fa-couch" />
                        <span v-if="i === 6" class="ml-6"></span>
                    </h1>
                    <h2 class="ml-2"> {{ this.row[5] }}</h2>
                </div>
                <div class="flex justify-content-center align-content-center">
                    <h2> {{ this.row[4] }}</h2>
                    <h1 v-for="i, index in 12" class="ml-2" @click="selectSeat(index, this.row[4] + i.toString())">
                        <font-awesome-icon icon="fa-solid fa-couch" />
                        <span v-if="i === 6" class="ml-6"></span>
                    </h1>
                    <h2 class="ml-2"> {{ this.row[4] }}</h2>
                </div>
                <div class="flex justify-content-center align-content-center">
                    <h2> {{ this.row[3] }}</h2>
                    <h1 v-for="i, index in 12" class="ml-2" @click="selectSeat(index, this.row[3] + i.toString())">
                        <font-awesome-icon icon="fa-solid fa-couch" />
                        <span v-if="i === 6" class="ml-6"></span>
                    </h1>
                    <h2 class="ml-2"> {{ this.row[3] }}</h2>
                </div>
                <div class="flex justify-content-center align-content-center">
                    <h2> {{ this.row[2] }}</h2>
                    <h1 v-for="i, index in 12" class="ml-2" @click="selectSeat(index, this.row[2] + i.toString())">
                        <font-awesome-icon icon="fa-solid fa-couch" />
                        <span v-if="i === 6" class="ml-6"></span>
                    </h1>
                    <h2 class="ml-2"> {{ this.row[2] }}</h2>
                </div>
                <div class="flex justify-content-center align-content-center">
                    <h2> {{ this.row[1] }}</h2>
                    <h1 v-for="i, index in 12" class="ml-2" @click="selectSeat(index, this.row[1] + i.toString())">
                        <font-awesome-icon icon="fa-solid fa-couch" />
                        <span v-if="i === 6" class="ml-6"></span>
                    </h1>
                    <h2 class="ml-2"> {{ this.row[1] }}</h2>
                </div>
                <div class="flex justify-content-center align-content-center">
                    <h2> {{ this.row[0] }}</h2>
                    <h1 v-for="i, index in 12" class="ml-2" @click="selectSeat(index, this.row[0] + i.toString())">
                        <font-awesome-icon icon="fa-solid fa-couch" />
                        <span v-if="i === 6" class="ml-6"></span>
                    </h1>
                    <h2 class="ml-2"> {{ this.row[0] }}</h2>
                </div>
            </div>
            <div class="flex col-4">
                <Card class="flex surface-ground justify-content-end flex-wrap">
                    <template #content>
                        <img :src="this.movies.movieImage" style="height: 400px" />
                        <h5 class="text-xl mt-1">{{ this.movies.movieName }}</h5>
                        <h3 class="text-xl mt-1">{{ this.theaters.theaterName }}</h3>
                        <h4 class="text-sm mt-1 text-yellow-200">ราคา : {{ seat.length * 240 }} บาท ที่นั่ง : {{ seat }}
                        </h4>
                        <div>
                            <Button class="flex flex-column mt-5" label="KYU" style="width: 260px" @click="goCheckout()" />
                        </div>
                    </template>
                </Card>
            </div>
        </div>
    </div>
</template>

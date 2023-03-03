<script>
import CardItem from "../components/CardItem.vue"
import Cardsum from "../components/Cardsum.vue";
import Daybutton from "../components/Daybutton.vue";
import Movies from '../mockup/movies.json';

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
            movie: {}
        }
    },
    components: {
        CardItem,
        Daybutton,
        Cardsum
    },
    methods: {
        selectSeat(index, seatNo) {
            if (!this.seat.includes(seatNo)) {
                this.seat.push(seatNo);
            }
            else {
                this.seat.splice(this.seat.indexOf(seatNo), 1);
            }
        },
        // arrayRemove(arr, value) {
        //     return arr.filter(function (ele) {
        //         return ele != value;
        //     });
        // }
    },
    mounted() {
        this.movie = Movies.find(movie => movie.id == this.id);
    },
}
</script>

<template>
    <div class="grid mt-5 px-5 mb-4">
        <div class="col-3" style="width: 20rem">
            <img :src="this.movie.image" style="height: 400px" class="border-round-xl">
        </div>
        <div class="ml-6 p-5 text-xl mt-8">
            <p>{{ this.movie.date }}</p>
            <div class="mt-8 text-2xl">
                <h5>{{ this.movie.name }}</h5>
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
    <div class="mt-5 grid mb-5">
        <div class="col" v-for="i in 10">
            <Daybutton></Daybutton>
        </div>
    </div>
    <div class="bg-black container">
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
    <div class="mt-5">
        <div>
            <div>
                <Card id=sum class="flex surface-ground border-3 border-round border-green-600"
                    style="height: 650px; width: 300px ">
                    <template #content>
                        <img :src="this.movie.image" style="height: 400px" class="border-round-xl" />
                        <h5 class="text-xl mt-1">{{ this.movie.name }}</h5>
                        <h4 class="text-sm mt-1 text-yellow-200">ราคา : {{ seat.length * 240 }} บาท ที่นั่ง : {{ seat }}
                        </h4>
                        <router-link to="/checkout">
                            <Button class="flex flex-column mt-5" label="KYU" style="width: 260px" />
                        </router-link>
                    </template>
                </Card>
            </div>
        </div>
    </div>
</template>

<style>
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

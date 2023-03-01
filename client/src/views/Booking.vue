<script>
import CardItem from "../components/CardItem.vue"
import Cardsum from "../components/Cardsum.vue";
import Daybutton from "../components/Daybutton.vue";

export default {
    data() {
        return {
            name: 'App',
            row: ["A", "B", "C", "D", "E", "F"]
        }
    },
    components: {
        CardItem,
        Daybutton,
        Cardsum
    },
    methods: {
        selectSeat(seatNo) {
            console.log(seatNo)
        }
    },
    mounted() {
        let movies = localStorage.getItem("movies")
        this.movies = JSON.parse(movies);
    },
    selectedseat: 0,
}
</script>

<template>
    <div class="grid mt-5">
        <div class="col-3" style="width: 20rem">
            <CardItem></CardItem>
        </div>
        <div class="ml-6 p-5 text-xl mt-8">
            <p>Date</p>
            <div class="mt-8 text-2xl">
                <h5>Movie name</h5>
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
    <div class="mt-5 grid">
        <div class="col" v-for="i in 10">
            <Daybutton></Daybutton>
        </div>
    </div>
    <div class="bg-black container">
        <div class="flex justify-content-center align-content-center">
            <h2> {{ this.row[5] }}</h2>
            <h1 v-for="i in 12" class="ml-2" @click="selectSeat(this.row[5] + i.toString())">
                <font-awesome-icon icon="fa-solid fa-couch" />
                <span v-if="i === 6" class="ml-6"></span>
            </h1>
            <h2 class="ml-2"> {{ this.row[5] }}</h2>
        </div>
        <div class="flex justify-content-center align-content-center">
            <h2> {{ this.row[4] }}</h2>
            <h1 v-for="i in 12" class="ml-2" @click="selectSeat(this.row[4] + i.toString())">
                <font-awesome-icon icon="fa-solid fa-couch" />
                <span v-if="i === 6" class="ml-6"></span>
            </h1>
            <h2 class="ml-2"> {{ this.row[4] }}</h2>
        </div>
        <div class="flex justify-content-center align-content-center">
            <h2> {{ this.row[3] }}</h2>
            <h1 v-for="i in 12" class="ml-2" @click="selectSeat(this.row[3] + i.toString())">
                <font-awesome-icon icon="fa-solid fa-couch" />
                <span v-if="i === 6" class="ml-6"></span>
            </h1>
            <h2 class="ml-2"> {{ this.row[3] }}</h2>
        </div>
        <div class="flex justify-content-center align-content-center">
            <h2> {{ this.row[2] }}</h2>
            <h1 v-for="i in 12" class="ml-2" @click="selectSeat(this.row[2] + i.toString())">
                <font-awesome-icon icon="fa-solid fa-couch" />
                <span v-if="i === 6" class="ml-6"></span>
            </h1>
            <h2 class="ml-2"> {{ this.row[2] }}</h2>
        </div>
        <div class="flex justify-content-center align-content-center">
            <h2> {{ this.row[1] }}</h2>
            <h1 v-for="i in 12" class="ml-2" @click="selectSeat(this.row[1] + i.toString())">
                <font-awesome-icon icon="fa-solid fa-couch" />
                <span v-if="i === 6" class="ml-6"></span>
            </h1>
            <h2 class="ml-2"> {{ this.row[1] }}</h2>
        </div>
        <div class="flex justify-content-center align-content-center">
            <h2> {{ this.row[0] }}</h2>
            <h1 v-for="i in 12" class="ml-2" @click="selectSeat(this.row[0] + i.toString())">
                <font-awesome-icon icon="fa-solid fa-couch" />
                <span v-if="i === 6" class="ml-6"></span>
            </h1>
            <h2 class="ml-2"> {{ this.row[0] }}</h2>
        </div>
    </div>
    <h5>
        Summary
    </h5>
    <div>
        <div>
            <div>
                <Cardsum title="ดาบพิฆาต อสูร" seat="A6"  price="240 บาท"
                    img_src="https://lh3.googleusercontent.com/T5wRaYd8r45DDG_Y5ZvbV9N0g92wuRRuLJ1SzWn8khwUWJxaaafJwHXdk9WfUlIYatxtvfBV8GvZ1X6dty2MP1_w8PQF38gsQg=s0">
                </Cardsum>
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
</style>

<script >
import CardItem from "../components/CardItem.vue"
import Movies from '../mockup/movies.json';

export default {
    name: "Movieinfo",
    props: {
        id: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            movie: {},
            actor_show: [
                {
                    name: "kiw",
                    pic: "http://pm1.narvii.com/6320/40c7636eb746312edf10d70e00327e7a7830d103_00.jpg"
                },
                {
                    name: "kiwww",
                    pic: "http://pm1.narvii.com/6320/40c7636eb746312edf10d70e00327e7a7830d103_00.jpg"
                },
                {
                    name: "kiwwwl",
                    pic: "http://pm1.narvii.com/6320/40c7636eb746312edf10d70e00327e7a7830d103_00.jpg"
                },
            ],
            director: [
                {
                    name: "kiwwwlddddirrrr",
                    pic: "http://pm1.narvii.com/6320/40c7636eb746312edf10d70e00327e7a7830d103_00.jpg"
                }
            ]
        }
    },
    methods: {
        goBooking: function () {
            this.$router.push('/booking/' + this.id)
        }
    },
    mounted() {
        this.movie = Movies.find(movie => movie.id == this.id);
    },
    components: {
        CardItem
    },
}
</script>

<template>
    <div class="grid">
        <div class="flex col-8 mt-5 px-5">
            <div class="" style="width: 20rem">
                <img :src="this.movie.image" style="height: 400px" class="border-round-xl">
            </div>
            <div class=" p-5 text-xl">
                <p> {{ this.movie.date }} </p>
                <div class="mt-5 text-2xl">
                    <h5>{{ this.movie.name }}</h5>
                </div>
                <div class="mt-8">
                    <Button class="p-button-outlined" label="จองรอบฉาย" @click="goBooking()" />
                </div>
            </div>
            <div class="flex col-4">
                <div class="flex justify-content-end flex-wrap">
                    <iframe width="500" height="300" :src="this.movie.trailer" title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
        </div>
    </div>
    <div class="mt-5 px-5">
        <div class="text-xl">
            <h5>เรื่องย่อ</h5>
            <p class="">{{ this.movie.title }}</p>
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
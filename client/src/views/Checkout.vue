<template>
        <div>
            <img :src="this.movie.image" style="height: 400px" class="border-round-xl">
        </div>
</template>

<script>
import CardItem from "../components/CardItem.vue"
import Cardsum from "../components/Cardsum.vue";
import Movies from '../mockup/movies.json';

export default {
    name: "Checkout",
    props: {
        id: {
            type: String,
            required: true
        }
    },
    components: {
        CardItem,
        Cardsum
    },
    methods: {
        selectSeat(seatNo) {
            console.log(seatNo)
        },
        greet: function (event) {
            alert('กระตุกจิตกระชากใจ')
        },

    },
    mounted() {
        let movies = localStorage.getItem("movies")
        this.movies = JSON.parse(movies);
        this.movie = Movies.find(movie => movie.id == this.id);
    },
}
</script>
<style>
#seatnum {
    position: absolute;
    top: 27%;
    left: 25%;
}

#price1 {
    position: absolute;
    top: 27%;
    left: 87%;
}

#price2 {
    position: absolute;
    top: 36.2%;
    left: 87%;
}
</style>
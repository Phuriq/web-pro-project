<script>
import CardItem from "../components/CardItem.vue"
import Movies from '../mockup/movies.json';
import axios from "axios"


export default {
    data() {
        return {
            moviesSearch: [],
            movies: [],
            movies_show: [
                {
                    title: "qwe",
                    name: 'https://i.ytimg.com/vi/hH86YEyhirg/maxresdefault.jpg',

                },
                {
                    title: "asd",
                    name: 'https://www.fungjaizine.com/wp-content/uploads/2018/09/Untitled-1-6.jpg',
                },
                {
                    title: "zxc",
                    name: 'https://www.fungjaizine.com/wp-content/uploads/2018/07/slurcover02.jpg',
                }
            ],
        }
    },
    created() {
        this.allmovie();
    },
    components: {
        CardItem
    },
    mounted() {
    },
    methods: {
        movieSearch(search) {
            if (search) {
                this.moviesSearch = this.movies.filter(movie => movie.movieName.includes(search))
            } else {
                this.moviesSearch = this.movies
            }
        },
        async allmovie() {
            const res = await axios.get('http://localhost:8080/api/movie/movieall');
            this.movies = res.data;
            this.moviesSearch = res.data
        },
        filterTag(tag) {
            console.log(tag)
        },
        async navigateInfo(id) {
            this.$router.push(`/movieinfo/${id}`)
        }
    },

}
</script>

<template>
    <div class="fadeinleft animation-duration-200">
        <div id="bg-gradient"></div>
        <div class="nav">
        </div>
        <Carousel :value="movies_show" :numVisible="1" :numScroll="1" :autoplayInterval="4000"
            class="flex justify-content-center mt-3">
            <template #item="movies_show">
                <div class="flex justify-content-center" style="height: 280px" v-for="movie in movies_show">
                    <img :src="movie.name" style="height: 550px">
                </div>
            </template>
        </Carousel>
        <div class="flex">
            <div id=bg2 class="flex justify-content-center w-full p-5">
                <div class="flex justify-content-center align-content-center">
                    <input @input="(e) => movieSearch(e.target.value)"
                        class="flex justify-content-center align-self-center p-inputtext-lg border-green-600 p-inputtext border-round-3xl"
                        placeholder="ค้นหาภาพยนต์" type="text">
                </div>
            </div>
        </div>
        <div class="grid p-3" id=bg3>
            <div class="col-3" v-for="movie in moviesSearch" :key="movie.id" id=bg1>
                <CardItem class="cursor-pointer" :name="movie.movieName" :date="movie.movieReleaseDate"
                    :image="movie.movieImage" :category="movie.movieCategory" id="card" @click="navigateInfo(movie.id)">
                </CardItem>
            </div>
        </div>
    </div>
</template>

<style>
* {
    margin: 0;
    padding: 0;
}

body {
    background: linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(4, 42, 20, 1) 92%, rgba(0, 0, 0, 1) 100%);

}

#bg2 {
    background: linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(4, 42, 20, 1) 92%, rgba(0, 0, 0, 1) 100%);

}

#bg3 {
    background: linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(4, 42, 20, 1) 92%, rgba(0, 0, 0, 1) 100%);

}

#button:hover {
    background-color: #5F9EA0;
    color: white;
}

#card {
    border-radius: 15px;
    transition: 0.3s
}

#card:hover {
    opacity: 0.5
}

#card:before {
    opacity: 1
}
</style>


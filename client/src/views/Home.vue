<script>
import CardItem from "../components/CardItem.vue"
import Movies from '../mockup/movies.json';
export default {
    data() {
        return {
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
                    name: 'https://media.newsplus.co.th/2021/07/cover-tvoff-download-1200x675.jpg',
                }
            ],
        }
    },
    components: {
        CardItem
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
    }
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
        <div id=bg2 class="flex justify-content-between w-full  p-5">
            <div>
                <Button id=button @click="filterTag('Now')" label="กำลังฉาย" class="p-button-text text-xl ml-4" />
                <Button id=button @click="filterTag('Action')" label="ACTION" class="p-button-text text-xl ml-4" />
                <Button id=button @click="filterTag('Comedy')" label="COMEDY" class="p-button-text text-xl ml-4" />
                <Button id=button @click="filterTag('Horror')" label="HORROR" class="p-button-text text-xl ml-4" />
                <Button id=button @click="filterTag('Romantic')" label="ROMANTIC" class="p-button-text text-xl ml-4" />
            </div>
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

<style>
* {
    margin: 0;
    padding: 0;
}

body {
    background-image: linear-gradient(to bottom right, #000000, #2b1b23, #041106)
}

#bg2 {
    background-image: linear-gradient(to bottom right, #140613, #180c13, #2b0826)
}

#bg3 {
    background-image: linear-gradient(to bottom right, rgb(0, 0, 0), #1f071b, #000000)
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


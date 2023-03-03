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
                    name: 'https://scontent.fbkk5-3.fna.fbcdn.net/v/t39.30808-6/330809379_744958067143601_7209193836136214967_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeGXl6IAO3I8zGvqsH4tGhkL8Pskp_0qREHw-ySn_SpEQaPqb9pmi9iVQiIUhPhi-V8ptvlc0lYuxZyVdOcgpqGg&_nc_ohc=348oVz2ERagAX8U4CB9&_nc_oc=AQlN2cNHumZff68D5G5xvT9lAH0b7mi6NBbEjJiEoig6tzGWDIPZocT0Q-4EtwydDmM&_nc_ht=scontent.fbkk5-3.fna&oh=00_AfB6alg5qquJ5GiJ4EgL4ZC4YefzynhqzQ-M5vui4qSn2Q&oe=6400FD13',
                },
                {
                    title: "zxc",
                    name: 'https://scontent.fbkk5-3.fna.fbcdn.net/v/t39.30808-6/329148540_737158544674907_4747732838217062707_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeFaR8VqAsYP9tmuOu9p0-zKt1nxolCdQJq3WfGiUJ1AmmbFOnOYAonxotP5EmoBRBAVZQLUklvzvCIXufHm_f1C&_nc_ohc=Cxpl8OwXjz4AX8cJfNG&_nc_ht=scontent.fbkk5-3.fna&oh=00_AfBvp9ZRbuBXkqMVN0lp_onZGJW8ZXNb1PWOknChSmgf0w&oe=6401917B',
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
    <div id="bg-gradient"></div>
    <div class="nav">
    </div>
    <Carousel :value="movies_show" :numVisible="1" :numScroll="1" :autoplayInterval="4000"
        class="flex justify-content-center">
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


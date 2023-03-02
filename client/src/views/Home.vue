<script>
import CardItem from "../components/CardItem.vue"
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
            movies_spare: [
                {
                    id: 1,
                    name: "ยอดนักสืบจิ๋วโคนัน จุดเริ่มต้นของไฮบาระ ไอ",
                    date: "01 March 2023",
                    time: "90 นาที",
                    category: "Animation",
                    image: 'https://media.discordapp.net/attachments/944864017460101151/1080506814505963530/image.png?width=487&height=702'
                },
                {
                    id: 2,
                    name: "CREED III",
                    date: "02 March 2023",
                    time: "116 นาที",
                    category: "Action",
                    image: 'https://media.discordapp.net/attachments/944864017460101151/1080506883753910342/image.png?width=473&height=702'
                },
                {
                    id: 3,
                    name: "Kamen rider Geats x Revice movie battle royale",
                    date: "06 April 2023",
                    time: "0 นาที",
                    category: "Comming soon",
                    image: 'https://media.discordapp.net/attachments/944864017460101151/1080508754241527889/image.png?width=452&height=702'
                },
                {
                    id: 4,
                    name: "จอห์น วิค แรงกว่านรก 4",
                    date: "22 March 2023",
                    time: "169 นาที",
                    category: "Action",
                    image: 'https://s359.kapook.com/r/600/auto/pagebuilder/bc4b7d45-33c3-486b-9047-16a4f8686ace.jpg'
                },
                {
                    id: 5,
                    name: "ชินจัง เดอะมูฟวี่ ปริศนา บุปผาแห่งโรงเรียนเทนคะ",
                    date: "09 March 2023",
                    time: "104 นาที",
                    category: "Animation",
                    image: 'https://lh3.googleusercontent.com/3CPH2f6L3pO9JYKLh9p8X8HUkweo22rcB-2LHTMqSFgCID_GkgHNyiT9RsQto2pPLgIZvoTgS0r5Kxh28YzqsrOE34AEV3jV=s0'
                },
                {
                    id: 6,
                    name: "เดอะ เฟิสต์ สแลมดังก์",
                    date: "09 March 2023",
                    time: "125 นาที",
                    category: "Animation",
                    image: 'https://upload.wikimedia.org/wikipedia/en/a/ac/The_First_Slam_Dunk_Poster.jpg'
                },
                {
                    id: 7,
                    name: "ขุนพันธ์ 3",
                    date: "01 March 2023",
                    time: "156 นาที",
                    category: "Action",
                    image: 'https://lh3.googleusercontent.com/bKYlKeibD5y3RkM3_JqJBkOnf0yJTdp_gLqGufGOLviMhug_xLMKwUH5nOwPb-GUgIHSjeG2GDZvGr7K_J5B9BWzMGbp7yTwGg=w260'
                },
                {
                    id: 8,
                    name: "แอนท์-แมน และ เดอะ วอสพ์ ตะลุยมิติควอนตัม",
                    date: "15 February 2023",
                    time: "125 นาที",
                    category: "Action",
                    image: 'https://lumiere-a.akamaihd.net/v1/images/image_e8b53b1f.jpeg?region=0,0,540,810'
                },
                {
                    id: 9,
                    name: "เสิร์ชหา...แม่หาย!?",
                    date: "01 March 2023",
                    time: "111 นาที",
                    category: "thrillerl",
                    image: 'https://www.khaosod.co.th/wpapp/uploads/2023/02/ent10p1-8.jpg'
                },
                {
                    id: 10,
                    name: "ดาบพิฆาตอสูร สู่หมู่บ้านช่างตีดาบ",
                    date: "23 February 2023",
                    time: "110 นาที",
                    category: "Action",
                    image: 'https://lh3.googleusercontent.com/T5wRaYd8r45DDG_Y5ZvbV9N0g92wuRRuLJ1SzWn8khwUWJxaaafJwHXdk9WfUlIYatxtvfBV8GvZ1X6dty2MP1_w8PQF38gsQg=s0'
                },
            ],
        }
    },
    components: {
        CardItem
    },
    mounted() {
        let movies = this.movies_spare;
        const myJSON = JSON.stringify(movies);
        localStorage.setItem("movies", myJSON);
        this.movies = this.movies_spare
        console.log(this.movies)
    },
    methods: {
        filterTag(tag) {
            console.log(tag)
        }
    }
}
</script>

<template><div id="bg-gradient"></div>
    <div class="nav">
    </div>
    <Carousel :value="movies_show" :numVisible="1" :numScroll="1" :autoplayInterval="4000"
        class="flex justify-content-center" >
        <template #item="movies_show">
            <div class="flex justify-content-center" style="height: 280px" v-for="movie in movies_show" >
                <img :src="movie.name" style="height: 550px">
            </div>
        </template>
    </Carousel>
    <div  id=bg2 class="flex justify-content-between w-full  p-5">
        <div>
            <Button id = button @click="filterTag('Now')" label="กำลังฉาย" class="p-button-text text-xl ml-4" />
            <Button id = button @click="filterTag('Action')" label="ACTION" class="p-button-text text-xl ml-4" />
            <Button id = button @click="filterTag('Comedy')" label="COMEDY" class="p-button-text text-xl ml-4" />
            <Button id = button @click="filterTag('Horror')" label="HORROR" class="p-button-text text-xl ml-4" />
            <Button id = button @click="filterTag('Romantic')" label="ROMANTIC" class="p-button-text text-xl ml-4" />
        </div>
    </div>
    <div class="grid p-3" id= bg3>
        <div class="col-3" v-for="movie in movies" id= bg1>
            <CardItem :title="movie.name" :date="movie.date" :img_src="movie.image" id="card"></CardItem>
        </div>
    </div>
</template>

<style>
* {
    margin: 0;
    padding: 0;
}
body{
    background-image:  linear-gradient(to  bottom right, #000000, #2b1b23, #041106)
}

#bg2{
    background-image:  linear-gradient(to  bottom right, #140613, #180c13, #2b0826)
}
#bg3{
    background-image:  linear-gradient(to  bottom right, rgb(0, 0, 0), #1f071b, #000000)
}
#button:hover {
    background-color: #5F9EA0;
    color: white;
}

#card {
	border-radius: 15px;
    transition: 0.3s
}
#card:hover{
    opacity: 0.5}
#card:before{
		opacity: 1}
</style>


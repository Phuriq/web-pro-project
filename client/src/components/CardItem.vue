<template>
    <!-- <Card style="width: 20em; height: 25em">
        <div><img src="https://cdn.discordapp.com/attachments/404266538590535680/1079836229782208572/Eiga-Crayon-Shin-chan-Bakusui-Yumemi-World-Dai-Totsugeki.png" alt="Image"></div>
    </Card> -->
    <Card style="width: 20em; height: 25rem;">
            <template #header>
                <img src="https://www.iposters.co.uk/media/catalog/product/0/3/0304JA_3.jpg" style="height: 25rem" />
            </template>
        </Card>
</template>

<script>
export default{

};
var app = new Vue({
    el: '#app',
    data: {
        movie: [
            {
                id:"01",
                name: "ยอดนักสืบจิ๋วโคนัน จุดเริ่มต้นของไฮบาระ ไอ",
                date: "01 March 2023",
                time: "90 นาที",
                category: "Animation",
                image: 'https://www.metalbridges.com/wp-content/uploads/2023/01/detective-conan-episode-of-ai-haibara-h-black-iron-mystery-train-13-834x1024.jpg'
            },
            {
                id:"02",
                name: "CREED III",
                date: "02 March 2023",
                time: "116 นาที",
                category: "Action",
                image: 'https://m.media-amazon.com/images/M/MV5BYWY1ZDY4MmQtYjhiYS00N2QwLTk1NzgtOWI2YzUwZThjNDYwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg'
            },
            {
                id:"03",
                name: "Kamen rider Geats x Revice movie battle royale",
                date: "06 April 2023",
                time: "0 นาที",
                category: "Comming soon",
                image: 'https://cdn.discordapp.com/attachments/404266538590535680/1080450200008675378/315296572_10159445544344862_6535840359123715994_n.png'
            },
            {
                id:"04",
                name: "จอห์น วิค แรงกว่านรก 4",
                date: "22 March 2023",
                time: "169 นาที",
                category: "Action",
                image: 'https://s359.kapook.com/r/600/auto/pagebuilder/bc4b7d45-33c3-486b-9047-16a4f8686ace.jpg'
            },
            {
                id:"05",
                name: "ชินจัง เดอะมูฟวี่ ปริศนา บุปผาแห่งโรงเรียนเทนคะ",
                date: "09 March 2023",
                time: "104 นาที",
                category: "Animation",
                image: 'https://lh3.googleusercontent.com/3CPH2f6L3pO9JYKLh9p8X8HUkweo22rcB-2LHTMqSFgCID_GkgHNyiT9RsQto2pPLgIZvoTgS0r5Kxh28YzqsrOE34AEV3jV=s0'
            },
            {
                id:"06",
                name: "เดอะ เฟิสต์ สแลมดังก์",
                date: "09 March 2023",
                time: "125 นาที",
                category: "Animation",
                image: 'https://cdni-hw.bugaboo.tv/dm/sz-sm/i/images/2023/02/10/thumb_3724_1676023658_6404.jpg'
            },
            {
                id:"07",
                name: "ขุนพันธ์ 3",
                date: "01 March 2023",
                time: "156 นาที",
                category: "Action",
                image: 'https://cms.dmpcdn.com/moviearticle/2023/02/02/a418d150-a2df-11ed-a559-9984f433e0ff_webp_original.jpg'
            },
            {
                id:"08",
                name: "แอนท์-แมน และ เดอะ วอสพ์ ตะลุยมิติควอนตัม",
                date: "15 February 2023",
                time: "125 นาที",
                category: "Action",
                image: 'https://www.comingsoon.net/wp-content/uploads/sites/3/2023/02/Quantumanaia-Poster-1.png?w=819 '
            },
            {
                id:"09",
                name: "เสิร์ชหา...แม่หาย!?",
                date: "01 March 2023",
                time: "111 นาที",
                category: "thrillerl",
                image: 'https://www.khaosod.co.th/wpapp/uploads/2023/02/ent10p1-8.jpg'
            },
            {
                id:"10",
                name: "ดาบพิฆาตอสูร สู่หมู่บ้านช่างตีดาบ",
                date: "23 February 2023",
                time: "110 นาที",
                category: "Action",
                image: 'https://lh3.googleusercontent.com/T5wRaYd8r45DDG_Y5ZvbV9N0g92wuRRuLJ1SzWn8khwUWJxaaafJwHXdk9WfUlIYatxtvfBV8GvZ1X6dty2MP1_w8PQF38gsQg=s0'
            },
        ], }
        })
</script>

<style>
 </style>

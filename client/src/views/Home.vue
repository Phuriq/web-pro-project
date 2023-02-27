<script>
export default {
    data() {
        return {
            cars: [
                {
                    name: 'https://i.ytimg.com/vi/hH86YEyhirg/maxresdefault.jpg',
                    numVisible: 3,
                    numScroll: 3
                },
                {
                    name: 'https://scontent.fbkk5-3.fna.fbcdn.net/v/t39.30808-6/330809379_744958067143601_7209193836136214967_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeGXl6IAO3I8zGvqsH4tGhkL8Pskp_0qREHw-ySn_SpEQaPqb9pmi9iVQiIUhPhi-V8ptvlc0lYuxZyVdOcgpqGg&_nc_ohc=348oVz2ERagAX8U4CB9&_nc_oc=AQlN2cNHumZff68D5G5xvT9lAH0b7mi6NBbEjJiEoig6tzGWDIPZocT0Q-4EtwydDmM&_nc_ht=scontent.fbkk5-3.fna&oh=00_AfB6alg5qquJ5GiJ4EgL4ZC4YefzynhqzQ-M5vui4qSn2Q&oe=6400FD13',
                    numVisible: 2,
                    numScroll: 2
                },
                {
                    name: 'https://scontent.fbkk5-3.fna.fbcdn.net/v/t39.30808-6/329148540_737158544674907_4747732838217062707_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeFaR8VqAsYP9tmuOu9p0-zKt1nxolCdQJq3WfGiUJ1AmmbFOnOYAonxotP5EmoBRBAVZQLUklvzvCIXufHm_f1C&_nc_ohc=Cxpl8OwXjz4AX8cJfNG&_nc_ht=scontent.fbkk5-3.fna&oh=00_AfBvp9ZRbuBXkqMVN0lp_onZGJW8ZXNb1PWOknChSmgf0w&oe=6401917B',
                    numVisible: 1,
                    numScroll: 1
                }
            ]
        }
    }
}
</script>

<template>
    <div class="flex justify-content-between w-full bg-primary p-1">
        <div>
            <Avatar label="P" class="mx-3" style="background-color:#2196F3; color: #ffffff" shape="circle" />
            <Button label="asd" />
            <Button label="asd" />
            <Button label="asd" />
            <Button label="asd" />
        </div>
        <div class="flex align-content-center h-full">
            <p class="mt-2"> User name </p>
            <Avatar label="V" class="mx-3" style="background-color:#2196F3; color: #ffffff" shape="circle" />
        </div>
    </div>

    <Carousel :value="cars" :numVisible="1" :numScroll="1" :autoplayInterval="2000" >
        <template #item="cars">
            <div class="flex justify-content-center" v-for="car in cars">
            <img :src="car.name">
        </div>
        </template>
    </Carousel>
</template>

<style>
* {
    margin: 0;
    padding: 0;
}
</style>


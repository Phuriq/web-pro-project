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
    <div class="flex justify-content-between w-full bg-gray-900 p-2">
        <div>
            <Avatar label="P" class="mx-3" style="background-color:#2196F3; color: #ffffff" shape="circle" />
            <Button label="Home" class="p-button-text ml-5"/>
            <Button label="Theater" class="p-button-text ml-3"/>
            <Button label="Cinema" class="p-button-text ml-3"/>
        </div>
        <div class="flex align-content-center h-full">
            <div>
            <input class="p-inputtext p-component mr-5 border-green-600" placeholder="Search" type="text">
            </div>
            <p class="mt-2"> kstandforkyu </p>
            <Avatar label="K" class="mx-3" style="background-color:#2196F3; color: #ffffff" shape="circle" />
        </div>
    </div>

    <Carousel :value="cars" :numVisible="1" :numScroll="1" :autoplayInterval="4000"  class="flex justify-content-center">
        <template #item="cars" >
            <div class="flex justify-content-center" style="height: 280px" v-for="car in cars">
            <img :src="car.name" style="height: 550px">
        </div>
        </template>
    </Carousel>
    <div class="flex justify-content-between w-full bg-gray-800 p-5">
        <div>
            <Button label="กำลังฉาย" class="p-button-text text-xl ml-4"/>
            <Button label="ACTION" class="p-button-text text-xl ml-4"/>
            <Button label="COMEDY" class="p-button-text text-xl ml-4"/>
            <Button label="HORROR" class="p-button-text text-xl ml-4"/>
            <Button label="ROMANTIC" class="p-button-text text-xl ml-4"/>
        </div>
    </div>
</template>

<style>
* {
    margin: 0;
    padding: 0;
}
</style>


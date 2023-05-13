<template>
    <div class="grid">
        <div class="flex col-6 ml-8 mt-5 ">
            <div class="flex flex-column">
                <div class="flex">
                    <div class="flex flex-column">
                        <h5 class="flex flex-column">Email</h5>
                        <InputText class="flex flex-column" type="text" v-model="username" placeholder="Email@..."/>
                    </div>
                    <div class="flex ml-5 flex-column">
                        <h5 class="flex flex-column" for="">Mobile</h5>
                        <InputText class="flex flex-column" type="password" v-model="password" placeholder="0888888888"/>
                    </div>
                </div>
                <div class="flex">
                    <div class="flex mt-5 flex-column">
                        <h8>ชำระเงินด้วยบัตรเครดิต</h8>
                        <img class="mt-2" src="https://media.discordapp.net/attachments/895540915714789417/1106303405690982410/25654-2-major-credit-card-logo-transparent-thumb.png?width=392&height=52" alt="">
                        <div class="flex">
                            <div class="flex flex-column">
                                <h5> Card number </h5>
                                <InputText class="flex flex-column" type="text" v-model="Cardnumber" placeholder="Card number"/>
                            </div>
                        </div>
                        <div class="flex flex-column">
                            <h5 class="flex flex-column" for="">Name on card</h5>
                            <InputText class="flex flex-column" type="password" v-model="nameoncard" placeholder="Name on card" />
                        </div>
                    </div>
                </div>
                <div class="flex">
                    <div class="flex flex-column">
                        <h5 class="flex flex-column">Expiration</h5>
                        <InputText class="flex flex-column" type="text" v-model="username" placeholder="MM/YY"/>
                    </div>
                    <div class="flex ml-5 flex-column">
                        <h5 class="flex flex-column" for="">CVV</h5>
                        <InputText class="flex flex-column" type="password" v-model="password" placeholder="CVV/CVV"/>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="flex mt-5 ml-8 col-6">
                <Card class="flex surface-ground justify-content-end flex-wrap">
                    <template #content>
                        <img src="https://media.discordapp.net/attachments/895540915714789417/1106298226035916832/DAE8E63A-C296-4182-BB05-296BFB357853.jpg?width=1170&height=1170" style="height: 200=px; width: 250px" alt="">
                        <h5 class="text-xl mt-1"></h5>
                        <h4 class="text-sm mt-1 text-yellow-200">ราคา :บาท ที่นั่ง :
                        </h4>
                        <div class="mt-5">
                            <Button class="flex flex-column mt-8" label="KYU" style="width: 260px" />
                        </div>
                    </template>
                </Card>
            </div>
        </div>
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
<style></style>
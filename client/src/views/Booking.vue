<script>
import CardItem from '../components/CardItem.vue'
import Cardsum from '../components/Cardsum.vue'
import Showtimes from '../components/showtime.vue'
import axios from 'axios'

export default {
    name: 'Booking',
    props: {
        id: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            name: 'App',
            row: ['A', 'B', 'C', 'D', 'E', 'F'],
            seat: [],
            movie: [],
            theaters: [],
            dateResult: [],
            date: new Date(),
            isOnce: true,
            movies: [],
            movieId: '',
            theaterId: '',
            roundId: '',
            seats: [],
            chooseSeat: [],
            visible: false,
            userId: ''
        }
    },
    components: {
        CardItem,
        Cardsum,
        Showtimes
    },
    methods: {
        formatDate(dateString) {
            const date = dayjs(dateString)
            // Then specify how you want your dates to be formatted
            return date.format('ddd D MMM ')
        },
        selectSeat(index, seatNo) {
            if (!this.seat.includes(seatNo)) {
                this.seat.push(seatNo)
            } else {
                this.seat.splice(this.seat.indexOf(seatNo), 1)
            }
        },
        getDate(week = 0) {
            this.isOnce = false
            let numOfWeek = 7
            console.log(numOfWeek)
            for (let i = week * numOfWeek; (i = week * numOfWeek + numOfWeek); i++) {
                let nextDay = new Date(this.today)
                nextDay.setDate(this.date.getDate() + i)
                this.dateResult.push({ data: nextDay, isSelect: false })
            }
            this.dateResult[0].isSelect = true
        },
        arrayRemove(arr, value) {
            return arr.filter(function (ele) {
                return ele != value
            })
        },

        goCheckout() {
            if (this.chooseSeat.length === 0) {
                alert('กรุณาเลือกที่นั่ง')
                return
            }
            this.visible = true
        },

        async groupBySeat(data) {
            return Object.values(
                data.reduce((result, item) => {
                    const { seatRow } = item
                    if (!result[seatRow]) {
                        result[seatRow] = { seatRow, items: [] }
                    }

                    result[seatRow].items.push(item)

                    return result
                }, {})
            )
        },

        async getSeat(theaterId) {
            try {
                const res = await axios.get(`http://localhost:8080/api/seat/${theaterId}`)
                const seat = await this.groupBySeat(res.data)
                this.seats = seat
            } catch (error) {
                console.log(error)
            }
        },

        async getRoundInfo() {
            const res = await axios.get(`http://localhost:8080/api/rou/round/${this.roundId}`)
            this.round = res.data
            this.movies = res.data.movie
            this.theaters = res.data.theater
            this.getSeat(this.theaters.id)
        },

        async handlerClickSeat(seat) {
            console.log(seat)
            const findSeat = this.chooseSeat.findIndex((item) => item.id === seat.id) !== -1

            if (findSeat) {
                this.chooseSeat = this.chooseSeat.filter((item) => item.id !== seat.id)
            } else {
                this.chooseSeat.push(seat)
            }
        },
        async handleSubmitPay() {
            console.log('start pay')
            try {
                this.chooseSeat.map(async (item) => {
                    await axios.post(`http://localhost:8080/api/resev/reservation`, {
                        userId: this.userId,
                        seatId: item.id,
                        seatRow: item.id,
                        roundId: this.roundId,
                        paymentStatus: 'DONE',
                        price: 240
                    })
                })
                console.log('success')
                this.$router.push('/home')
            } catch (error) {
                console.log(error)
            }
        }
    },
    mounted() {
        this.getRoundInfo()
    },
    created() {
        this.roundId = this.$route.params.roundId
        this.userId = JSON.parse(localStorage.getItem('user')).id
    }
}
</script>

<style>
.customdate {
    width: 80px;
    height: 70px;
    border-width: 5px;
    border-radius: 8px;
    background-image: linear-gradient(to bottom right, #2f4f4f, #8fbc8f);
}

.isSelected {
    color: red;
    font-weight: bold;
}

h1 {
    color: lightgreen;
}

h1:hover {
    color: lightcoral;
    cursor: pointer;
}

#sum {
    position: absolute;
    top: 80%;
    left: 80%;
}

#sumt {
    position: absolute;
    top: 95%;
    left: 80%;
}
</style>

<template>
    <!-- modal open -->
    <Dialog v-model:visible="visible" modal :style="{ width: '50vw' }">
        <div class="flex flex-column w-full align-items-center">
            <div class="w-8 flex justify-content-between">
                <img :src="movies.movieImage" style="height: 300px" />
                <div class="">
                    <h5 class="text-xl mt-1">{{ movies.movieName }}</h5>
                    <h4 class="text-sm mt-1 text-yellow-200">
                        ราคา : {{ chooseSeat.length * 240 }} บาท ที่นั่ง : {{ chooseSeat.length }}
                    </h4>
                </div>
            </div>

            <div class="w-8 flex align-items-center">
                <div class="flex flex-column">
                    <h5>Email</h5>
                    <InputText type="text" v-model="username" placeholder="Email@..." />
                </div>
                <div class="flex ml-5 flex-column">
                    <h5 for="">Mobile</h5>
                    <InputText type="text" v-model="password" placeholder="0888888888" />
                </div>
            </div>
            <div class="w-8 flex mt-5 flex-column align-items-start">
                <div class="flex flex-column align-items-start">
                    <h8>ชำระเงินด้วยบัตรเครดิต</h8>
                    <img class="mt-2"
                        src="https://media.discordapp.net/attachments/895540915714789417/1106303405690982410/25654-2-major-credit-card-logo-transparent-thumb.png?width=392&height=52"
                        alt="" />
                </div>
                <div class="w-full">
                    <div class="flex flex-column">
                        <h5>Card number</h5>
                        <InputText class="flex flex-column" type="text" v-model="Cardnumber" placeholder="Card number" />
                    </div>

                    <div class="flex flex-column">
                        <h5 class="flex flex-column" for="">Name on card</h5>
                        <InputText class="flex flex-column" type="text" v-model="nameoncard" placeholder="Name on card" />
                    </div>
                    <div class="flex w-full justify-content-between">
                        <div class="flex flex-column flex-grow-1">
                            <h5 class="flex flex-column">Expiration</h5>
                            <InputText class="flex flex-column" type="text" v-model="username" placeholder="MM/YY" />
                        </div>
                        <div class="flex ml-5 flex-column flex-grow-1">
                            <h5 class="flex flex-column" for="">CVV</h5>
                            <InputText class="flex flex-column" type="tesxt" v-model="password" placeholder="CVV/CVV" />
                        </div>
                    </div>
                </div>
            </div>
            <Button @click="handleSubmitPay()" class="flex flex-column mt-8" label="ยืนยัน" style="width: 260px" />
        </div>
    </Dialog>

    <!-- end modal -->

    <div class="bg-black container fadeinleft animation-duration-200">
        <div class="flex col-8 mt-5 px-5">
            <div class="" style="width: 20rem">
                <img :src="movies.movieImage" style="height: 400px" class="border-round-xl" />
            </div>
            <div class="p-5 text-xl">
                <p>{{ movies.movieReleaseDate }}</p>
                <div class="mt-5 text-2xl">
                    <h5>{{ movies.movieName }}</h5>
                </div>
            </div>
            <div class="flex col-4">
                <div class="flex justify-content-end flex-wrap ml-8">
                    <iframe width="500" height="300" :src="movies.movieTrailer" title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
        </div>
        <div class="flex justify-content-start w-full bg-gray-800 p-1">
            <div>
                <Button label="เลือกวัน" class="p-button-text text-xl ml-4" />
                <Button label="จองตั๋ว" class="p-button-text text-xl ml-4" />
                <Button label="ชำระเงิน" class="p-button-text text-xl ml-4" />
            </div>
        </div>
        <div class="flex ml-8 mt-8 w-full p-1">
        <div class="text-3xl flex">
            <font-awesome-icon class="mr-3 mt-2 text-red-400" icon="fa-solid fa-couch" />
            ที่นั่งที่ถูกจองไปแล้ว
        </div>
        <div class="text-3xl ml-7 flex">
            <font-awesome-icon class="mr-3 mt-2 text-green-400" icon="fa-solid fa-couch" />
            ที่นั่งที่ผู้ใช้งานเลือก
        </div>
    </div>
        <div class="mt-5 flex align-items-center">
            <div class="flex-grow-1 flex flex-column align-items-center px-5">
                <div class="flex justify-content-start align-items-center w-full row-gap-5" v-for="seatRow in seats"
                    :key="seatRow.id">
                    <div class="mr-5 mb-3 text-3xl">{{ seatRow.seatRow }}</div>
                    <div class="flex justify-content-between column-gap-3">
                        <div class="" v-for="seat in seatRow.items" :key="seat.id">
                            <div @click="seat.reservations.length == 0 && handlerClickSeat(seat)" :class="[
                                this.chooseSeat.findIndex((item) => item.id === seat.id) !== -1 && 'text-green-400',
                                seat.seatNumber === 7 && 'ml-5',
                                seat.reservations.length != 0 && 'text-red-400'
                            ]" class="text-3xl mt-5 flex flex-column align-items-center">
                                <font-awesome-icon icon="fa-solid fa-couch" />
                                {{ seat.seatNumber }}
                            </div>
                        </div>
                    </div>
                    <div class="ml-5 mb-3 text-3xl">{{ seatRow.seatRow }}</div>
                </div>
            </div>
            <div class="flex col-4">
                <Card class="flex surface-ground justify-content-end flex-wrap">
                    <template #content>
                        <img :src="this.movies.movieImage" style="height: 400px" />
                        <h5 class="text-xl mt-1">{{ this.movies.movieName }}</h5>
                        <h3 class="text-xl mt-1">{{ this.theaters.theaterName }}</h3>
                        <h4 class="text-sm mt-1 text-yellow-200">
                            ราคา : {{ chooseSeat.length * 240 }} บาท ที่นั่ง : {{ chooseSeat.length }}
                        </h4>
                        <div>
                            <Button class="flex flex-column mt-5" label="ชำระเงิน" style="width: 260px"
                                @click="goCheckout()" />
                        </div>
                    </template>
                </Card>
            </div>
        </div>
    </div>
</template>

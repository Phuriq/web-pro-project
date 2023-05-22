<template>
  <Dialog v-model:visible="visible" modal :style="{ width: '30vw' }">
    <img class="flex justify-content-center"
      src="https://media.discordapp.net/attachments/895540915714789417/1109960950573977610/image.png?width=648&height=652"
      alt="">
    <h5 class="flex justify-content-center text-4xl">Scan เพื่อรับบัตร</h5>
  </Dialog>
  <div class="fadeinleft animation-duration-200">
    <h5 class="flex align-items-center justify-content-center text-4xl" v-if="!tickets">
      ยังไม่มีตั๋วภาพยนต์ที่จองไว้
    </h5>
    <div class="w-full flex flex-column items-center mt-5 px-5" v-if="tickets">
      <div class="w-full" v-for="ticket in tickets" :key="ticket.id">
        ตั๋วภาพยนต์ของวันที่ {{ ticket.date }}
        <hr />
        <div class="grid pt-3">

          <div class="p-5 " v-for="item in ticket.items" :key="item.id">
            <reserveCard :image="item.round.movie.movieImage" :date="ticket.date" :name="item.round.movie.movieName"
              :seat="item.seat.seatRow + item.seat.seatNumber" :theater="item.round.theater.theaterName"
              @click="goScan()">
            </reserveCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import ReserveCard from '../components/reserveCard.vue'
export default {
  data() {
    return {
      tickets: null,
      userId: "",
      visible: false,

    };
  },
  created() {
    this.userId = JSON.parse(localStorage.getItem("user")).id;
  },
  mounted() {
    this.getTickets();
  },
  methods: {
    async groupByDate(data) {
      return Object.values(data.reduce((result, item) => {
        const { createdAt } = item;
        const date = new Date(createdAt).toLocaleDateString("th");
        if (!result[date]) {
          result[date] = { date, items: [] };
        }
        result[date].items.push(item);
        return result;
      }, {}));
    },
    async getTickets() {
      try {
        const res = await axios.get(`http://localhost:8080/api/resev/reservation/${this.userId}`);
        const group = await this.groupByDate(res.data);
        this.tickets = group;
      }
      catch (err) {
        console.log(err);
      }
    },
    goScan() {
      this.visible = true
    },
  },
  components: { ReserveCard }
}
</script>

<template>
  <div class="fadeinleft animation-duration-200">
    <h5 class="flex align-items-center justify-content-center text-4xl" v-if="!tickets">
      ยังไม่มีตั๋วภาพยนต์ที่จองไว้
    </h5>
    <div class="w-full flex flex-col items-center mt-5 px-5" v-if="tickets">
      <div class="w-full" v-for="ticket in tickets" :key="ticket.id">
        {{ ticket.date }}
        <hr />
        <div class="flex flex-column items-center row-gap-3">
          <div class="p-5 border-1 border border-round" v-for="item in ticket.items" :key="item.id">
            <p>ราคา {{ item.price }}</p>
            <p>{{ item.round }}</p>
            <p>{{ item.round.movie }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      tickets: null,
      userId: ''
    }
  },

  created() {
    this.userId = JSON.parse(localStorage.getItem('user')).id
  },

  mounted() {
    this.getTickets()
  },

  methods: {
    async groupByDate(data) {
      return Object.values(
        data.reduce((result, item) => {
          const { createdAt } = item
          const date = new Date(createdAt).toLocaleDateString('th')
          if (!result[date]) {
            result[date] = { date, items: [] }
          }

          result[date].items.push(item)

          return result
        }, {})
      )
    },
    async getTickets() {
      try {
        const res = await axios.get(`http://localhost:8080/api/resev/reservation/${this.userId}`)
        const group = await this.groupByDate(res.data)
        this.tickets = group
        console.log(group)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

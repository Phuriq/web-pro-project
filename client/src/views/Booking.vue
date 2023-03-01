<script>
import CardItem from "../components/CardItem.vue"
import Daybutton from "../components/Daybutton.vue";
export default {
    data() {
        return {
        }
    },
    components: {
        CardItem,
        Daybutton
    }
}
</script>

<template>
    <div class="grid mt-5">
        <div class="col-3" style="width: 20rem">
            <CardItem></CardItem>
        </div>
        <div class="ml-6 p-5 text-xl mt-8">
            <p>Date</p>
            <div class="mt-8 text-2xl">
                <h5>Movie name</h5>
            </div>
        </div>
    </div>
    <div class="flex justify-content-between w-full bg-gray-800 p-1">
      <div>
          <Button label="กำลังฉาย" class="p-button-text text-xl ml-4" />
          <Button label="ACTION" class="p-button-text text-xl ml-4" />
          <Button label="COMEDY" class="p-button-text text-xl ml-4" />
          <Button label="HORROR" class="p-button-text text-xl ml-4" />
          <Button label="ROMANTIC" class="p-button-text text-xl ml-4" />
      </div>
    </div>
    <div class="mt-5 grid">
      <div class="col" v-for="i in 10">
          <Daybutton></Daybutton>
      </div>
  </div>
</template>

<style>
* {
    margin: 0;
    padding: 0;
}
</style>


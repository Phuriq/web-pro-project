<template>
  <div>
    <div class="flex justify-content-center mt-8">
      <Button class="mr-5 text-3xl" label="NowShowing" />
      <Button class="text-3xl" label="Coming Soon" />
    </div>
    <div class="grid mt-5">
      <div class="col-3" v-for="i in 10">
          <CardItem></CardItem>
      </div>
  </div>
  </div>
</template>

<script>
import CardItem from "../components/CardItem.vue"

export default {
  components: {
    CardItem,
  },
  name: "App",

  data() {
    return {};
  },
  methods: {},
};
</script>
<style>
.cards {
  display: flex;
  margin-top: 320px;
  margin-left: 20px;
}

.cards1 {
  display: flex;
  margin-top: -400px;
  margin-left: 400px;
}

.cards2 {
  display: flex;
  margin-top: -400px;
  margin-left: 800px;
}

.cards3 {
  display: flex;
  margin-top: -400px;
  margin-left: 1200px;
}
</style>
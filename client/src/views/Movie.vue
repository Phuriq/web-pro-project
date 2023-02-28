<template>
    <div class ="cards">
    <CardItem>
        
    </CardItem></div>
    <div class ="cards1">
    <CardItem>
        
    </CardItem></div>
    <div class ="cards2">
    <CardItem>
        
    </CardItem></div>
    <div class ="cards3 ">
    <CardItem>
        
    </CardItem></div>

</template>

<script>
import CardItem from "../components/CardItem.vue"

export default{
    components:{
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
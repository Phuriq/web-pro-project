<template>
    <div class="grid mt-5">
        <div class="col-3" style="width: 20rem">
            <CardItem></CardItem>
        </div>
        <div class="ml-6 p-5 text-xl flex flex-column surface-ground border-3 border-round border-green-600" style="width: 1400px">
            <h5>รายการ การสั่งซื้อทั้งหมด</h5>
            <div>
                <p>
                    จำนวน
                </p>
            </div>
            <div class="flex flex-column border-3 border-round border-green-600" style="width: 40px; ">
                <font-awesome-icon icon="fa-solid fa-couch" />
            </div>
            <p id=seatnum  class="flex flex-column">555</p>
            <p id=price1  class="flex flex-column">400 THB</p>
            <p id=price2  class="flex flex-column">400 THB</p>
            <p></p>
            <div class="card-container yellow-container">
                <div class="block bg-yellow-500 font-bold text-left p-4 border-round mb-3">ราคารวม</div>
            </div>
            <div class="mt-5 text-2xl">
                <h5>ยืนยันรายการ</h5>
                <div class="field col-12 md:col-4">
                    <InputText type="text" id="inputnumber"  placeholder="Cardnumber"  style="width: 600px;"/>
                    <InputNumber id="inputnumber"  placeholder="cvc"  style="width: 10px; position:absolute; top:58.7%; left:55%;"/>
                </div>
                <p></p>
                <Button   v-on:click="greet" icon="pi pi-check" class="p-button-lg" style="width: 1330px;"/>
            </div>
        </div>
    </div>
</template>

<script>
import CardItem from "../components/CardItem.vue"
import Cardsum from "../components/Cardsum.vue";
export default {
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
    },
}
</script>
<style>
#seatnum{
    position: absolute;
    top: 27%;
    left: 25%;
}
#price1{
    position: absolute;
    top: 27%;
    left: 87%;
}
#price2{
    position: absolute;
    top: 36.2%;
    left: 87%;
}

</style>
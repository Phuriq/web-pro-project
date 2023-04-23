<script>
export default {
    props: [
        "id",
        "name",
        "date",
        "image",
        "title",
        "trailer",
        "category",
        "time",
        "theater",
        "showtime"
    ]
}
</script>

<template>
    <div class="flex flex-row surface-ground border-round-2xl mt-2">
        <div class="flex flex-row mx-5">
            <h4 class="text-xl"> {{ theater }}</h4>
        </div>
    </div>
    <div>
        <Button class="mx-5">{{ showtime }}</Button>
    </div>
</template>
<style></style>
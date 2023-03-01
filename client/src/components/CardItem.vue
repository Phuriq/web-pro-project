<script>
export default {
    props: [
        'img_src',
        'title'
    ]
}
</script>

<template>
    <Card style="height: 20rem;">
        <template #header value="movie">
            <img :src="img_src" style="width: 100%;"/>
            <p>{{ title }}</p>
        </template>
    </Card>
</template>
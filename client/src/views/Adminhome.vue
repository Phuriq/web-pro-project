<script>
import axios from "axios"


export default {
    data() {
        return {
            movieName: '',
            movieReleaseDate: '',
            movieHour: '',
            movieTitle: '',
            movieCategory: '',
            movieImage: '',
            movieTrailer: '',
            movieTheater: '',
            showtime: '',
            movieId: ''
        }
    },
    mounted() {
        this.checkAdmin();
    },
    methods: {
        checkAdmin() {
            const user = JSON.parse(localStorage.getItem("user"));

            if (!user || user.role !== "admin") {

                this.$router.push("/home");
            }
        },

        async CreatMovie() {
            try {
                const response = await axios.post('http://localhost:8080/api/movie/home', {
                    movieName: this.movieName,
                    movieReleaseDate: this.movieReleaseDate,
                    movieHour: this.movieHour,
                    movieTitle: this.movieTitle,
                    movieCategory: this.movieCategory,
                    movieImage: this.movieImage,
                    movieTrailer: this.movieTrailer,
                    movieTheater: this.movieTheater,
                    showtime: this.showtime,
                })
                console.log(response);
                const { movieName } = response.data.Movie;
                alert(`เพิ่มหนังเรื่อง ${movieName} แล้ว`);
            } catch (error) {
                alert(error.response.data.message)
            }
        },
        async deleteMovie() {
            try {
                const response = await axios.delete(`http://localhost:8080/api/movie/movieinfo/${this.movieId}`);
                console.log(response);
                const { message } = response.data;
                alert(message);

                // เมื่อลบภาพยนต์เรียบร้อยแล้วให้เคลียร์ค่าใน input
                this.movieId = '';
            } catch (error) {
                alert(error.response.data.message);
            }
        },
    },

}
</script>

<template>
    <h5 class="flex align-items-center justify-content-center text-4xl">
        MASTER ADMIN SUPER DEV
    </h5>
    <div class="grid justify-content-center pl-8">
        <div class="col pl-8">
            <div class="flex align-items-center justify-content-center pl-8">
                <Card style="width: 30rem" class="surface-50 border-round-xs" id="grad2">
                    <template #content>
                        <h5 class="flex align-items-center justify-content-center text-2xl" style="margin: 0;">
                            เพิ่มภาพยนต์
                        </h5>
                        <div class="flex flex-column">
                            <h5>Movie Name</h5>
                            <InputText type="text" v-model="movieName" />
                            <div class="grid">
                                <div class="col">
                                    <h5 class="mt-5">Movie Release Date</h5>
                                    <InputText type="text" v-model="movieReleaseDate" />
                                </div>
                                <div class="col">
                                    <h5 class="mt-5">Movie Hour</h5>
                                    <InputText type="text" v-model="movieHour" />
                                </div>
                            </div>
                            <h5 class="mt-5">Movie Title</h5>
                            <InputText type="text" v-model="movieTitle" />

                            <h5 class="mt-5">Movie Image</h5>
                            <InputText type="text" v-model="movieImage" />

                            <h5 class="mt-5">Movie Trailer</h5>
                            <InputText type="text" v-model="movieTrailer" />
                            <div class="grid">
                                <div class="col">
                                    <h5 class="mt-5">Movie Theater</h5>
                                    <InputText type="text" v-model="movieTheater" />
                                </div>
                                <div class="col">
                                    <h5 class="mt-5">Showtime</h5>
                                    <InputText type="text" v-model="showtime" />
                                </div>
                            </div>
                        </div>

                        <div class="flex flex-column">
                            <Button @click.prevent="CreatMovie" label="CreatMovie"
                                class="flex justify-content-center p-button-primary mt-5" />
                        </div>
                    </template>
                </Card>
            </div>
        </div>
        <div class="col pl-8">
            <Card style="width: 15rem" class="surface-50 border-round-xs" id="grad">
                <template #content>
                    <h5 class="flex align-items-center justify-content-center text-2xl " style="margin: 0;">
                        ลบภาพยนต์
                    </h5>
                    <div class="flex flex-column">
                        <h5 style="text-align: center;">MovieId</h5>
                        <InputText type="text" v-model="movieId" />

                    </div>


                    <div class="flex flex-column">
                        <Button @click.prevent="deleteMovie" label="Delete"
                            class="flex justify-content-center p-button-primary mt-5" />
                    </div>
                </template>
            </Card>
        </div>
    </div>
</template>

<style></style>


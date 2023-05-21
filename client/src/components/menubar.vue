<template>
    <div id=grad1 class="flex align-items-center justify-content-between w-full bg-gray-900 p-2">
        <div class="flex align-items-center">
            <img alt="logo"
                src="https://media.discordapp.net/attachments/895540915714789417/1108411563053948949/Screenshot_2566-05-17_at_22.10.55-removebg-preview.png?width=1256&height=388"
                height="40" class="mr-2" />
            <router-link to="/home">
                <Button label="Movies" class="p-button-text ml-5" id=button />
            </router-link>
        </div>
        <div class="flex align-content-center h-full">
            <!-- <Avatar label="K" class="align-self-center mx-4 navbar-item has-dropdown is-hoverable"
                style="background-color:#2196F3; color: #ffffff" shape="circle" /> -->
            <div class="card flex justify-content-center">
                <Avatar :label=userName @click="toggle" aria-haspopup="true" aria-controls="overlay_menu"
                    class="align-self-center cursor-pointer mx-4" style="width: 150px; color: #41DD07" />
                <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
                <Toast />
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios"

export default {

    data() {
        return {
            movies: [],
            movieName: '',
            userName: JSON.parse(localStorage.getItem("user"))?.userName,
            items: [
                {
                    items: [
                        {
                            label: 'My ticket',
                            icon: 'pi pi-ticket',
                            url: '/myticket'
                        },
                        {
                            label: 'Logout',
                            command: () => {
                                localStorage.removeItem("accessToken");
                                localStorage.removeItem("user");
                                this.userName = ''
                                this.$router.push("/signin");
                            },
                            icon: 'pi pi-sign-out',
                        },
                    ]
                },
            ]
        };
    },
    methods: {
        toggle(event) {
            this.$refs.menu.toggle(event);
        },
        save() {
            this.$toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 });
        },
        logout() {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("user");
            this.$router.push("/signin");
        },
        async allmovie() {
            const res = await axios.get('http://localhost:8080/api/movie/movieall');
            this.movies = res.data;
            console.log(this.movies)
        },
        // async movieSearch() {
        //    const res = await axios.post('http://localhost:8080/api/movie/movieall', {movieName: movieName});
        //   this.movies = res.data;
        //   console.log(this.movies)
        // },
    },
    created() {
        this.allmovie();
    },
};

</script>

<style>
#grad1 {
    background: linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(8, 79, 38, 1) 92%, rgba(0, 0, 0, 1) 100%);
}

#button:hover {
    background-color: #5F9EA0;
    color: white;
}
</style>
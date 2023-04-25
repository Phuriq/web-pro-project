<template>
    <div id=grad1 class="flex align-items-center justify-content-between w-full bg-gray-900 p-2">
        <div class="flex align-items-center">
            <Avatar label="P" class="align-self-center" style="background-color:#2196F3; color: #ffffff" shape="circle" />
            <router-link to="/home">
                <Button label="Home" class="p-button-text ml-5" id=button />
            </router-link>
            <router-link to="/movie">
                <Button label="Cinema" class="p-button-text ml-3" id=button />
            </router-link>
            <router-link to="/theater">
                <Button label="Theater" class="p-button-text ml-3" id=button />
            </router-link>
        </div>
        <div class="flex align-content-center h-full">
            <div class="flex align-self-center">
                <!-- <form action="" method="GET"> -->
                <input
                    class="flex align-self-center p-inputtext p-component mr-4 border-green-600 p-inputtext-sm border-round-3xl"
                    placeholder="Search" type="text">
                <!-- </form> -->
            </div>
            <!-- <Avatar label="K" class="align-self-center mx-4 navbar-item has-dropdown is-hoverable"
                style="background-color:#2196F3; color: #ffffff" shape="circle" /> -->
                <div class="card flex justify-content-center">
                    <Avatar label="K" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" class="align-self-center mx-4"
                    style="background-color:#2196F3; color: #ffffff" shape="circle"/>
                    <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
                    <Toast />
                </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Kstandforkyu',
                    items: [
                        {
                            label: 'Logout',
                            icon: 'pi pi-sign-out',
                            url: '/signin'
                        },
                        {
                            label: 'My ticket',
                            icon: 'pi pi-ticket',
                        }
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
        }
    },
};

</script>

<style>
#grad1 {
    background-image: linear-gradient(to bottom right, #000000, #2F4F4F, #8FBC8F);
}

#button:hover {
    background-color: #5F9EA0;
    color: white;
}
</style>
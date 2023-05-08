<script>
</script>

<template>
    <div class="fade flex text-4xl justify-content-center mt-4">
        <h5>Sign up</h5>
    </div>
    <div class="fadein flex justify-content-center">
        <Card style="width: 30rem" class="surface-50 border-round-xs">
            <template #content>
                <div class="flex flex-column">
                    <h5>Email</h5>
                    <InputText type="text" v-model="value1" />
                    <h5>Username</h5>
                    <InputText type="text" v-model="value1" />
                    <h5>Password</h5>
                    <InputText type="text" v-model="value1" />
                    <div class="grid">
                        <div class="col">
                            <h5>ชื่อ</h5>
                            <InputText type="text" v-model="value1" />
                        </div>
                        <div class="col">
                            <h5>นามสกุล</h5>
                            <InputText type="text" v-model="value1" />
                        </div>

                    </div>
                    <h5>Tel</h5>
                    <InputText type="number" v-model="value1" />
                </div>
                <router-link to="/signin">
                    <div class="flex flex-column">
                        <Button label="let's get started"
                            class="text-xl flex flex-column justify-content-center p-button-primary mt-5" />
                    </div>
                </router-link>
                <router-link to="/signin">
                    <div class="flex flex-column">
                        <Button label="Go back"
                            class="text-xl flex flex-column justify-content-center p-button-secondary mt-5" />
                    </div>
                </router-link>
            </template>
        </Card>
    </div>
</template>
<style>
</style>

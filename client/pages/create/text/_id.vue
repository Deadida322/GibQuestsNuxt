<template>
    <div>
        <Header title='Редактор текста'/>
        <v-main class="pa-2 mt-4">
            <div @click="$router.go(-1)" class="mb-4">
                <v-icon large>
                    mdi-arrow-left
                </v-icon>
            </div>
            <v-card><wysiwyg v-model="text"/></v-card>
            <v-card class="mt-4 pa-2" v-html="text"></v-card>
        </v-main>
    </div>
</template>

<script>
import Header from '~/components/UI/Header'
export default {
    data(){
        return{
            text: ''
        }
    },
    components: {
        Header
    }
}
</script>


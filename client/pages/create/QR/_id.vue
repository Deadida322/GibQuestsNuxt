<template>
    <div>
        <Header title='Генерировать код'/>
        <v-main class="pa-2 mt-4">
            <div @click="$router.go(-1)" class="mb-4">
                <v-icon large>
                    mdi-arrow-left
                </v-icon>
            </div>
            <v-text-field solo label="Кодовое слово"></v-text-field>
            <v-btn class="w-100" color="primary">Сгенерировать</v-btn>
            <div>
                <h2 class="text-body-1 my-2">Текущий код</h2>
                <v-img contain width="100%" class="qr" src="https://e7.pngegg.com/pngimages/714/35/png-clipart-qr-code-barcode-scanners-scanner-computer-code-angle-text.png">
                    <v-btn fab color="warning" small class="download">
                        <v-icon>mdi-download</v-icon>
                    </v-btn>
                </v-img>
            </div>
        </v-main>
    </div>
</template>

<script>
import Header from '~/components/UI/Header'
import { mapState } from 'vuex'
export default {
    components:{
        Header
    },
    data(){
        return{
        }
    },
    methods: {
        setCurrentStage(){

        },
        qrChange(stage){
        }
    },
    computed:{
        ...mapState('create', ['currentStage'])
    }
}
</script>

<style lang="scss">
    .qr{
        position: relative;
    }
                
    .download{
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
</style>



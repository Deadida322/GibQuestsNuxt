<template>
    <div>
        <Header title='Создать тест'/>
        <v-main class="pa-2 mt-4">
            <div @click="$router.go(-1)" class="mb-4">
                <v-icon large>
                    mdi-arrow-left
                </v-icon>
            </div>
            <QuestionCreate @testChange="testChange" :quests="currentStage.questions"/>
        </v-main>
    </div>
</template>

<script>
import Header from '~/components/UI/Header'
import QuestionCreate from '~/components/create/QuestionCreate.vue'
import Add from '~/components/UI/Add'
import { mapState } from 'vuex'
export default {
    components:{
        Header,
        QuestionCreate
    },
    data(){
        return{
            currentTest: {}
        }
    },
    methods: {
        setCurrentTest(){

        },
        testChange(test){
            this.currentTest = test
            console.log(this.currentTest)
        }
    },
    computed:{
        ...mapState('create', ['currentStage'])
    }
}
</script>


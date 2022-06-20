<template>
    <div>
        <Header title='Создать тест'/>
        <v-main class="pa-2 mt-4">
            <div @click="$router.go(-1)" class="mb-4">
                <v-icon large>
                    mdi-arrow-left
                </v-icon>
            </div>
            <QuestionCreate @testChange="testChange" :quests="stage.questions"/>
        </v-main>
        <v-card-actions class="pa-0 mt-4">
            <v-spacer></v-spacer>
            <v-btn @click="$router.go(-1)" text>Назад</v-btn>
            <v-btn @click="setStage" color="primary">Сохранить</v-btn>
        </v-card-actions>
        <v-snackbar v-model="snackbar">
            Изменения сохранены
            <template v-slot:action="{ attrs }">
                <v-btn class="primary--text" text small @click="snackbar=!snackbar">
                    Закрыть
                </v-btn>
            </template>
        </v-snackbar>
    </div>
</template>

<script>
import Header from '~/components/UI/Header'
import QuestionCreate from '~/components/create/QuestionCreate.vue'
export default {
    components:{
        Header,
        QuestionCreate
    },
    created(){
        this.id = this.$route.params.id
        this.quest = {...this.$store.getters['create/getCurrentQuest']}
        this.stage = {...this.$store.getters['create/getCurrentStage']}
        if(!this.stage.questions){
            this.stage.questions = []
        }

    },
    data(){
        return{
            id: 0,
            quest: {},
            stage: {},
            currentTest: [],
            snackbar: false
        }
    },
    methods: {
        setStage(){
            this.stage.questions = this.current
            this.quest.stages[this.id] = this.stage
            console.log(this.quest)
            this.$store.commit('create/setCurrentQuest', this.quest)
            this.snackbar = true
        },
        testChange(test){
            this.currentTest = test
        }
    },
}
</script>


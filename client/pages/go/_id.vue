<template>
    <div v-if="getCurrent">
        <Header title='QuestGib'/>
        <v-row class="my-3 d-flex justify-space-between text-center align-center">
            <v-col no-gutters class="col col-2">
                <v-icon @click="$router.go(-1)" large>
                    mdi-arrow-left
                </v-icon>
            </v-col>
            <v-col class="col text-h5 col-4">
                <v-card class="rounded-pill grey lighten-4">
                    Этап <span class="primary--text">{{currentStageNumber+1}}</span>
                </v-card>
            </v-col>
            <v-col class="col col-2"></v-col>
        </v-row>
        <v-main class="pa-2 mt-4">
            <v-card class="relative">
                <v-chip small class="stage-chip">{{currentStage.type}}</v-chip>
                <div class="primary--text pa-2 text-h6 text-center">
                    {{currentStage.name}}
                </div>
                <VideoStage @stageComplete="stageComplete" v-if="currentStage.url" :url="currentStage.url"/>
                <TextStage v-if="currentStage.text" :text="currentStage.text"/>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn :disabled="!showBtn" @click="nextStage" color="primary">Далее</v-btn>
                </v-card-actions>
            </v-card>
        </v-main>
    </div>
</template>


<script>
import Header from '~/components/UI/Header'
import VideoStage from '~/components/Go/VideoStage'
import TextStage from '~/components/Go/TextStage'
import { mapGetters } from 'vuex'
export default {
    components:{
        Header,
        VideoStage,
        TextStage
    },
    data(){
        return{
            currentStageNumber: 1,
            showBtn: false
        }
    },
    methods: {
        stageComplete(){
            this.showBtn = true
        },
        nextStage(){
            this.showBtn = false
            this.currentStageNumber++
        }
    },
    computed:{
        ...mapGetters('quests', ['getCurrent']),
        currentStage() {
            const stage = this.getCurrent.stages[this.currentStageNumber]
            if(stage.type === 'Текст') {
                this.showBtn = true
            }
            return stage
        }
    }
}
</script>

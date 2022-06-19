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
                <MapStage :key="currentStageNumber+1" v-if="currentStage.x" :goalLat="currentStage.x" :goalLong="currentStage.y"/>
                <QRStage v-if="currentStage.to" @stageComplete="stageComplete" :codeWord="currentStage.to"/>
                <TestStage v-if="currentStage.questions"  @stageComplete="stageComplete" :questions="currentStage.questions"/>
                <v-card-actions>
                    <v-btn :disabled="!currentStageNumber" @click="previousStage" dark color="blue">Назад</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn :disabled="!showBtn" @click="nextStage" color="primary">Далее</v-btn>
                </v-card-actions>
            </v-card>
        </v-main>
        <Progress :goal="getCurrent.stages.length" :current="currentStageNumber"/>
    </div>
</template>


<script>
import Header from '~/components/UI/Header'
import VideoStage from '~/components/Go/VideoStage'
import TextStage from '~/components/Go/TextStage'
import MapStage from '~/components/Go/MapStage'
import QRStage from '~/components/Go/QRStage'
import TestStage from '~/components/Go/TestStage'
import Progress from '~/components/Go/Progress'
import { mapGetters } from 'vuex'

export default {
    components:{
        Header,
        VideoStage,
        TextStage,
        MapStage,
        QRStage,
        TestStage,
        Progress
    },
    data(){
        return{
            currentStageNumber: 0,
            showBtn: false
        }
    },
    methods: {
        stageComplete(){
            console.log('complete')
            this.showBtn = true
        },
        nextStage(){
            this.showBtn = false
            this.currentStageNumber++
        },
        previousStage(){
            this.currentStageNumber--
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

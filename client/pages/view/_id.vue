<template>
    <div v-if="getCurrent">
        <Header title='QuestGib'/>
        <div @click="$router.go(-1)" class="my-3">
            <v-icon large>
                mdi-arrow-left
            </v-icon>
        </div>
        <v-main class="pa-2 mt-4">
            <v-img class="d-flex text-center align-center" gradient="to top right, rgba(0,0,0,.4), rgba(25,32,72,.6)" dark  :src="getCurrent.image">
                <div class="text-h4">{{getCurrent.title}}</div>
            </v-img>
            <v-card class="text-body-1 pa-2 mt-2" v-html="getCurrent.description"/>
            <div class="text-h5 mt-2">Этапы</div>
            <Stage v-for="(item, idx) in getCurrent.stages" class="mt-4" :key="idx" :idx="idx" :stage="item"/>
            <div class="d-flex mt-4">
                <v-spacer/><v-btn :to="`/go/${getCurrent.id}`" color="primary">Пройти</v-btn>
            </div>
        </v-main>
    </div>
</template>


<script>
import Header from '~/components/UI/Header'
import { mapGetters } from 'vuex'
export default {
    components:{
        Header
    },
    computed:{
        ...mapGetters('quests', ['getCurrent'])
    }
}
</script>

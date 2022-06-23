<template>
    <div v-if="quest">
        <Header title='Отслеживание'/>
        <v-row class="my-3 d-flex justify-space-between text-center align-center">
            <v-col no-gutters class="col col-2">
                <v-icon @click="$router.go(-1)" large>
                    mdi-arrow-left
                </v-icon>
            </v-col>
            <v-col class="col text-h5 col-4">
                <v-card class="rounded-pill grey lighten-4">
                    {{quest.name}}
                </v-card>
            </v-col>
            <v-col class="col col-2"></v-col>
        </v-row>
        <v-main class="pa-2 mt-4">
            
        </v-main>
        
    </div>
</template>


<script>
import { mapGetters, mapState } from 'vuex'
import Header from '~/components/UI/Header'
export default {
    created(){
        this.id=this.$route.params.id
        this.$axios.get(`/getCreatedQuests?id?=${this.user.id}`).then(res=>{
            this.quest = res.data
            console.log(this.quest)
        })
    },
    data(){
        return{
            id: 0,
            quest: {}
        }
    },
    components:{
       Header
    },
    computed:{
        ...mapState('auth', ['isLoggedIn', 'user']),

    }
}
</script>

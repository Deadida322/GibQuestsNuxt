<template>
    <div>
        <tezt :io="user" v-model="user"/>
        {{user.title}}
    </div>
    
</template>

<script>
import tezt from '~/components/tezt.vue'
export default {
    components:{
        tezt
    },
    data(){
        return{
            user: {
                title: 'title',
                description: 'description'
            }
        }
    },
   
}
</script>


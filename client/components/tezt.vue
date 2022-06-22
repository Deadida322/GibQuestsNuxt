<template>
    <v-card>
        <v-text-field v-model="io.title"></v-text-field>
        <v-text-field v-model="io.description"></v-text-field>
    </v-card>
</template>

<script>
export default {
    data(){
        return{
           
        }
    },
    props:{
        io: {
            title: '',
            description: ''
        }
    },
    watch:{
        io:{
            handler: function(val){
                this.$emit('input', val)
            },
            deep: true
        }
    }
}
</script>

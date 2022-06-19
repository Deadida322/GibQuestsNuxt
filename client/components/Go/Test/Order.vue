<template>
    <div>
        <Container
            @drop="onDrop"
            orientation='vertical'
        >
            <Draggable 
                v-for="(item, idx) in answer"
                :key="idx"
            >
                <v-text-field
                    readonly
                    solo
                    :value="item"
                ></v-text-field>
            </Draggable>
        </Container>
    </div>
</template>

<script>
import { Container, Draggable } from "vue-dndrop";
import { applyDrag } from "@/helpers/applyDrag.js";
export default {
    components:{
        Container,
        Draggable,
    },
    beforeMount() {
        this.answer = [...this.question.answers]
    },
    data(){
        return{
            answer: []
        }
    },
    props: {
        question:{
            type: Object,
            required: true
        }
    },
    methods: {
        onDrop(dropResult) {
            this.answer = applyDrag(this.answer, dropResult);
            console.log(this.answer)
        },
    },
    watch:{
        answer(val){
            console.log(val.join().toLowerCase().trim(), this.question.rightAnswer.join().toLowerCase().trim())
            if(val.join().toLowerCase().trim()==this.question.rightAnswer.join().toLowerCase().trim()){
                this.flag=true
                console.log('true')
                this.$emit('questionAnswer')
            }
        }
    }
}
</script>


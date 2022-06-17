<template>
    <div>
        <Header title='Создать'/>
        <v-main class="pa-2 mt-4">
            <div @click="$router.go(-1)" class="mb-4">
                <v-icon large>
                    mdi-arrow-left
                </v-icon>
            </div>
            <v-text-field solo label="Название"></v-text-field>
            <div class="text-h5">Описание</div>
            <v-card class="mt-2 mb-4">
                <wysiwyg v-model="quest.description"/>
            </v-card>
            <ImageInput @change="setImage" :background="background"/>
            <div class="mt-4 mb-8 d-flex align-center justify-space-between">
                <div class="text-h5">Этапы</div>
                <v-btn fab small color="success">
                    <v-icon>mdi-shuffle</v-icon>
                </v-btn>
            </div>
            <Stage 
                v-for="(item, idx) in quest.stages" 
                class="mb-7" 
                :stage="item" 
                :idx="idx" 
                :key="idx"
                @remove="removeStage(idx)"
                @createQR="createQR(idx)"
                @createText="createText(idx)"
                @createTest="createTest(idx)"
                @createMap="createMap(idx)"
            />
            <Add class="mt-4">
                <v-list>
                    <v-list-item-group>
                        <v-list-item @click="addStage(item)" v-for="item in types" :key="item" color="primary">
                            <v-list-item-title>{{item}}</v-list-item-title>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </Add>
        </v-main>
    </div>
</template>

<script>
import Header from '~/components/UI/Header.vue'
import Search from '~/components/UI/Search.vue'
import Quest from '~/components/Quest.vue'
import Add from '~/components/UI/Add'
import Stage from '~/components/create/Stage'
import ImageInput from '~/components/UI/ImageInput'
import { mapState } from 'vuex'
export default {
    data(){
        return{
            background: '',
            types:[
                'Текст',
                'Видео',
                'QR',
                'Карта',
                'Тест'
            ],
            quest:{
                title: '',
                image: '',
                description: '',
                stages: [
                    {
                        title: 'Вступительное видео',
                        type: 'Видео',
                        url: 'https://youtube.com/watch?someuriCode'
                    },
                    {
                        title: 'Знакомство',
                        type: 'Текст',
                        url: 'https://youtube.com/watch?someuriCode'
                    },
                    {
                        type: 'Тест',
                        title: 'Пройди этот тест',
                        questions: [
                            {
                                contain: 'При чём здесь ёжики?',
                                answers: [
                                    'Смешарики',
                                    'Лошарики',
                                    'Кикорики'
                                ],
                                type: 'Множественный выбор',
                                rightAnswer: ['Смешарики']
                            },
                            {
                                contain: 'Какие размеры у объекта?',
                                answers: [
                                    'Да',
                                    'нет',
                                ],
                                type: 'Выбор',
                                rightAnswer: ['Да']
                            },
                            {
                                contain: 'Оказавшись перед Путиным, что вы ему скажете?',
                                answers: [],
                                type: 'Вписать ответ',
                                rightAnswer: ['Ненавижу вас']
                            },
                            {
                                contain: 'Расставьте в верно порядке',
                                answers: [
                                    '1000',
                                    '2000',
                                    '3000'
                                ],
                                type: 'Расположить по порядку',
                                rightAnswer: ['1000', '2000', '3000']
                            }
                        ]
                    },
                    {
                        title: 'Дойди до ручки',
                        type: 'Карта',
                        coords: {
                            lat: 21.2323, 
                            attitude: 121.12
                        }
                    },
                ]
            }
        }
    },
    components: {
        Header,
        Search,
        Quest,
        Add,
        ImageInput,
        Stage
    },
    methods: {
        search(e){
            console.log(e)
        },
        setImage(e){
            this.quest.image = e
            let reader = new FileReader();
            reader.readAsDataURL(e);
            reader.onload = function () {
                this.background = reader.result
            }.bind(this);
            console.log(this.quest.image)
        },
        createTest(id){
            this.$store.commit('create/setCurrentStage', this.quest.stages[id])
            this.$router.push(`/create/test/${id}`)
        },
        createText(id){
            this.$store.commit('create/setCurrentStage', this.quest.stages[id])
            this.$router.push(`/create/text/${id}`)
        },
        createMap(id){
            this.$store.commit('create/setCurrentStage', this.quest.stages[id])
            this.$router.push(`/create/map/${id}`)
        },
        createQR(id){
            this.$store.commit('create/setCurrentStage', this.quest.stages[id])
            this.$router.push(`/create/QR/${id}`)
        },
        addStage(type){
            this.quest.stages.push( 
                {
                    title: `Этап ${this.quest.stages.length+1}`,
                    type
                }
            )
        },
        removeStage(idx){
            this.quest.stages.splice(idx, 1)
        }
    },
    computed: {
        ...mapState('create', ['createdQuests'])
    }
}
</script>

<style>
  
</style>



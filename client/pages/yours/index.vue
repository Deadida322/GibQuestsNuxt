<template>
    <div>
        <Header title='Ваши квесты'/>
        <v-main class="pa-2 mt-4">
            <Search :placeholder="'Найти среди своих'" @search="search"/>
            <Quest edit v-for="(item, key) in createdQuests" :key="key" :item="item"/>
            <Add @click="$router.push(`/create/${createdQuests+1}`)" class="mt-5"/>
        </v-main>
    </div>
</template>

<script>
import Header from '~/components/UI/Header.vue'
import Search from '~/components/UI/Search.vue'
import Quest from '~/components/Quest.vue'
import Add from '~/components/UI/Add'
import { mapState } from 'vuex'
export default {
    components: {
        Header,
        Search,
        Quest,
        Add
    },
    methods: {
        search(e){
            console.log(e)
        }
    },
    computed: {
        ...mapState('create', ['createdQuests'])
    }
}
</script>


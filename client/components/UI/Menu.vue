<template>
    <v-list>
      <v-divider/>
      <v-list-item active-class="activeLink" to="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Главная</v-list-item-title>
      </v-list-item>
      <v-list-group prepend-icon="mdi-account">
        <template v-slot:activator>
          <v-list-item-title>Создать квест</v-list-item-title>
        </template>
        <v-list-item active-class="activeLink" to="/#directions" class="ml-6">
          <v-list-item-icon>
            <v-icon small>mdi-ballot</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Создать новый</v-list-item-title>
        </v-list-item>
        <v-list-item active-class="activeLink" to="/abiturients#rules" class="ml-6">
          <v-list-item-icon>
            <v-icon small>mdi-archive</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Ваши квесты</v-list-item-title>
        </v-list-item>
        
      </v-list-group>
      <v-list-group
        prepend-icon="mdi-account-tie"
      >
        <template v-slot:activator>
          <v-list-item-title>Пройти квест</v-list-item-title>
        </template>
        <v-list-item nuxt active-class="activeLink" to="/labs" class="ml-6">
          <v-list-item-icon>
            <v-icon small>mdi-flask</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Найти</v-list-item-title>
        </v-list-item>
        <v-list-item nuxt active-class="activeLink" to="/ideas" class="ml-6">
          <v-list-item-icon>
            <v-icon small>mdi-lightbulb-variant</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Прогресс</v-list-item-title>
        </v-list-item>
        <v-list-item nuxt active-class="activeLink" to="/projects" class="ml-6">
          <v-list-item-icon>
            <v-icon small>mdi-file-document-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Пройденные</v-list-item-title>
        </v-list-item>
      </v-list-group>
    </v-list>
</template>

<script>
export default {
    data(){
        return{
            group: null
        }
    }
}
</script>


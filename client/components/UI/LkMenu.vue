<template>
    <v-menu
        bottom
        offset-y
        transition="slide-y-transition"
    >
        <template v-slot:activator="{ on, attrs }">
            <v-btn
                icon
                v-bind="attrs"
                v-on="on"
            >
                <v-avatar color="blue">ЛК</v-avatar>
            </v-btn>
        </template>
        <v-list>
            <v-list-item-group>
                <v-list-item to="/login" color="primary">
                    <v-list-item-title>Вход</v-list-item-title>
                </v-list-item>
                <v-list-item  to="/register" color="error" class="primary--text">
                    <v-list-item-title prepend-icon="mdi-delete">Регистрация</v-list-item-title>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-menu>
</template>

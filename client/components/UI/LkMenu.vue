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
                <v-list-item color="primary">
                    <v-list-item-title>Личный кабинет</v-list-item-title>
                </v-list-item>
                <v-list-item color="error" class="error--text">
                    <v-list-item-title prepend-icon="mdi-delete">Выйти</v-list-item-title>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-menu>
</template>

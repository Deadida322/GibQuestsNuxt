<template>
    <div>
        <Header class="z-index-100" title='Отметить точку'/>
        <v-main class="pa-2 mt-4">
            <div @click="$router.go(-1)" class="mb-4">
                <v-icon large>
                    mdi-arrow-left
                </v-icon>
            </div>
            <div class="map-container">
                <l-map :zoom="zoom" :center="center" ref="map">
                    <l-tile-layer
                        :url="url"
                        :attribution="attribution"
                    />
                    <l-marker :lat-lng="center">
                        <l-tooltip 
                            :options="{ permanent: true, interactive: true }">
                            <div>
                                Вы здесь
                            </div>
                        </l-tooltip>
                    </l-marker>
                </l-map> 
            </div>
            <div class="text-body-1 mt-3">
                Широта
            </div>
            <v-text-field readonly solo class="mt-2" v-model.number="lat"/>
            <div class="text-body-1 mt-1">
                Долгота
            </div>
            <v-text-field readonly solo class="mt-2" v-model.number="long"/>
            <v-btn class="w-100" color="primary">сохранить</v-btn>
        </v-main>
    </div>
</template>

<script>
import Header from '~/components/UI/Header'
import { latLng } from "leaflet";
import { Icon } from 'leaflet';

export default {
    components: {
        Header
    },
    data(){
        return{
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            attribution:
                '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            lat: 0,
            long: 0,
            zoom: 16,
            geo: null,
            showPosition: true
        }
    },
    beforeMount(){
        function success({ coords }) {
            const { latitude, longitude } = coords
            const position = [latitude, longitude]
            this.lat = position[0]
            this.long = position[1]
            console.log(position)
        }
        success=success.bind(this)
        function error({ message }) {
            console.log(message) 
        }
        navigator.geolocation.getCurrentPosition(success, error, {
            enableHighAccuracy: true
        })
        this.$nextTick(()=>{
            this.geo = navigator.geolocation.watchPosition(success, error, {
                enableHighAccuracy: true
            })
        })
        delete Icon.Default.prototype._getIconUrl;
        Icon.Default.mergeOptions({
            iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
            iconUrl: require('leaflet/dist/images/marker-icon.png'),
            shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
        });
    
        
    },
    computed:{
        center(){
            return latLng(this.lat, this.long)
        }
    }
}
</script>

<style lang="scss" scoped>
    .map-container{
        height: 300px !important;
        overflow: hidden;
        z-index: 0 !important;
        div{
            z-index: 0 !important;
        }
    }
    .w-100{
        width: 100%
    }
    .z-index-100{
        position: relative;
        z-index: 100 !important;
    }
</style>



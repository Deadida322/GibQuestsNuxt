<template>
    <iframe @mouseover="play()" width="100%" height="300" :src="computedSrc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  
</template>

<script>
export default {
    mounted(){
        window.focus()
    },
    props:{
        url:{
            type: String,
            required: true
        }
    },
    methods: {
        play(e){
            const ctx = this
            setTimeout(()=>{ctx.$emit('stageComplete')}, 7000)
        }
    },
    computed:{
        computedSrc(){
            const viewCode = this.url.split('=')[1]
            return `https://www.youtube.com/embed/${viewCode}`
        }
    }
}
</script>

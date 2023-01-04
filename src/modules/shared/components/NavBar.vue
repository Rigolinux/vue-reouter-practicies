<template>
  <div>
    <CustomLink class="element"
    v-for="link in links"
    :key="link.name"
    :link="link"
    />
   <!--  <router-link class="element" to="/">Home </router-link>
    <router-link class="element" :to="{name:'PokemonPage',params:{id:'18'}}">Pokemon id </router-link>
    <router-link class="element" to="/about">About </router-link>
 -->
  </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
    components:{
       CustomLink: defineAsyncComponent(()=>import('./CustomLink.vue')) // CustomLink
    },
    name: 'NavBar',
    data(){
        return{
            links:[
                {name:'PokeHome',to:'Home'},
                {name:'Pokemon-id',to:'PokemonPage',id : 18},

                {name:'About',to:'pokeAbout'},
                {name:'Characters',to:'Characters'},
                {name:'dbAbout',to:'dbAbout'},
                {name:'Google',to:'https://www.google.com'}
            ]
        }
    }
}


</script>


<style scoped>
.div{
    padding: 0 30px;

}
.element{
    font-weight: bold;
    color: #2c3e50;
    margin: 0 10px;
}
div .router-link-active{
    color: #42b983;
}
</style>
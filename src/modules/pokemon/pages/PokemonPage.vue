<template>
  <h1>Pokemon Page {{ id }}</h1>
  <div :v-if="pokemon">
    <h2>{{ pokemon.name }}</h2>
    <img :src="pokemon.sprites.front_default" alt="texto">
  </div>
</template>

<script>
export default {
  props:{
    id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      pokemon: null
    }
     
    },
  created() {
    /* const {id} = this.$route.params
    this.id = id */
    this.getPokemon()
  },
  methods: {
    async getPokemon() {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`).then(res => res.json())
        
        this.pokemon = response;
      
      console.log(this.pokemon)
      } catch (error) {
        this.$router.push('/')
      }
      
    }
  },
  watch: {
    id() {
     
      this.getPokemon()
    }
  }
}
</script>

<style>

</style>
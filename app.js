console.log('app.js running')

new Vue({
  el: '#app',
  data: {
    characters: {
      player: {
        name: 'Player',
        healthRemaining: 100,
        maxHealth: 100,
      },
      monster: {
        name: 'Monster',
        healthRemaining: 100,
        maxHealth: 100,
      }
    }
  },
  methods: {
    takeDamage: function(character, amount){
      this.characters[character].healthRemaining -= amount
    },
    healPlayer: function(amount){
      this.characters.player.healthRemaining += amount
    }
  }
})
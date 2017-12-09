console.log('app.js running')

new Vue({
  el: '#app',
  data: {
    playing: false,
    characters: {
      player: {
        name: 'Player',
        healthRemaining: 100,
        maxHealth: 100,
        attackPower: 20,
        imageSrc: './knight.png'
      },
      monster: {
        name: 'Monster',
        healthRemaining: 100,
        maxHealth: 100,
        attackPower: 30,
        imageSrc: './monster.png'
      }
    }
  },
  methods: {
    takeDamage: function(character, amount){
      this.characters[character].healthRemaining -= amount
    },
    healPlayer: function(amount){
      this.characters.player.healthRemaining += amount
    },
    surrender: function(){
      this.playing = false
    },
    calculateAttackPoints: function(attackPower){
      return Math.round(Math.random() * attackPower)
    },
    handleAttack: function(){
      let monsterAttack = this.calculateAttackPoints(this.characters.monster.attackPower)
      let playerAttack = this.calculateAttackPoints(this.characters.player.attackPower)
    }
  },
  calculated: {
    
  }
})
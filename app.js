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
        healthRemaining: 200,
        maxHealth: 200,
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
      if (this.characters.player.healthRemaining > this.characters.player.maxHealth){
        // Dont allow health over max
        this.characters.player.healthRemaining = this.characters.player.maxHealth
      }
    },
    surrender: function(){
      this.playing = false
      this.characters.player.healthRemaining = this.characters.player.maxHealth
      this.characters.monster.healthRemaining = this.characters.monster.maxHealth

    },
    calculateAttackPoints: function(attackPower){
      return Math.round(Math.random() * attackPower)
    },
    handleAttack: function(){
      let monsterAttack = this.calculateAttackPoints(this.characters.monster.attackPower)
      let playerAttack = this.calculateAttackPoints(this.characters.player.attackPower)
      this.takeDamage('player', monsterAttack)
      this.takeDamage('monster', playerAttack)
    },
    handleHeal: function(){
      let monsterAttack = this.calculateAttackPoints(this.characters.monster.attackPower)
      let playerHeal = 15 + Math.round(Math.random()*20)
      this.healPlayer(playerHeal)
      this.takeDamage('player', monsterAttack)
    },
    handleSpAttack: function(){
      let monsterAttack = this.calculateAttackPoints(this.characters.monster.attackPower) * 2
      let playerAttack = this.calculateAttackPoints(this.characters.player.attackPower)
    }
  },
  // computed: {
  //   characters: {
  //     player: {
  //       healthPercent: function(){
  //         return this.characters.player.healthRemaining / this.characters.player.maxHealth * 100
  //       }
  //     },
  //     monster: {
  //       healthPercent: function(){
  //         return this.characters.monster.healthRemaining / this.characters.monster.maxHealth * 100
  //       }
  //     }
  //   }
  // }
})
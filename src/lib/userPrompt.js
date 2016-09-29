import Player from './player'
import Hand from './hand'

const readlineSync = require('readline-sync');

let users = readlineSync.question('How many Players?: ')

let buildPlayers = () => {
  const players = []

  for (let index = 0; index < users; index++) {
    let playerName = readlineSync.question(`Player ${index+1}, What is your name?: `)
    let playerWallet = readlineSync.question(`${playerName}, How much money do you want to start with?: $`)
    players.push(new Player(playerName, playerWallet, new Hand()))
  }
  players.push(new Player('Dealer', 10000, new Hand()))
  return players
}

let chooseDecks = () => {
  let deckChoice = readlineSync.question(`How many decks would you like to play with?: `)
  return deckChoice
}

let hitOrStay = (playerName) => {
  if (readlineSync.keyInYN(`${playerName}, Do you want a HIT? (press y for YES): `)) {



module.exports = { buildPlayers, chooseDecks }

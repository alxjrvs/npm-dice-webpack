import $ from 'jquery'
import roll from './dice.js'

let onLoad = () => { 
  let sides = 20;
  let numOfDice = 1;
  let result = roll(sides, numOfDice);
  let resultString = `You rolled a ${sides}-sided Die ${numOfDice} times! You rolled a ${result}!`;
  $('#roll-result').text(resultString);
};

$(document).ready(onLoad);

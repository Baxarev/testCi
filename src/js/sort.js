export function bySorted(players){
  return players.sort((a, b) => a.health < b.health ? 1 : -1);
}

console.log(bySorted([
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
]))
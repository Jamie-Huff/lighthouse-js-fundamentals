const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];



const finalPosition = function(moves) {
  let holder;
  let grid = [0,0]

  for (let move in moves) {
    move = moves[move]
    if (move === 'north') {
      let holder = grid[1]
      holder++
      grid[1] = holder
      console.log(grid)
    } else if (move === 'south') {
      let holder = grid[1]
      holder--
      grid[1] = holder
      console.log(grid)
    } else if (move === 'west') {
      let holder = grid[0]
      holder--
      grid[0] = holder
      console.log(grid)
    } else if (move === 'east') {
      let holder = grid[0]
      holder++
      grid[0] = holder
      console.log(grid)
    }
    
  }
  return grid
}

finalPosition(moves);

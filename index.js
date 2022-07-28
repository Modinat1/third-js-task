let grid = 8;

for (let i = 0; i < grid; i++) {
  let line = '';
  for (let j = 0; j < grid; j++) {
    line += ((i + j) % 2) ? ' ' : '#';
  }
  console.log(line);
}
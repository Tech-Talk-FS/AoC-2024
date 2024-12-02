// split string and put the first in left array and the second in right array. 
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'puzzle.txt');

const sortArrays = (leftArr,rightArr) => {
    const leftAsc = leftArr.sort((a, b) => a - b)
    const rightAsc = rightArr.sort((a, b) => a - b)

    let total = 0 
    for (let i = 0; i < leftAsc.length; i++) {
        const left = leftAsc[i];
        const right = rightAsc[i];
        // makes the negative numbers into a positive distance
        const distance = Math.abs(left - right)
        // sets the total distance
        total += distance
    }
    console.log("total", total);
}

try {
  // Read the file and grab the numbers to work with
  const data = fs.readFileSync(filePath, 'utf8');

  // Grabs puzzle.txt and splits them on new line
  const lines = data.trim().split('\n');

  // Make the left and right arrays
  const left = lines.map(line => {
    const numbers = line.split(' ');
    return parseInt(numbers[0]);
  });

  const right = lines.map(line => {
    const numbers = line.split(' ');
    return parseInt(numbers[1]);
  });

  sortArrays(left,right)
} catch (err) {
  console.error('Error reading the file:', err);
}

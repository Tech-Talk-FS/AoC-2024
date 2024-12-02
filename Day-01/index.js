// split string and put the first in left array and the second in right array. 
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'puzzle.txt');

const sortArrays = (leftArr,rightArr) => {
    console.log('Left Array:', leftArr.length = 10); // Set to 10 for speed
    console.log('Right Array:', rightArr.length = 10 );
    const leftAsc = leftArr.sort((a, b) => a - b)
    const rightAsc = rightArr.sort((a, b) => a - b)
    console.log('Left Array:', leftAsc); // Set to 10 for speed
    console.log('Right Array:', rightAsc);

    // const makePairs = leftArr.map((id,index)=>{
    //     return [id, rightArr[index]]
    // }).sort((a,b)=> a[0]- b[0])

    // console.log("here", makePairs )
}

try {
  // Read the file and grab the numbers to work with
  const data = fs.readFileSync(filePath, 'utf8');

  // Grabs puzzle.txt and splits them on new line
  const lines = data.trim().split('\n');

  // Make the left and right arrays
  // TODO: use .map to do it all at once or boomer loop
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

// sort arrays accending 
// for each one on that index add them together

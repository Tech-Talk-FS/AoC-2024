// Calculate a total similarity score by adding up each number in the left list 
// after multiplying it by the number of times that number appears in the right list.

// split string and put the first in left array and the second in right array. 
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'puzzle1.txt');
const data = []
const similarity = (leftArr,rightArr) => {
      const duplicates = {};
      for (const item1 of leftArr) {
        console.log("start");
        
        for (const item2 of rightArr) {
          
          // console.log("boom");

          if (item1 === item2) {
            console.log("1",item1);
            console.log("2",item2);
            // counts[num] = (counts[num] || 0) + 1;
            duplicates[item1] += item2
            // console.log(">>>",duplicates);
            
            // duplicates.push(item1);
            break; // Move to the next element in arr1
          }
        }
      }
      return duplicates;
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

  const print = similarity(left,right)
  console.log(print.length);
  

} catch (err) {
  console.error('Error reading the file:', err);
}

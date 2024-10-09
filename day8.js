/*
DAY 8;

uncompress
Write a function, uncompress, that takes in a string as an argument.
 The input string will be formatted into multiple groups according to the following pattern:

<number><char>

for example, '2c' or '3a'.
The function should return an uncompressed version of the string where
 each 'char' of a group is repeated 'number' times consecutively. 
 You may assume that the input string is well-formed according to the previously mentioned pattern. */


const uncompress = (s) => {

    const numbers = ["0","1","2","3","4","5","6","7","8","9"];
  
    let result = [];
  
    for(let i = 0 , j = 0; i < s.length ; i++){
      while(numbers.includes(s[i])){
        i++;
      }
      let num = s.slice(j,i);
      result.push(s[i].repeat(Number(num)));
      i++;
      j = i;
    }
    
    console.log(result);
    return result.join("");
    
  };
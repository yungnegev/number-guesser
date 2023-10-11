export function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function isOdd(num) {
  return num % 2 !== 0;
}

export function caseByNumber(number, wordArray){
    if (number % 100 >= 11 && number % 100 <= 14) {  
        return wordArray[2] 
    }
    if (number % 10 === 1) {                         
        return wordArray[0]
    }
    if (number % 10 >= 2 && number % 10 <= 4) {      
        return wordArray[1]
    }
    return wordArray[2]                              
}
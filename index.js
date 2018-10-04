let katzDeliLine = [];
 
let  numCustomers = 0

const takeANumber = (line) => {
 
  numCustomers += 1
  
  line.push(numCustomers)
  return `Welcome, ${numCustomers}. Please, listen for ${numCustomers} to be called.`
}

// You are number 37.

const nowServing = (katzDeliLine) => {
  if (katzDeliLine[0] === undefined){
    return 'There is nobody waiting to be served!'
  }

  let frontOfLine = katzDeliLine[0]
  katzDeliLine.shift()
  return `Currently serving ${frontOfLine}.`
}

const currentLine = (katzDeliLine) => {
 let ans = 'The line is currently:';
 
  if(katzDeliLine.length === 0){
    return 'The line is currently empty.'
  }
  else{
    
    for(let i = 0; i < katzDeliLine.length; ++i){
      let placeAndName = ' ' + (i + 1) + `. ${katzDeliLine[i]},`
      ans += placeAndName
      
    }
  }
  return ans.slice(0, -1)
}
  

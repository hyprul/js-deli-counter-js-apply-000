
var katzDeliLine = [];
var numpeopleinline =0;
var numserved =0;

function takeANumber(katzDeliLine){
  //katzDeliLine.push(name)
  numpeopleinline +=1
  katzDeliLine.push(numpeopleinline)
  return `Welcome. You are number ${numpeopleinline} in line.`
}

function nowServing(katzDeliLine){
  if(numserved === numpeopleinline){
    
    return "Everyone got served."
  
  }
  
  if(numpeopleinline > 0){
    numserved+=1
    return `Currently serving ${katzDeliLine[numserved-1]}`
  }
  
  else return "There is nobody waiting to be served!"
 
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "The line is currently empty."
  }
  
    var s = "The line is currently: "
    
    for(let i= 0; i < katzDeliLine.length; i++){
      s+=`${[i+1]}. ${katzDeliLine[i]}`;
      if(i<katzDeliLine.length-1){
      s+= ", "
      }
    }
    return s
}
//1
function areBothSame(x,y){
  if(x == y){
      return (true)
  } else {
      return (false)
  }
}

//2
function areBothEqual(x,y){
  if(x === y){
      return true
  } else {
      return false
  }
}

//3
function areAllFourEqual(a,b,c,d){
  if((a === b) && (c === d)){
      return true
  } else{
      return false
  }
}


//4
function areAllFourSame(a,b,c,d){
  if((a == b) && (c == d)){
      return true
  } else{
      return false
  }
}

//5
function areAllFourSameOrEqual(a,b,c,d){
  if((a === b) && (a === c) & (a === d)){
      return "equal"
  } else if((a == b) && (c == d)){
      return "same"
  } else{
      return null
  }
}


console.log(areBothSame("5",2))
console.log(areBothEqual("5",5))
console.log(areAllFourEqual(2,"2",2,"2"))
console.log(areAllFourSame("2","2","2",2))
console.log(areAllFourSameOrEqual(2,2,"2","2"))
function whereIsMyFood(fridge, item) {
  for(let i in fridge)
  {// search for the item in the fridge
       if(fridge[i]===item)
// return the index of it an print it in console
        { return console.log(i); }
       // else
       //  { return console.log(-1) }
         
  }
}
whereIsMyFood(['a','b','c','d','a'],'d');


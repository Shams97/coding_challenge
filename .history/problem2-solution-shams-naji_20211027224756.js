function validateRecipeWithQuantity(fridge, ingredients) {
  
  Object.keys(fridge).map((item,index) => {

    for(let i in ingredients)
        { 
          {  if(ingredients[i] === index)
               return console.log("true")
            
            else return console.log("false")
          }
        }
  })    
  
    
  }
  
  validateRecipeWithQuantity({'tomato': 1, 'onion': 2,'lettuce':4},{'tomato': 1, 'onion': 1})
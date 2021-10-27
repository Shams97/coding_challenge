function validateRecipeWithQuantity(fridge, ingredients) {
  
  Object.entries(fridge).map(item => {
       for(let i in ingredients)
        { 
          // if(ingredients[i] === fridge[item])
                console.log("damn it", item)
  
          // console.log(fridge[0][item])
          // return true
        }
  })    
    
  }
  
  validateRecipeWithQuantity({'tomato': 1, 'onion': 2,'lettuce':4},{'tomato': 1, 'onion': 1})
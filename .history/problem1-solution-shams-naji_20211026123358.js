function validateRecipe(fridge, ingredients) {
    for(let index in fridge)
      {
        for(let i in ingredients)
          {
    // Check on the meal to see if the match what in the fridge or not 
              if(ingredients[i] === fridge[index])
                return console.log("true")
            
          else return console.log("false")
          }
      }
    }
    
validateRecipe(['tomato', 'banana', 'apple', 'onion', 'cucumber','lettuce'],['tomato', 'onion', 'apple'])

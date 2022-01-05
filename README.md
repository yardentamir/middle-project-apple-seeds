#  AppleSeeds Bootcamp Mid Project - Recipe Site

## API LIST

1. Themealdb - Brings one randomize recipe every fetch.

About: An open, crowd-sourced database of Recipes from around the world.

2. Emadam - Brings list of recipes by Ingredients, Name of the Meal, time and number.

About: Edamam organizes the world's food knowledge in one central database and delivers value added services,
such as real-time nutrition analysis and diet-driven meal recommendations.
The company leverages the power of data and technology to help people eat better and live healthier and happier lives.

## PAGES

### login

login and log out popups with buttons

### home

Randomize Recipe per page refresh
categories in accordance with the Randomize Recipe Api

#### Fetch:
Using the end of the uri value from the fetched data for the uniq id: http://www.edamam.com/ontologies/edamam.owl#recipe_${thisIsTheId}

### Recipe

Information about the recipe: Ingredients, Nutrients, Health Tags, Calories, Dish Type, Meal Type and Total Time.

#### Fetch:
Using the uniq to fetch the current Recipe.

#### show data to the screen:
Using loops throughout the objects by their entries and map thouth them also filter only the relevant information.

example:
```
  const renderIngredientsTableRows = () => {
    return fetchedData[0].recipe.ingredients.map((val, index) => {
      return (
        <tr key={val + index}>{Object.entries(filterObjByKey(val, keysFilterArrIngredients)).map((valArrKeyValue, index) => {
          return valArrKeyValue[0] === "image" ? 
          <td key={valArrKeyValue[1] + index}><img src={valArrKeyValue[1]} alt={valArrKeyValue[1]} /></td> 
          : <td key={valArrKeyValue[1] + index}>{valArrKeyValue[1]}</td>
        })}
        </tr>
      )
    })
  }
  ```
### search



**Note: this is a one-way operation. Once you `eject`, you can't go back!**

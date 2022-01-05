#  AppleSeeds Bootcamp Mid Project - Recipe Site

## PROJECT LINK

[RecipeSite](https://yarden-tamir-apple-seeds-middle-project.netlify.app)

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
    return ingredientsArray.map((val, index) => {
      return (
        <tr key={val}>{Object.entries(filterObjByKey(val, keysFilterArrIngredients)).map((valArrKeyValue, index) => {
          return <td key={valArrKeyValue[1]}>{valArrKeyValue[1]}</td>
        })}
        </tr>
      )
    })
  }
  
  // utility function
  export function filterObjByKey(objToFilter, onlyTheseKeysArr) {
  const filtered = Object.keys(objToFilter)
    .filter((key) => onlyTheseKeysArr.includes(key))
    .reduce((obj, key) => {
      obj[key] = objToFilter[key];
      return obj;
    }, {});

  return filtered;
}
  ```
### search

Two ways to search:
1. search by Meal Name - A Full String. Example: "Pizza".
2. search by Ingredients - List of Strings, can choose from dropdown list or by typing. Example: "Eggs,Beed,Lemon".

#### Fixing the spam clicking problem in order to prevent unnecessary api fetches by using a utility dobounce function:

```
// utility function
export function debounce(func, duration) {
  let timeout;
  return function (...args) {
    const effect = () => {
      timeout = null;
      return func.apply(this, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(effect, duration);
  };
}
  ```
  
  ### favorites
  
  checks LocalStorage and print all the favorites.
  
  #### handel localStorage:
  when user clicks on heart symbol that in the recipe:
  1. adding/removing to/from localStorage
  2. toggle background color: gray/red

## FUTURE PLANS
1. Connect to user data
2. Add more search options
3. Add Youtube videos
4. Use new styling and animations features such as Styled Components, Matirial UI, etc...

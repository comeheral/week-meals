import { useState, useEffect } from 'react'
import { mealsData } from '../mealsData'

function Settings(){
  const [mealsList, setMealsList] = useState(mealsData);
  const [userInput, setUserInput] = useState("");

  function addItem(e){
    e.preventDefault();
    let newList = [...mealsList];
    newList = [...newList, {name: userInput}];
    setMealsList(newList);
    setUserInput("");
  }

  return (
    <>
      {mealsList.map((meal, index) => (
        <p key={`meal-${index}`}>{meal.name}</p>
      ))}
      <form onSubmit={addItem}>
        <input onChange={(e) => setUserInput(e.target.value)} type="text" value={userInput}/>
        <button type="submit">Add an item</button>
      </form>
    </>
  )
}

export default Settings;
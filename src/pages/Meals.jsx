import { useState } from 'react'
import { mealsData } from '../mealsData'
import '../scss/pages/Meals.scss';

import MealItem from '../components/MealItem';


function Settings(){
  const [mealsList, setMealsList] = useState(mealsData);
  const [userInput, setUserInput] = useState("");

  function addItem(e){
    e.preventDefault();
    if(userInput == ""){ return }

    let newList = [...mealsList];
    newList = [...newList, {name: userInput}];
    setMealsList(newList);
    setUserInput("");
  }

  function deleteItem(e){
    let index = parseInt(e.target.closest('.meal').getAttribute('data-index'));
    let updatedList = [...mealsList];
    updatedList.splice(index,1);
    setMealsList(updatedList)
  }

  return (
    <>
      <h1 className="title">Liste des plats</h1>
      {mealsList.map((meal, index) => (
        <MealItem key={`meal-${index}`} name={meal.name} index={index} canDelete={true} onDelete={deleteItem} />
      ))}
      <form className="add-form" onSubmit={addItem}>
        <input className="add-form__input" onChange={(e) => setUserInput(e.target.value)} type="text" value={userInput} placeholder="Ajouter un plat"/>
        <button className="add-form__button" type="submit">
          <svg viewBox="0 0 32 32" width="32px" height="32px"><path d="M28,14H18V4c0-1.104-0.896-2-2-2s-2,0.896-2,2v10H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h10v10c0,1.104,0.896,2,2,2  s2-0.896,2-2V18h10c1.104,0,2-0.896,2-2S29.104,14,28,14z"/></svg>
        </button>
      </form>
    </>
  )
}

export default Settings;
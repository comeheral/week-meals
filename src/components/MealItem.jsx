import '../scss/components/MealItem.scss'

function MealItem(props){
  return (
    <div className="meal">
      <p className="meal__name">{props.name}</p>
    </div>
  )
}

export default MealItem;
import { useState } from 'react'

import '../scss/components/MealItem.scss'

function MealItem(props){
  const [checked, setChecked] = useState(false);

  return (
    <div className={`meal ${checked ? 'meal--checked' : ''}`} data-index={props.index} onClick={() => setChecked(!checked)}>
      <p className="meal__name">{props.name}</p>
      {props.canDelete && (
        <div className="meal__delete" onClick={props.onDelete}>
          <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
        </div>
      )}
    </div>
  )
}

export default MealItem;
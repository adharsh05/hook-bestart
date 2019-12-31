import React, { Fragment, useState } from 'react';

import useDataApi from 'use-data-api';

function App(){
    const [query,  setQuery] = useState('')
}



// import React from 'react'
// import { useSelector } from 'react-redux'
// import { createSelector } from 'reselect'

// const selectNumOfDoneTodos = createSelector(
//   state => state.todos,
//   todos => todos.filter(todo => todo.isDone).length
// )

// export const DoneTodosCounter = () => {
//   const NumOfDoneTodos = useSelector(selectNumOfDoneTodos)
//   return <div>{NumOfDoneTodos}</div>
// }

// export const App = () => {
//   return (
//     <>
//       <span>Number of done todos:</span>
//       <DoneTodosCounter />
//     </>
//   )
// }

/*
import React from 'react'
import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'

const selectNumOfTodosWithIsDoneValue = createSelector(
  state => state.todos,
  (_, isDone) => isDone,
  (todos, isDone) => todos.filter(todo => todo.isDone === isDone).length
)

export const TodoCounterForIsDoneValue = ({ isDone }) => {
  const NumOfTodosWithIsDoneValue = useSelector(state =>
    selectNumOfTodosWithIsDoneValue(state, isDone)
  )

  return <div>{NumOfTodosWithIsDoneValue}</div>
}

export const App = () => {
  return (
    <>
      <span>Number of done todos:</span>
      <TodoCounterForIsDoneValue isDone={true} />
    </>
  )
}
*/
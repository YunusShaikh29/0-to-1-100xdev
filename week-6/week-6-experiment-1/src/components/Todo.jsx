/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

function Todo({title, description}) {
  return (
    <div>
        <h1>{title}</h1>
        <h3>{description}</h3>
    </div>
  )
}

export default Todo
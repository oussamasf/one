import React from 'react'

export default function CardList({list} ) {

  return (
    <div>
      {list.map((el) => (
        <h1 key={el.id}>{el.name}</h1>
      ))}    
    </div>
  )
}

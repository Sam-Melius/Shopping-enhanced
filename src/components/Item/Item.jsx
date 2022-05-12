import { useState } from 'react';

export default function Item({ item }) {

  let content;
  content = ( 
      <p>{item.text}</p> )

  return (
    <div>
    {content}
    </div>
  )
}

import React, { useEffect, useState } from 'react'

const List = ({getItems}) => {

    const [items, setItems] = useState([])

    useEffect(()=>{

 
      setItems(getItems())
      console.log("Updating Items....")
   
    }, [getItems])
   
   return items.map((item)=><div key={item}>{item}</div>)
  return (
    <>
 
     
  
    
    
    </>
  )
}

export default List

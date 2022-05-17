import { Marker } from '@react-google-maps/api'
import React, { useState } from 'react'
import Popup from './popup'

function Markers({items}) {
    const [toggle, setToggle] = useState(false)
    const locate = {
        lat : items.lat,
        lng: items.long
    }
    const handleClick = (id)=>{
       
 setToggle(true)
    }
  return (
    <span>
<Marker onFocus={()=>{handleClick(items.id)}}  key={items.id} position={locate}/>


    </span>
  )
}

export default Markers
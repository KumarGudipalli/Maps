import logo from './logo.svg';
import axios from "axios"
import './App.css';
import {GoogleMap,Marker,useJsApiLoader} from "@react-google-maps/api"
import React ,{useEffect, useState}from "react"
import Markers from './Markers';
import Button  from "@mui/material/Button"

import BasicModal from './popup';
const containerStyle = {
  width: '1000px',
  height: '600px'
};



function App() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyASEGaNW1IUGUoq8zSqLGeEZmb9VofJxI8"
  })
  const [lat, setLat] = useState("")
  const [long,setLong] = useState("")
const [data , setData] = useState([])

  useEffect(() => {
   navigator.geolocation.getCurrentPosition((position)=>{
     setLat(position.coords.latitude)
     setLong(position.coords.longitude)

   })

  },[])

  let center = {
    lat : lat,
    lng: long
  }
const userData= []
// window.onload=()=>{
//   userData.push(center)
//   localStorage.setItem("data",JSON.stringify(center))
// }
  useEffect(() => {
    axios.get("http://localhost:8000/Data").then((res)=>{
        setData(res.data);
    }).catch((error)=>{
        console.log(error)
    })
    
    }, [])
    const handleOpen= () =>{
      setToggle(true)
        userData.push(center)
  localStorage.setItem("data",JSON.stringify(center))
    }
  return  isLoaded?    (
  
    <div>
<BasicModal/>
<GoogleMap     mapContainerStyle={containerStyle}
        center={center}
        zoom={10}>

<Marker position={center}/>


{data.map((el)=>{
  return(
    <>
    <Markers items={el}/>
    </>
  )
})}


</GoogleMap>

    </div>
  ): <></>
}

export default App;

import React, { useEffect, useState } from 'react'

const App = () => {
const [degree,setDegree]=useState(0)
  useEffect(()=>{
    if (navigator.geolocation) {
      console.log(
        navigator.geolocation.watchPosition(
          (data) => {
            console.log("first", data.coords);
            setDegree(data.coords.heading);
          },
          (err) => {
            alert(err.message);
          }
        )
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  },[])
  return (
    <div>{degree=== null ? 0 : degree}</div>
  )
}

export default App
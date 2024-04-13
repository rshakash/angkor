import Navbar from '../Components/Navbar'
import {useEffect, useState } from 'react'
import axios from 'axios';
import CropInfoData from '../Components/CropInfoData';


const CropInfo = () => {

  const [cropList, setCropList] = useState([])
  const [cropValue, setCropValue] = useState("")
  const [crop, setCrop] = useState([])

  useEffect(() => {
    axios.get('https://angkor-backend.onrender.com/api/crops')
    .then(res => res.data)
    .then(data => {
      setCropList(data)
    })
  }, [])


  const handle = (e) => {
    e.preventDefault()
    const selectedCrop = cropList.find(crop => crop.crop.name === cropValue)
    setCrop(selectedCrop)
  }

  

  return (
    <div>
      <Navbar />
      <div>
      <form onSubmit={handle}>
        <label>
          Crop Name: 
				<input type="text" name="cropName" value={cropValue} onChange={(e) => setCropValue(e.target.value)}/>
        </label>
        
        <br />
        <button type="submit">Submit</button>
      </form>

      <CropInfoData crop={crop.crop} />
    </div>
    </div>
    
  )
}

export default CropInfo
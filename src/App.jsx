import { useState } from 'react'

import './App.css'
import Header from './components/Header';
import DetailCard from './components/DetailCard';
import SummaryCard from './components/SummaryCard';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


function App() {
  
//const API_KEY = process.env.REACT_APP_API_KEY;
const API_KEY="https://api.openweathermap.org/data/2.5/forecast?"
const KEY="0144cc17992b7456008b67ab943f27b2";
const API_ICON="https://openweathermap.org/img/wn/"


const [noData, setNoData]=useState("No Data Yet");
const [searchTerm, setSearchTerm]=useState("");
const [weatherData, setWeatherData]=useState([]);
const [city, setCity]=useState("Unknow Location");
const [weatherIcon, setWeatherIcon]=useState(`${API_ICON}10n@2x.png`)

const handleSubmit = (e) => {
e.preventDefault()
getWeather(searchTerm)
}

const handleChanged = (input) => {
  const {value} = input.target
  setSearchTerm(value)
} 

const getWeather = async(location)=>{
 setWeatherData([])
 let how_to_search = (typeof location==="string")?`q=${location}`: `lat=${location[0]}&lon=${location[1]}`
 try{
  let res =await fetch(`${API_KEY+how_to_search}&appid=${KEY}&units=metric&cnt=5&exclude=hourly,minutely`)
  let data=await res.json()
  if(data.cod !=200){
    setNoData("location not found")
    return
  }
  setWeatherData(data)
  setCity(`${data.city.name}, ${data.city.country}`)
  setWeatherIcon(`${API_ICON+data.list[0].weather[0]["icon"]}@4x.png`)
 }
 catch(error){
  console.log("Error Encountred:"+error)
 }
}


  return (
   
    <div className="bg-gray-800 flex items-center justify-center w-screem h-screem h-screen ">
      <div className='flex w-3/4 min-h-full rounded-3x1 shadow-lg m-auto bg-gray-100 w-full rounded-3xl'>
        {/*form card section*/}
        <div className='form-container'>
          <div className='flex items-center  justify-center'>
            <h3 className='my-auto mr-auto text-x1 text-green-900 font-bold shadow-md py-1 px-3 rounded-md bg-white bg-opacity-30'>
              Forescast
            </h3>
           <div className='flex p-2 text-gray-100 bg-gray-600 bg-opacity-30 rounded-lg '>
            <i className="fa fa-map my-auto" aria-hidden="true"></i>
            <div className="text-right">
              <p className='font-semibold text-sm ml-2'>{city}</p>
            </div>
           </div>
          </div>
         <div className='flex flex-col items-center mt-60 h-full'>
          <h1 className='text-white text-2x1 mt-125' >The Only Weather Forecast You Need</h1>
          <hr className='h-1 bg.white w-1/4 rounded-full my-5'/>

           <form noValidate onSubmit={handleSubmit} className="flex justify-center w-full ">
            <input type="text" className='relative rounded-x1 py-2 px-3 w-2/3 bg-gray-300 bg-opacity-60 text-white placeholder-gray-200' onChange={handleChanged} required/>
           <button type='submit' className='z-10'>
             <i className='fa fa-search text-white ml-120 border-l my-auto z-10 cursor-pointer p-3' aria-hidden="true" onClick={()=>{
               handleSubmit}}></i>
           </button>
           </form>

         </div>
        </div>
         {/*Info card section */}
         <div className='w-2/4 p-5 '>
         <Header />
         <div className=' flex flex-col my-10'>
            {weatherData.length===0?
            <div className='container p-4 flex items-center justify-center h-1/3 mb-auto'>
              <h1 className='text-gray-300 text-4x1 font-bold uppercase'>{noData} </h1>
            </div>:
             <>
             <h1 className='text-5xl text-gray-800 mt-auto mb-4'>Today</h1>
             <DetailCard weather_icon={weatherIcon}data={weatherData}/>
              <h1 className='text-3xl text-gray-600 mb-4 mt-10'>More On{city} </h1>
              <ul className='grid grid-cols-2 gap-2'>
                {weatherData.list.map((days, index)=>{
                  if (index>0){
                    return(<SummaryCard key={index} day={days} />)
                  }
                })}
              </ul>
            </>
            }
         </div>
         </div>
      </div>
    </div>
  )
}

export default App

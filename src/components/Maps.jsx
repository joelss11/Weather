import React from 'react'
import Header from './Header'

export default function Maps() {
  return (

    <div className="bg-gray-800 flex items-center justify-center w-screem h-screem h-screen ">
    <div className='flex w-3/4 min-h-full rounded-3x1 shadow-lg m-auto bg-gray-100 w-full rounded-3xl'>
      {/*form card section*/}
      <div className='form-container'>
        <div className='flex items-center  justify-center'>
          <h3 className='my-auto mr-auto text-x1 text-pink-900 font-bold shadow-md py-1 px-3 rounded-md bg-white bg-opacity-30'>
            Forescast
          </h3>
         
        </div>
       <div className='flex flex-col items-center justify-center h-full'>
        <h1 className='text-white text-2x1 mt-125' >Search for the location you want to see on the map</h1>
        <hr className='h-1 bg.white w-1/4 rounded-full my-5'/>


       </div>
      </div>
       {/*Info card section */}
       <div className='w-2/4 p-5 '>
       <Header />
       <div className="mapouter mt-10">
        <div className="gmap_canvas">
        <iframe width={580} height={700} id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} />
        <a href="https://123movies-to.org">123 movies</a>
        <br />
        <style dangerouslySetInnerHTML={{__html: ".mapouter{position:relative;text-align:right;height:500px;width:600px;}" }} />
        <a href="https://www.embedgooglemap.net" />
        <style dangerouslySetInnerHTML={{__html: ".gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}" }} />
        </div>
        </div>
       </div>
    </div>
  </div>
    
  )
}

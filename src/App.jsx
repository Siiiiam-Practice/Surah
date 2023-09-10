import { useState } from 'react'
import './App.css'
import Surah_list from './Surah/Surah_list'
import { useEffect } from 'react';

function App() {
  const [Surah, setSurah] = useState([]);
  useEffect(()=>{
    fetch('https://api.alquran.cloud/v1/surah')
    .then(response => response.json())
    .then(data => setSurah(data.data))
  },[])
  


  return (
    <>
    <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2'>
      {Surah.map(data => <Surah_list englishName={data?.englishName} key={data?.number} number={data?.number} name={data?.name} numberOfAyahs={data?.numberOfAyahs} revelationType={data.revelationType} fullData={Surah}/>)}
    </div>
 
    </>
  )
}

export default App

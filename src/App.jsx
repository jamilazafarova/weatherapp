import { useEffect, useState } from 'react'
import Input from './components/Input/Input'
import Infos from './components/Infos/Infos'



function App() {
  const [city, setCity] = useState("Baku")
  const [datas, setDatas] = useState([])
  const [get, setGet] = useState(false)
  const getData = async (url) => {
    const res = await fetch(url)
    if(!res.ok) {
      throw console.error('error');
    }

    return await res.json()
  }

  const getInput = (e) => {
    setCity(e.target.value)

  }

  function getDatas(e) {
    e.preventDefault()
  
    setGet(prev => !prev)
  }
  useEffect(() => {
    getData(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8d348a62ee12b2bb05648ea0a4a52078`)
    .then(response => setDatas(response))
  }, [get])
  return (
    <div className='container'>
      <div>
        <Input getDatas={getDatas} getInput={getInput}/>
        <Infos datas={datas}/>
      </div>
    </div>
  )
}

export default App

import React, { Fragment, useEffect, useMemo, useState } from 'react'
import General from './General'
const Home = () => {
  let [data, setData] = useState(20)
  let [age, setAge] = useState(25)
  useEffect(()=>{
    console.log("Api calling");
  },[data, age])

  let changeValue = useMemo(() => {
    console.log("value changed");
  }, [data])
  return (
    <div className='main_page'>
      <h1>{changeValue}</h1>
      <h2>{data}</h2>
      <h2>{age}</h2>
      <button onClick={() => setData(data + 1)}>Add Data</button>
      <button onClick={() => setAge(age + 5)}>Change Age</button>
    </div>
  )
}

export default Home

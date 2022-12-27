import React,{ useEffect, useState} from 'react';
import './App.css';

function App() {
  const [endPoint, setEndPoint]=useState('')

  const [container, setContainer]=useState([])
  const [finalPoint,setFinalPoint]= useState('')

  useEffect(()=>{
    fetchMe()
  },[finalPoint])

  const fetchMe = () =>{
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3afca2d712msh837f067b92a04b2p169a0djsn09eae982da2f',
      'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
    }
  };
  
  fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=+${endPoint}`, options)
    .then(response => {
      return response.json()
    })
    .then(data=>{
      setContainer(data.d)
    })
    .catch(err => console.error(err));

  }


    const onChangeHandler = (e) => {
      setEndPoint(e.target.value)
      
    }
    const submitHandler= e =>{
      e.preventDefault()
      setFinalPoint(endPoint)
    }
  

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input type="text" value={endPoint} onChange={onChangeHandler}/>
        <button type="submit" >submit</button>
      </form>
      <div className="element">
       {container.map((item,index)=>{
          return (
            <div key={index} className="element-div">
            <img src={item.i.imageUrl} alt="" />
            <p>{item.l}</p>
            <p>{item.i.s}</p>
            </div>
          )
        })}
      </div>
       
    </div>
  );
}

export default App;

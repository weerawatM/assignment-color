import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import styled from 'styled-components'
function App() {
  // red>green>brown>blue
  const defaultColor =["red","green" ,"brown" ,"blue"]
  const colors = {
    "red" :"green",
    "green":"brown",
    "brown": "blue",
    "blue":"red"
  }
  const checkWin = (your,bot) =>colors[your] === bot ? "You Win" : colors[bot] === your ? "You lose" : "Draw"
  const [color,setColor] =useState("")
  const [botResult,setbotResult] =useState("")
  const selectColor = (value) =>{setColor(value)}
  useEffect(()=>{
    if(!color)return;
    setbotResult(Math.floor(Math.random()*4))
    
   },[color])
  return (
    
    <div className="App">
      <h1>Assignment</h1>
      <SContainer >{defaultColor.map((e)=>{return <SCard style={{'backgroundColor':`${e}`}} onClick={()=>selectColor(e)}>{e}</SCard>})}</SContainer>
      
      <div >bot is {defaultColor[botResult]}</div>

      <div>{checkWin(color,defaultColor[botResult])}</div>

    </div>
    
  );
}

export default App;
const SCard = styled.div`
width:100px;
height:200px;
display:flex;
justify-content:center;
align-items:center;
border-radius:20px;
color:white;
`

const SContainer = styled.div`
display:flex`
import React, { useState } from 'react'
import './App.css';
import Içerik from './componets/içerik';


const tema = {
  dark: {
    color: "white",
    backgroundColor:"black"
  },
  light: {
    
    color: "black",
    backgroundColor:"white"
  
  }
}
export const TemaVerisi = React.createContext()

function App() {
  const [değer, setDeğer] = useState(tema.dark);

  // const [baslik, setBaslik] = useState("React Öğreniyorum")
  // const numara=1992
  //  const değer="Furkan Apaydın"
  function Degistir() {
    if (tema.dark === değer) {
      setDeğer(tema.light)
    }
 
  else {
    setDeğer(tema.dark)
    }
     }
  return (
    <div className='App'>

      <TemaVerisi.Provider value={değer}>
        <Içerik></Içerik>
      </TemaVerisi.Provider>
      
      {/* <Container title={baslik} number={numara} />
      <button onClick={()=>{setBaslik("Değiştir")}}>Değiştir</button> */}
      <button onClick={Degistir}>{tema.dark===değer?"Ekran Açık" :"Ekran Koyu" }</button>
   </div>
   
  );
}
// function Container(props) {
 
//   return (
//     <div style={{ width: "400px", height: "400px", border: "2px solid black", margin: "100px auto" }}>
      
//       <p>{props.title}</p>
//     <p>{props.number}</p>  
    
//   </div>
//   )
// }

export default App;

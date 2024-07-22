import { useState, } from "react"


function App() {
const [InputValue, setInputValue] = useState("")
  function handle(value)
  {
    
  setInputValue((prev)=>prev+=value)

  }

  function answer()
  {
   let answer=eval(InputValue);
   
   
   setInputValue(answer)
  }
 



  return (
    <>
 <div className="w-[900px] h-[500px] border-4 border-black flex flex-col items-center space-y-4">
     <div className="w-32 border-4 border-black">
      <h1 className="text-center">Calculator</h1>
     </div>
  <div className="border-4 border-black h-10 w-[500px]">
    <input type="text"  value ={InputValue} readOnly />
  </div>

  <div  className="flex flex-col items-center">

    <div id="row 1" className="flex flex-row justify-around">
 <button 
 className="w-10 h-10 border-4 border-black text-2xl"   onClick={()=>handle("7")}>7</button>
 <button
 className="w-10 h-10 border-4 border-black text-2xl"  onClick={()=>handle("8")}>8</button>
 <button  
 className="w-10 h-10 border-4 border-black text-2xl" onClick={()=>handle("9")} >9</button>
 <button
 className="w-10 h-10 border-4 border-black text-2xl"  onClick={()=>handle("+")}>+</button>
    </div>

    <div id="row 2" className="flex ">
 <button
 className="w-10 h-10 border-4 border-black text-2xl"  onClick={()=>handle("4")} >4</button>
 <button
 className="w-10 h-10 border-4 border-black text-2xl"  onClick={()=>handle("5")}>5</button>
 <button
 className="w-10 h-10 border-4 border-black text-2xl"  onClick={()=>handle("6")}>6</button>
 <button
 className="w-10 h-10 border-4 border-black text-2xl"  onClick={()=>handle("-")}>-</button>
    </div>

    <div id="row 3"  className="flex ">
 <button
 className="w-10 h-10 border-4 border-black text-2xl" onClick={()=>handle("1")}>1</button>
 <button
 className="w-10 h-10 border-4 border-black text-2xl"  onClick={()=>handle("2")}>2</button>
 <button
 className="w-10 h-10 border-4 border-black text-2xl"  onClick={()=>handle("3")}>3</button>
 <button
 className="w-10 h-10 border-4 border-black text-2xl"  onClick={()=>handle("*")}>*</button>
    </div>
    <div id="row 4"  className="flex ">
 <button className="w-10 h-10 border-4 border-black text-2xl"  onClick={()=>handle(".")}>.</button>
 <button className="w-10 h-10 border-4 border-black text-2xl"  onClick={()=>handle("0")}>0</button>
 <button className="w-10 h-10 border-4 border-black text-2xl"  onClick={()=>handle("/")}>/</button>
 <button className="w-10 h-10 border-4 border-black text-2xl" onClick={answer} >=</button>
    </div>
   


  </div>


 </div>
    
    
 
    


 
</>
  )
}

export default App

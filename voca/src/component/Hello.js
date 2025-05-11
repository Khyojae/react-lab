/*const Hello = function () {

}*/
import World from "./World";
import styles from "./Hello.module.css";
import {useState} from 'react';


export default function Hello(){
//let name ="Mike";
const [name, setName] = useState('Mike');


function showName(){
    console.log("hi");
}


function showText(e){
    console.log(e.target.value);
  
}

function changeName() {
    const newName= name === "Mike" ? "Hane" : "Mike";
      //document.getElementById("name").innerText = name;
    setName(newName);
}

return (
<div>
<h1 style={
    {
color : '#f00',
borderRight : '2px solid #000',
marginBottom : '30px',
opacity: 1,


    }

}>Hello</h1>

<h1> state</h1>
<h2 id="name"> {name}</h2> 
<button onClick = {changeName}>Change</button>

<button onClick={showName}>show name</button>
<button onClick={()=>{
    console.log(30);
}}>show name2</button>
<input type="text" onChange={showText}></input>
<div className={styles.box}>  Hello  </div>
<World />

</div>)
}
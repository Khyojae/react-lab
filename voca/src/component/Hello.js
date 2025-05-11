/*const Hello = function () {

}*/
import World from "./World";
import styles from "./Hello.module.css";

export default function Hello(){

function showName(){
    console.log("hi");
}


function showText(e){
    console.log(e.target.value);
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

<button onClick={showName}>show name</button>
<button onClick={()=>{
    console.log(30);
}}>show name2</button>
<input type="text" onChange={showText}></input>
<div className={styles.box}>  Hello  </div>
<World />

</div>)
}
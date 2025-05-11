import logo from './logo.svg';
import './App.css';
import Hello from './component/Hello';
import Welcome from './component/Welcome';
import styles from './App.module.css';

//여기에서 코드를 구현 hmr
function App() {
  
   const name = "Tom";
    const naver = {
      name: "네이버",
      url: "https://naver.com",
    }
  return (
   
    <div className="App">
      <Hello />
      <Welcome />
      <Welcome />
      <Welcome />
      <div className={styles.box}>App</div>
    </div>


   /* <div className="App">
      <h1
      style={{
        color:"#f0f",
        backgroundColor:"green",}
      }
      >
        Hello, {name}.<p>{2+3}</p> 
        </h1>
        <a href={naver.url}>{naver.name}</a>
    </div>*/
  );
}

export default App;

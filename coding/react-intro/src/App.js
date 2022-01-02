import logo from './logo.svg';
import './App.css';

function App() {
  const style = {
    color: "red",
    fontSize: "40px",
    backgroundColor: "blue"
  };
  const arr = ["wake-up","have tea", "standup"]
  
  return (
    <div className="App">
      {[1,2,3,4,5].map((e) => (
          
        <h1>Hello {e}</h1>
      )
      
      )}
   
      <h1 style={style}> Hello React </h1>
      <img src={logo} width={540}/>
      <input placeholder="test"/>
      <div>
      {arr.map((e) => (
       <Todos num={e} />
     ))}
      </div>
     <div>
       <h1 >Hello</h1>
     </div>
   
    </div>
    
 
  );
}
 // interpolation

 function Todos({num}) {
   
   return <h1>Todo: {num} </h1>
 }

export default App;

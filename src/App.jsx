import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';

function App() {
  function handleClick(){
    alert('Button Clicked');
  }

  const handleclick2 = () =>{
    alert('Button 2 clicked');
  }

  const addToFive = (num) =>{
    alert(num + 5);
  }
  return (
    <>
      <h3>React core concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
     <button onClick={handleClick}>Click me</button>
     <button onClick={handleclick2}>Click 2</button>
     <button onClick={()=>{alert('Button 3 clicked')}}>Click 3</button>
     <button onClick={() => addToFive(3)}>Four</button>
    </>
  )
}

export default App

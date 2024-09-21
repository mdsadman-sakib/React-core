
import Books from '../Books'
import Counter from '../Counter'
import Friends from '../Friends'
import './App.css'


function App() {

  function handleClick(){
    alert('Button Click')
  }

  const handle2 = () => {
    alert('Click @')
  }

  const number = (num) => {
    alert(num + 5);
  }
 return (
    <>
    <h3>React Core Concepts 2</h3>
    <Friends></Friends>
    {/* <Gaide></Gaide> */}
    {/* <Books></Books> */}

    {/* <Users></Users> */}
    {/* <Study></Study>
    <Team></Team>
      <Counter></Counter> */}
    {/* <button onClick={handleClick}>Cilck Me</button>
    <button onClick={handle2}>Cilck Me2</button>
    <button onClick={() => alert('third Clock')}>Third CLik</button>
    <button onClick={() => number(5)}>Click Add</button> */}


    </>
  )
}

export default App

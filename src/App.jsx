import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { TaskList } from '/request/task.request.jsx'
import { Socket } from '/request/client.websocket.jsx'
import './App.css'

function MyTick() {
  return(
    <div>
      <h1 className='read-the-docs' style={{
        color: "gold"
      }}>
        Hello, world!!!
      </h1>
      <h2 style={{color:"green"}}>
        The time is {new Date().toLocaleTimeString()}.890xxx
      </h2>
    </div>
  )
}

function MyButton() {
  const [count, setcount] = useState(0)

  function handleClick() {
    setcount(count + 1)
  }

  return (
    <div>
      <button onClick={handleClick} className='card'>
        Clicked {count} times
      </button>
    </div>
  )
}

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default function MyApp() {

  return (
    <div>
      <MyTick />
      <h1 style={{color: "red"}}>
        Welcome to my first web page!!!
      </h1>
      <MyButton />
      <p className='my-card'>
        AAAAAAA
      </p>
    </div>
  )
}

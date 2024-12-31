import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const[color, setColor] = useState('black');
  return (
     <div className='w-full h-screen duration-200 ' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-whitepx-3 py-2 rounded-3xl bg-white'>
          <button
          onClick={() => setColor('Violet')}
          className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
          >Violet</button>

          <button
          onClick={() => setColor('Indigo')}
          className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
          >Indigo</button>

          <button
          onClick={() => setColor('blue')}
          className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
          >Blue</button>

          <button
          onClick={() => setColor('green')}
          className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
          >Green</button>  

          <button
          onClick={() => setColor('orange')}
          className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
          >Orange</button> 

          <button
          onClick={() => setColor('yellow')}
          className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
          >Yellow</button> 

          <button
          onClick={() => setColor('red')}
          className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
          >Red</button>
        </div>
      </div>
     </div>
  )
}

export default App

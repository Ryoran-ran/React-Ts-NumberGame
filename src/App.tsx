import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const answer = 50
  const [guess, setGuess] = useState('')
  const [A, setA] = useState('')

  const handleAnswer = () => {

    const num = Number(guess)

    setA("a");



    // if (num < answer) {

    //   alert('もっと大きいです')

    // } else if (num > answer) {

    //   alert('もっと小さいです')

    // } else {

    //   alert('正解！')

    // }

  }

  return (
    <>
      <h1>
        数当てゲーム
      </h1>
      <input type="number" className="form-control" />
      <button onClick={handleAnswer}>回答</button>
      <div>{A}</div>


    </>
  )
}

export default App

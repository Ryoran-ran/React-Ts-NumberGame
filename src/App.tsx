import { useState } from 'react'
import './App.css'
import { NumberCheck ,resultSComment } from '../src/hooks/number';

function App() {
  const answer = 50
  const [guess, setGuess] = useState('');
  const [Log, setLog] = useState('');

  const handleAnswer = () => {

    const num = Number(guess);
    let answerResult = 0;
    let comment = "";

    answerResult = NumberCheck(num, answer);

    comment = resultSComment(answerResult);

    setLog(Log + num +":" + comment + "\n");

    

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
      <div>{Log}</div>


    </>
  )
}

export default App

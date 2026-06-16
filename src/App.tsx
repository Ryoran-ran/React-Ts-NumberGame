import { useState } from 'react'
import './App.css'
import { NumberCheck ,resultSComment } from '../src/hooks/number';

function App() {
  const answer = 50
  const [guess, setGuess] = useState('');
  const [Log, setLog] = useState<string[]>([]);

  const handleAnswer = () => {

    const num = Number(guess);
    let answerResult = 0;
    let comment = "";

    answerResult = NumberCheck(num, answer);

    comment = resultSComment(answerResult);

    setLog([...Log, num + ":" + comment]);


  }

  return (
    <>
      <h1>
        数当てゲーム
      </h1>
      <input type="number" className="form-control" value={guess} onChange={(e) => setGuess(e.target.value)} />
      <button onClick={handleAnswer}>回答</button>
      <div>
        {Log.map(list => (
            <p key={list}>{list}</p>
        ))}
        </div>


    </>
  )
}

export default App

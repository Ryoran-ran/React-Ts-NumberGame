import { useState } from 'react'
import './App.css'
import { NumberCheck ,resultSComment ,NumberSet } from '../src/hooks/number';

function App() {
  const [answer, setAnswer] = useState(-1);
  const [guess, setGuess] = useState('');
  const [Log, setLog] = useState<string[]>([]);

  const handleAnswer = () => {

    const num = Number(guess);
    let answerResult = 0;
    let comment = "";

    if(answer === -1){
      setAnswer(NumberSet(1, 50));
    }

    answerResult = NumberCheck(num, answer);

    comment = resultSComment(answerResult);

    setLog([...Log, num + ":" + comment]);

    setGuess('');


  }

  return (
    <>
      <h1>
        数当てゲーム
      </h1>
      <input type="number" className="form-control" value={guess} onChange={(e) => setGuess(e.target.value)} />
      <button onClick={handleAnswer}>回答</button>
      <p>
        {Log.map(list => (
            <p key={list}>{list}</p>
        ))}
        </p>


    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import { NumberCheck ,resultSComment ,NumberSet } from '../src/hooks/number';

function App() {
  const [answer, setAnswer] = useState(-1);
  const [guess, setGuess] = useState('');
  const [Log, setLog] = useState<string[]>([]);
  const [GameClear, setGameClear] = useState(false);

  // const handleKeyDown = (e) => {

  //   console.log(e.key);

  // };

  const handleAnswer = () => {

    const num = Number(guess);
    let answerResult = 0;
    let comment = "";
    let ansnum = answer;

    if(ansnum === -1){
      ansnum = NumberSet(1, 50);
      setAnswer(ansnum);
    }

    answerResult = NumberCheck(num, ansnum);

    comment = resultSComment(answerResult);

    setLog([...Log, num + ":" + comment]);

    if(answerResult === 0){
      setGameClear(true);
    }
    setGuess('');

  }

  const handleReset = () => {
    setAnswer(-1);
    setGuess('');
    setLog([]);
    setGameClear(false);
  };

  return (
    <>
      <h1>
        数当てゲーム
      </h1>
      <div>
        <input type="number" disabled={GameClear} className="form-control" value={guess} onChange={(e) => setGuess(e.target.value)} />
        <button onClick={handleAnswer} disabled={GameClear}>
          回答
        </button>
        <button onClick={handleReset}>
          リセット
        </button>
        <p>
          {Log.map(list => (
              <p key={list}>{list}</p>
          ))}
        </p>
      </div>


    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import { NumberCheck ,resultSComment ,NumberSet } from '../src/hooks/number';

function App() {
  const [answer, setAnswer] = useState(-1);
  const [guess, setGuess] = useState('');
  const [logs, setLogs] = useState<string[]>([]);
  const [gameClear, setGameClear] = useState(false);
  const [tryCount, setTryCount] = useState(0);

  const handleAnswer = () => {
    const num = Number(guess);
    let answerResult = 0;
    let comment = "";
    let ansnum = answer;
    let count = tryCount + 1;

    if(guess === ''){
      return;
    }


    if(ansnum === -1){
      ansnum = NumberSet(1, 100);
      setAnswer(ansnum);
    }

    setTryCount(count);

    answerResult = NumberCheck(num, ansnum);

    comment = resultSComment(answerResult);

    setLogs([...logs, count+ "回目: " + num + ":" + comment]);

    if(answerResult === 0){
      setGameClear(true);
    }
    setGuess('');

  }

  const handleReset = () => {
    setAnswer(-1);
    setGuess('');
    setLogs([]);
    setGameClear(false);
    setTryCount(0);
  };

  return (
    <>
      <h1>
        数当てゲーム
      </h1>
      <div>1〜100の数字を当ててください</div>
      <div>
        <input type="number" disabled={gameClear} className="form-control" value={guess} onChange={(e) => setGuess(e.target.value)} />
        <button onClick={handleAnswer} disabled={gameClear}>
          回答
        </button>
        <button onClick={handleReset}>
          リセット
        </button>
      </div>
      <div>
        {[...logs]
          .sort((a: string, b: string) => parseInt(b) - parseInt(a))
          .map((list) => (
            <div key={list}>{list}</div>
          ))}
      </div>
    </>
  )
}

export default App

import Header from "./components/Header";
import Board from "./components/Board";
import React, { useState } from "react";
function App() {
  const [counts, setCounts] = useState({
    count: 0,
    bestCount: 0,
  });
  const [selected, setSelected] = useState([]);
  const [scores, setScores] = useState([counts.count]);

  const increaseCount = (e) => {
    setCounts({
      count: counts.count + 1,
      bestCount: counts.bestCount,
    });
    setScores(scores.concat(counts.count + 1));
  };

  const addPenguin = (name) => {
    console.log(name);
    if (selected.includes(name) === false) {
      setSelected(selected.concat(name));
      increaseCount();
    } else {
      setSelected([]);
      resetCount();
    }
  };

  const resetCount = () => {
    console.log(scores);
    setCounts({
      count: 0,
      bestCount: getMaxOfArray(scores),
    });
  };

  function getMaxOfArray(numArray) {
    let max = numArray[0];
    for (var i = 1; i < numArray.length; i++) {
      if (numArray[i] > max) {
        max = numArray[i];
      }
    }
    return max;
  }

  return (
    <div className="App">
      <Header count={counts.count} bestCount={counts.bestCount} />
      <Board addPenguin={addPenguin} />
    </div>
  );
}

export default App;

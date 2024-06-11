import { useState } from 'react';

import Board from './components/Board';
import Score from './components/Score';
import History from './components/History';

import calculateWinner from './helpers/calculateWinner';

export default function App() {
	const [xIsNext, setXIsNext] = useState(true);
	const [history, setHistory] = useState([Array(9).fill(null)]);
	const currentSquares = history[history.length - 1];

	function handlePlay(nextSquares) {
		setHistory([...history, nextSquares]);
		setXIsNext(!xIsNext);
	}

	function updateHistory(move) {
		const nextHistory = history.slice(0, move + 1);
		setXIsNext(nextHistory.length % 2 !== 0);
		setHistory(nextHistory);
	}

	const winner = calculateWinner(currentSquares);
	let status;
	if (winner) {
		status = 'Winner: ' + winner;
	} else {
		status = 'Next player: ' + (xIsNext ? 'X' : 'O');
	}

	return (
		<div className="game">
			<div className="left">
				<Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
				<Score status={status} />
			</div>
			<div className="right">
				<History moves={history} onMoveClick={updateHistory} />
			</div>
		</div>
	);
}

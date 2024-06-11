export default function History({ moves, onMoveClick }) {
	return (
		<>
			<h2>History</h2>
			<ul>
				{moves.slice(0, -1).map((squares, move) => (
					<li key={move}>
						<button onClick={() => onMoveClick(move)}>
							Go to move #{move + 1}
						</button>
					</li>
				))}
			</ul>
		</>
	);
}

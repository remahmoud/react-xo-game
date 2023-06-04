import React, { useState } from "react";
import Box from "./components/Box";
import ResetButton from "./components/ResetButton";
import Message from "./components/Message";
import AnimationBox from "./components/AnimationBox";

export default function App() {
    const [active, setActive] = useState(false);
    const [turn, setTurn] = useState("x");
    const [message, setMessage] = useState("");
    const [board, setBoard] = useState(Array(9).fill(""));
    const [score, setScore] = useState({
        x: 0,
        o: 0,
    });

    // Handle the click on the box
    const handleClick = (idx) => {
        if (board[idx] !== "") return;
        // Update the board
        const newBoard = [...board];
        newBoard[idx] = turn;
        setBoard(newBoard);

        // Check if there is a winner
        const winner = calculateWinner(newBoard);
        if (winner) {
            setMessage(`${winner} won the game!`);
            setScore({
                ...score,
                [winner]: score[winner] + 1,
            });
            setActive(true);
            return;
        }

        // Check if there is a tie
        if (!winner && !newBoard.includes("")) {
            setMessage("It's a tie!");
            return;
        }

        // Update the turn
        setTurn(turn === "x" ? "o" : "x");
    };

    // Calculate the winner
    const calculateWinner = (board) => {
        const winningLines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < winningLines.length; i++) {
            const [a, b, c] = winningLines[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }
        return null;
    };

    // Reset the game
    const resetGame = () => {
        setBoard(Array(9).fill(""));
        setTurn("x");
        setMessage("");
        setActive(false);
    };
    return (
        <div className="container mx-auto px-4 md:px-12 h-full">
            <div className="h-full w-full grid place-content-center">
                <AnimationBox active={active} />
                {message ? <Message message={message} /> : null}
                <div className="grid grid-cols-3 gap-4 w-full mb-6">
                    {board.map((value, idx) => (
                        <Box
                            key={idx}
                            value={value}
                            onClick={() => handleClick(idx)}
                        />
                    ))}
                </div>
                <ResetButton onClick={resetGame} />
            </div>
        </div>
    );
}

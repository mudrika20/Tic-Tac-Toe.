import { useState } from "react";
import UserInfo from "./UserInfo";
import Game from "./Game";
import Result from "./Result";
const TicTacToeMain = () => {
    const [currentPage, setCurrentPage] = useState("info");
    const [player1, setPlayer1] = useState("");
    const [player2, setPlayer2] = useState("");
    const [winner, setWinner] = useState("");
    return(
        <>
            {currentPage === "info"? <UserInfo 
            setCurrentPage={setCurrentPage} player1={player1} player2={player2} setPlayer1={setPlayer1} setPlayer2={setPlayer2}/> 
            : ""}
            {currentPage === "game"? <Game 
            setCurrentPage={setCurrentPage} player1={player1} player2={player2} setPlayer1={setPlayer1} setPlayer2={setPlayer2} 
            setWinner={setWinner} winner={winner}/> 
            : ""}
            {currentPage === "Result"? <Result
            setCurrentPage={setCurrentPage} player1={player1} player2={player2} setPlayer1={setPlayer1} setPlayer2={setPlayer2}
            setWinner={setWinner} winner={winner}/> 
            : ""}
            {currentPage === "over"? <h1>TATA BYBY KHATAM GAYA</h1>:""}
        </>
    )
}
export default TicTacToeMain
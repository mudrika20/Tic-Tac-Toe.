import { useState } from "react";
const Result = (props) => {
    return(
        <>
            {props.winner==='X'?<h1 style={{fontStyle: "italic", color:"PINK"}}>{props.player1} is the winner</h1> : ""}
            {props.winner==='0'?<h1 style={{fontStyle: "italic", color:"yellow"}}>{props.player2} is the winner</h1> : ""}
            {props.winner==="tie"?<h1>TIE!</h1> : ""}
            <button style={{backgroundColor: "CYAN", color: "BLACK", width:150}} onClick={() => props.setCurrentPage("game")}>PLAY AGAIN</button>
            {/* <button onClick={() => props.setCurrentPage("info")}>RESTART</button> */}
            <br />
            <br />
            <button style={{backgroundColor: "RED", color: "white", width:150}} onClick={() => props.setCurrentPage("over")}>CLOSE</button>
        </>
    )
}
export default Result
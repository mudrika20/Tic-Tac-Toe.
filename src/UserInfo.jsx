import { useState } from "react";
const UserInfo = (props) => {
    const onStartClick = () => {
        if(props.player1==="")
            alert("Please enter Player1 name");
        if(props.player2==="")
            alert("Please enter Player2 name");
        else
            props.setCurrentPage("game")
    }
    return(
        <>
            <h1 style={{fontStyle: "italic"}}>WELCOME TO TIC-TAC-TOE GAME</h1>
            <h2 style={{fontStyle: "italic",color:"PINK"}}>PLAYER-1[X]:</h2>
            <input 
                style={{width:"200px", height:"30px"}}
                value={props.player1}
                onChange={(obj) => props.setPlayer1(obj.target.value)}
            />
            <br />
            <h2 style={{fontStyle: "italic",color:"yellow"}}>PLAYER-2[O]:</h2>
            <input
                style={{width:"200px", height:"30px"}}
                value={props.player2}
                onChange={(obj) => props.setPlayer2(obj.target.value)}
            />
            <br />
            <br />
            <button style={{ backgroundColor: "RED", color: "white" }} onClick={onStartClick}>TAP TO START</button>
        </>
    )
}
export default UserInfo
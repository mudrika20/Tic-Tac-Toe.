import { useEffect, useState } from "react";
const Game = (props) => {
    const [sign1, setSign1] = useState("__");
    const [sign2, setSign2] = useState("__");
    const [sign3, setSign3] = useState("__");
    const [sign4, setSign4] = useState("__");
    const [sign5, setSign5] = useState("__");
    const [sign6, setSign6] = useState("__");
    const [sign7, setSign7] = useState("__");
    const [sign8, setSign8] = useState("__");
    const [sign9, setSign9] = useState("__");
    const [toggle, setToggle] = useState(1);
    const dimension = {
        height:60,
        width:60,
        fontSize:20
    }
    const determinationOfWhoseTurn = (buttonNumber) => {
        const currentSign=toggle%2!==0?"X":"0"; 
        switch(buttonNumber){
                case 1:
                    setSign1(currentSign);
                    break;
                case 2:
                    setSign2(currentSign);
                    break;
                case 3:
                    setSign3(currentSign);
                    break;
                case 4:
                    setSign4(currentSign);
                    break;
                case 5:
                    setSign5(currentSign);
                    break;
                case 6:
                    setSign6(currentSign);
                    break;
                case 7:
                    setSign7(currentSign);
                    break;
                case 8:
                    setSign8(currentSign);
                    break;
                case 9:
                    setSign9(currentSign);
                    break;
            }
            setToggle(prev => prev+1);
        }
    useEffect(() => {
        if(sign1!=="__" && sign1===sign2 && sign2===sign3)// ->
        {
            props.setCurrentPage("Result")
            props.setWinner(sign1)
        }
        else if(sign4!=="__" && sign4===sign5 && sign5===sign6)// ->
        {
            props.setCurrentPage("Result")
            props.setWinner(sign4)
        }
        else if(sign7!=="__" && sign7===sign8 && sign8===sign9)// ->
        {
            props.setCurrentPage("Result")
            props.setWinner(sign8)
        }
        else if(sign1!=="__" && sign1===sign4 && sign4===sign7)//down
        {
            props.setCurrentPage("Result")
            props.setWinner(sign1)
        }
        else if(sign2!=="__" && sign2===sign5 && sign5===sign8)//down
        {
            props.setCurrentPage("Result")
            props.setWinner(sign2)
        }
        else if(sign3!=="__" && sign3===sign6 && sign6===sign9)//down
        {
            props.setCurrentPage("Result")
            props.setWinner(sign3)
        }
        else if(sign1!=="__" && sign1===sign5 && sign5===sign9)//diagonal
        {
            props.setCurrentPage("Result")
            props.setWinner(sign5)
        }
        else if(sign3!=="__" && sign3===sign5 && sign5===sign7)//diagonal
        {
            props.setCurrentPage("Result")
            props.setWinner(sign3)
        }
        else if((sign1=='X'||sign1=='0') && (sign2=='X'||sign2=='0') && (sign3=='X'||sign3=='0') && (sign4=='X'||sign4=='0') && (sign5=='X'||sign5=='0') && (sign6=='X'||sign6=='0') && (sign7=='X'||sign7=='0') && (sign8=='X'||sign8=='0') && (sign9=='X'||sign9=='0'))
        {
            props.setCurrentPage("Result")
            props.setWinner("tie")
        }
    },[sign1,sign2,sign3,sign4,sign5,sign6,sign7,sign8,sign9]//dependencies array=>jinke change hone pe useEffect call hoyega
    )
    return(
        <>
            {toggle%2!==0 ? <h1 style={{fontStyle: "italic",color:"PINK"}}>{props.player1}'s turn</h1> : <h1 style={{fontStyle: "italic",color:"yellow"}}>{props.player2}'s turn</h1>}
            <button style={{...dimension,color:`${sign1==='X'?"PINK":sign1==='0'?"yellow":"white"}`}} onClick={() => determinationOfWhoseTurn(1)} >{sign1}</button>
            <button style={{...dimension,color:`${sign2==='X'?"PINK":sign2==='0'?"yellow":"white"}`}} onClick={() => determinationOfWhoseTurn(2)} disabled={sign2!=="__"}>{sign2}</button>
            <button style={{...dimension,color:`${sign3=='X'?"PINK":sign3==='0'?"yellow":"white"}`}} onClick={() => determinationOfWhoseTurn(3)} disabled={sign3!=="__"}>{sign3}</button>
            <br />
            <button style={{...dimension,color:`${sign4==='X'?"PINK":sign4==='0'?"yellow":"white"}`}} onClick={() => determinationOfWhoseTurn(4)} disabled={sign4!=="__"}>{sign4}</button>
            <button style={{...dimension,color:`${sign5==='X'?"PINK":sign5==='0'?"yellow":"white"}`}} onClick={() => determinationOfWhoseTurn(5)} disabled={sign5!=="__"}>{sign5}</button>
            <button style={{...dimension,color:`${sign6==='X'?"PINK":sign6==='0'?"yellow":"white"}`}} onClick={() => determinationOfWhoseTurn(6)} disabled={sign6!=="__"}>{sign6}</button>
            <br />
            <button style={{...dimension,color:`${sign7==='X'?"PINK":sign7==='0'?"yellow":"white"}`}} onClick={() => determinationOfWhoseTurn(7)} disabled={sign7!=="__"}>{sign7}</button>
            <button style={{...dimension,color:`${sign8==='X'?"PINK":sign8==='0'?"yellow":"white"}`}} onClick={() => determinationOfWhoseTurn(8)} disabled={sign8!=="__"}>{sign8}</button>
            <button style={{...dimension,color:`${sign9==='X'?"PINK":sign9==='0'?"yellow":"white"}`}} onClick={() => determinationOfWhoseTurn(9)} disabled={sign9!=="__"}>{sign9}</button>
        </>
    )
}
export default Game
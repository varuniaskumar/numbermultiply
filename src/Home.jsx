import { useEffect } from "react";
import { useState } from "react"

// export default function Home(){
//     const[num, setNum] = useState(1);

//     function increase(){
//         setNum(num * 2)
//     };

//     function decrease(){
//         setNum(num)
//     };
//     return(
        
//         <>
//         <p> {num} </p>
//         <button onClick={increase}>Increase</button> 
//         <button  onClick={decrease}>Decrease</button>
//         </>
        
        

//     )
// }


export default function Home(){
    const[counter, setCounter] = useState(0);
    const[mul, setMul] = useState();

    function increase(){
        setCounter(counter+1);
    }

    function decrease(){
        setCounter(counter-1);
    }

    useEffect(() => {
        setMul(counter * 2);
    },[counter])


    return(
        <>
        <button onClick={increase}>increase</button>
        <h1>this is the counter {counter} </h1>
        <button onClick={decrease}>decrease</button>
        <h1>this is the multiplied value {mul} </h1>
        </>
    )
}
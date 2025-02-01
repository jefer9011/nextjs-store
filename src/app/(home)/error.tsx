"use client"


interface ErrorProps {
    error: Error;
    reset: () => void;
}


export default function Error({error, reset}: ErrorProps) {
    return (
        <div style={{color: "#FFF"}}>
            <p style={{ textAlign: "center"}}>Something happen with products ${error.message} :(</p>
            <button style={{margin: "0 auto", textAlign: "center", display: "flex"}} onClick={reset}>Try again</button>
        </div>
    )
}
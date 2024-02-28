import { useState } from "react";


const Vote = () => {
    const [vote, setVote] = useState(0);
    const increment = () => {
        setVote(vote => vote + 1);
    };
    const decrement = () => {
        setVote(vote => vote - 1);
    };

    return (
        <div className="flex-col">
            <button onClick={increment}>&#x2B99;</button>
            <p className="no-space">{vote}</p>
            <button onClick={decrement}>&#x2B9B;</button>
        </div>
    );
};

export default Vote;
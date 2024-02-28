//import { useState } from "react";

/*
export default function NameTextbox() {
    const [text, setText] = useState('');

    return (
        <>
            <input 
                type="text"
                value={text}
                onChange = {(evt) => setText(evt.target.value)}
                placeholder = "Name"
                className="box-border box-height rounded pad mb"
            />
        </>
    );
}
*/

type NameTextboxProps = {
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const NameTextbox = ({ value, onChange }: NameTextboxProps) => {
    return (
        <input
            value = {value}
            placeholder = "Name"
            onChange = {onChange}
            className = "box-border box-height rounded pad mb"
        />
    );
};

export default NameTextbox;

//import { useState } from "react";

/*
export default function CommentTextbox() {
    const [text, setText] = useState('');

    return (
        <>
            <textarea 
                value={text}
                onChange = {(evt) => setText(evt.target.value)}
                placeholder = "write a comment here..."
                className="box-border box-height rounded pad mb"
            />
        </>
    );
}
*/

type CommentTextboxProps = {
    value: string;
    onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const CommentTextbox = ({ value, onChange }: CommentTextboxProps) => {
    return (
        <textarea
            value = {value}
            placeholder = "write a comment here..."
            onChange = {onChange}
            className = "box-border box-height rounded pad mb"
        />
    );
};

export default CommentTextbox;
import { useState } from "react";
import PostingBlock from "./postingBlock";

type CommentProps = {
    comment: { name: string; text: string; key: number };
    depth: number;
}

const Comment = ({comment, depth}: CommentProps) => {
    //const [reply, setReply] = useState(false);
    const [replies, setReplies] = useState<{ name: string; text: string; key: number}[]>([]);
    const [key, setKey] = useState(0);

    const postReply = (e, name: string, text:string, setName, setComment) => {
        e.preventDefault();
        if (name && text) {
            setReplies(ls => [...ls, {name, text, key}]);
            setKey(lastKey => lastKey + 1);
            setName('');
            setComment('');
        };
    };
    
    if (depth === 2) {
        return (
            <div className="shadow smaller">
                <div style={{ marginLeft: `${depth * 20}px`}}>
                    <div>
                        <p className="name">{comment.name}</p>
                        <p className="comment">{comment.text}</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="shadow smaller">
            <div style={{ marginLeft: `${depth * 20}px`}}>
                <div>
                    <p className="name">{comment.name}</p>
                    <p className="comment">{comment.text}</p>
                </div>
                <div>
                    <PostingBlock postComment={postReply} buttonType="reply" parentID={comment.key}/> 
                    <ul>
                        {replies.map(elem => (
                            <Comment key={elem.key} comment={elem} depth={depth + 1}/>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Comment;
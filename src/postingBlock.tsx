import { useState } from "react";
import Button from "./button";
import CommentTextbox from "./commentTextbox";
import NameTextbox from "./nameTextbox"

type PostingBlockProps = {
   postComment: (e: unknown, name: string, text: string, setName: unknown, setComment: unknown) => void
   buttonType: string;
   parentID: number;
};

const PostingBlock = ({ postComment, buttonType, parentID }: PostingBlockProps) => {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');

    const namePost = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setName(e.target.value);
    };
    const commentPost = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.preventDefault();
        setComment(e.target.value);
    };
    /*
    const handleReply = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    };
    */
    
    const onPost = (e: React.FormEvent) => {
        e.preventDefault();
        postComment(e, name, comment, setName, setComment);
        setName('');
        setComment('');
    }

    return (
        <form className="flex-col" onSubmit={onPost}>
            <NameTextbox value={name} onChange={namePost}/>
            <CommentTextbox value={comment} onChange={commentPost}/>
            <Button buttonType={buttonType} parentID={parentID}/>
        </form>
    );
};

export default PostingBlock;

//worry about depth???????????
//<Button buttonType={buttonType} onClick={e => postComment(e, name, comment)} parentID={parentID}/>
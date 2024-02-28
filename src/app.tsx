import { useState } from 'react';
import './app.css';
import PostingBlock from './postingBlock';
import Comment from './comment';

function App() {
  const [comments, setComments] = useState<{ name: string; text: string; key: number}[]>([]);
  const [key, setKey] = useState(0);
  
  const postComment = (e, name: string, text: string, setName, setText) => {
    e.preventDefault();
    if (name && text) {
      setComments(ls => [...ls, { name, text, key}]);
      setKey(lastKey => lastKey + 1);
      setName('');
      setText('');
    };
  };
  

  return (
    <div className= "container marg-auto mt-10">
      <h1> 🤠 Eli&apos;s Comment Central!!! 🤠 </h1>
      <PostingBlock postComment={postComment} buttonType='submit' parentID={null}/>
      <ul>
        {comments.map(elem => (
          <Comment key={elem.key} comment={elem} depth={0}/>
        ))}
      </ul>
    </div>
  );

}

export default App;

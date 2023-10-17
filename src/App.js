import { useState } from 'react';
import Form from './components/Form';
import MemoList from './components/MemoList';

function App() {
  // const [memo, setMemo] = useState('');
  // const [memos, setMemos] = useState([]);

  // const onAddMemo = e => {
  //   setMemo(e.target.value);
  // };

  // const onSubmitMemo = e => {
  //   e.preventDefault();
  //   setMemos(prev => [...prev, memo]);
  //   setMemo('');
  // };

  return (
    <div>
      <h1>메모 작성하기</h1>
      <Form />
      <MemoList />
    </div>
  );
}

export default App;

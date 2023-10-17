import React from 'react';
import useMemoStore from '../stores/memos';

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

export default function Form() {
  const { memo, setMemo, setMemos } = useMemoStore();

  const onAddMemo = e => {
    setMemo(e.target.value);
  };

  const onSubmitMemo = e => {
    e.preventDefault();
    setMemos(memo);
    setMemo('');
  };

  return (
    <>
      <form onSubmit={onSubmitMemo}>
        <input type="text" onChange={onAddMemo} value={memo} />
        <button type="submit">작성완료</button>
      </form>
    </>
  );
}

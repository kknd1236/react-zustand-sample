import React from 'react';
import useMemoStore from '../stores/memos';

export default function MemoList() {
  const { memos } = useMemoStore();

  return (
    <ul>
      {memos.map(memo => {
        return <li key={memo}>{memo}</li>;
      })}
    </ul>
  );
}

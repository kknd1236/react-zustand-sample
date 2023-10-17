import create from 'zustand';

const useMemoStore = create(set => ({
  memo: '',
  setMemo: text => set({ memo: text }),
  memos: [],
  setMemos: text =>
    set(prev => ({
      memos: [...prev.memos, text],
    })),
}));

export default useMemoStore;

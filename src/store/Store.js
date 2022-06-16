import create from 'zustand';


const useStore = create((set) => ({
    selectedWs: [],
    AddSelectedWords: (word) => set((state) => ({selectedWs: [ ...state.selectedWs, word]})),
    RemoveWord: (newWords) => set((state) => ({selectedWs: newWords})),
  }))

  export default useStore;
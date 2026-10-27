import { create } from "zustand"
const initialState = 0
export const useCounterStore = create((set)=>({
    count: initialState,

    increment: ()=> set((state)=>({count:state.count + 1})),
    decrement: ()=> set((state)=>({count: state.count - 1})),
    reset: ()=>set({count: initialState}),
}))
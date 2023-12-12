import { create } from 'zustand'

interface LoginState {
    name: string;
    setName: (name: string) => void;
    family: string;
    setFamily: (family: string) => void;
    phone: string;
    setPhone: (phone: string) => void;
    age: number;
    setAge: (age: number) => void;
}

const useStore = create<LoginState>((set) => ({
    name: "",
    setName: (name) =>
        set((state) => ({
            ...state,
            name
        })),

    family: "",
    setFamily: (family) =>
        set((state) => ({
            ...state,
            family
        })),

    phone: "",
    setPhone: (phone) =>
        set((state) => ({
            ...state,
            phone
        })),

    age: 0,
    setAge: (age) =>
        set((state) => ({
            ...state,
            age
        }))
}));

export default useStore;
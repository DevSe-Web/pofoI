import { create } from 'zustand';


type onoffStore = {
    status: boolean,
    setStatus: () => void,
    setStatusOff: () => void,
    setStatusOn: () => void
}
export const useOnOffStore = create<onoffStore>()(set => ({
    status: false,
    setStatus: () => set((state) => ({
        status: !state.status
    })),
    setStatusOff: () => set((state) => ({
        status: false
    })),
    setStatusOn: () => set((state) => ({
        status: true
    })),
}))
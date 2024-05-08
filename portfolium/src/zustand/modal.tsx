import create from 'zustand';

type ModalState = {
    isModal: boolean,
    modalName: string,
    actions: {
        setIsModal: (val: boolean) => void,
        selectedModalOpen: (modalName: string) => void,
        selectedModalClose: () => void,
        setModalName: (name: string) => void,
    }
}

const useModal = create<ModalState>((set) => ({
    isModal: false,
    modalName: '',
    actions: {
        setIsModal: (val: boolean) => set(state => ({
            ...state,
            isModal: val
        })),
        selectedModalOpen: (modalName: string) => set(state => ({
            ...state,
            isModal: true,
            modalName: modalName
        })),
        selectedModalClose: () => set(state => ({
            ...state,
            isModal: false,
            modalName: ''
        })),
        setModalName: (name: string) => set(state => ({
            ...state,
            modalName: name
        })),
    }
}));

export const useModalState = () => useModal(state => ({
    isModal: state.isModal,
    modalName: state.modalName
}));
export const useModalActions = () => useModal(state => state.actions);

/* eslint-disable react/prop-types */
import React, { createContext, useState, useCallback } from 'react'
import { useContext } from 'react'
import Modal from '../../Pages/Home/Content/Modals'

export const  ModalContext = createContext()

const ModalContainer = ({ children }) => {
  const [modalState, setModalState] = useState(false)

  const closeModal = useCallback(() => setModalState(false), [])
  const openModal = useCallback((name) => setModalState(name), [])

  return (
    <ModalContext.Provider value={{ openModal, closeModal, modalState }}>
      {children}
      {modalState && <Modal />}
    </ModalContext.Provider>
  )
}

export const useModal = () => useContext(ModalContext);

export default React.memo(ModalContainer)

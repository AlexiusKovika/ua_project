/* eslint-disable react/prop-types */

import React from 'react'
import { createPortal } from 'react-dom'
import Tests from '../TestsUkr'

import './styles.module.scss'

const Modal = ({ closeModal }) => {
  // const [state, setState] = useState({
  //   id: '',
  //   questionText: '',
  //   answerText: '',
  //   isCorrect: '',
  // })

  // const setValue = useCallback(
  //   (key) => (e) => {
  //     setState({
  //       ...state,
  //       [key]: e.currentTarget.value,
  //     })
  //   },
  //   [state],
  // )

  // const onSubmit = (e) => {
  //   e.preventDefault()
  //   // here must be fetch
  //   console.log(`Form to send: ${JSON.stringify(state)}`)
  // }

  return createPortal(
    <div className="modalBackground" id="modal">
      <form className="modalContainer  container-fluid">
        <div className="titleCloseBtn">
          <button type="button" onClick={closeModal}>
            X
          </button>
        </div>
        <Tests/>
      </form>
    </div>,
    document.getElementById('portal'),
  )
}

export default React.memo(Modal)

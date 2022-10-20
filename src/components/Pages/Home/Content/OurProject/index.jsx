/* eslint-disable react/no-array-index-key */
import React, {useContext} from 'react'

import WheelFortune from '../WheelFortune'
// import Fortuna from '../../../../../assets/images/wheelFortuna/fortuna.png'
import Happiness from '../../../../../assets/images/chainHappiness/chainHappiness.png'

import './styles.module.scss'

import { ModalContext } from '../../../../Base/ModalContainer'

const OurProjectContainer = () => {
  const { openModal } = useContext(ModalContext)

  return <OurProject onButtonClick={openModal} />
}

const OurProject = ({onButtonClick}) => {

//   const openTest = {
//     handleClick(){
//        this.setState({ style: { display : 'block' } });
//     }
// }
  
  return (
    <div className="our_projects">

      <div className="projects__block container-fluid testUkrLang">
        <div className="projects__content col-xxl-5 col-xl-6 col-lg-6 col-md-6 col-12">
          <div className="projects__text">
            <h2 className='projects__title'>Тестування з української мови</h2>
            <p className='projects__text_p'>Тести для отримання сертифікату якості знання мови</p>
          </div>
          <div className="projects__button">
            <button className="projects__knopka testUkrLang__button" type="button" onClick={onButtonClick}>
              Пройти тест
            </button>
          </div>
        </div>
        
        <div className="projects__img_block testUa_img col-xxl-7 col-xl-6 col-lg-6 col-md-6 col-12">
          
        </div>
      </div>
      
      {/* <div className="projects__block wheelFortune">
        <div className="projects__content col-lx-4 col-lg-5 col-md-5 col-12">
          <div className="projects__text">
            <h2 className='projects__title'>Колесо фортуни</h2>
            <p className='projects__text_p'>Онлайн-гра на знання міста з призами</p>  
          </div>
          <div className="projects__button">
            <button className="projects__knopka wheelFortune__button" type="button" >
              Пройти тест
            </button>
          </div>
        </div>

        <div className="projects__img_block col-lx-8 col-lg-7 col-md-7 col-12">
          <WheelFortune/>
        </div>
      </div> */}
      <WheelFortune/>
      {/* <div className="projects__block chainHappiness">
        <div className="projects__content col-lx-4 col-lg-5 col-md-5 col-12">
          <div className="projects__text">
            <h2 className='projects__title'>Ланцюг щастя</h2>
            <p className='projects__text_p'>Українці, об'єднуйтесь заради перемоги</p>
          </div>
          <div className="projects__button">
            <button className="projects__knopka chainHappiness__button" type="button">
              Пройти тест
            </button>
          </div>
        </div>
        <div className="projects__img_block col-lx-8 col-lg-7 col-md-7 col-12">
          <img src={Happiness} alt="" />
        </div>
      </div> */}
    </div>
  )
}

export default React.memo(OurProjectContainer)

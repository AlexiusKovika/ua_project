import React, { useState, useCallback } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import Roulette from "./Roulette";
import { generateNumber, useLocalStorage } from "../../../../services/helpers";
import {useModal} from "../../../../Base/ModalContainer";

// import idiSound from "../../../../sounds/idi.mp3";
// import startSound from "../../../../sounds/start.mp3";
// import endSound from "../../../../sounds/end.mp3";

const Fortune = () => {
  const presents = [
    "Література",
    "Історики",
    "Революція",
    "Козацтво",
    "Архітектура",
    "Громадські діячі",
    "Література",
    "Історики",
  ];

  const [currentRotate, setCurrentRotate] = useState(0);
  const [isAnimate, setIsAnimate] = useState(true);
  const [isRoll, setIsRoll] = useState(false);

  const { getItem, setItem } = useLocalStorage();
  const { openModal } = useModal();

  const generateUnique = () => {
    const historyRolls = JSON.parse(getItem('historyRolls')) || [];
    const number = generateNumber(0, 5);

    if (historyRolls.includes(number)) {
      return (historyRolls.length === 5) ? false : generateUnique();
    } else {
      setItem('historyRolls', JSON.stringify([...historyRolls, number]));
      return number;
    }
  }

  const onRoll = useCallback(() => {
    let randomNumber = generateUnique();

    setIsRoll(true);

    const randomRoll =
      360 * 50 + (360 / 8) * randomNumber + generateNumber(0, 360 / 8);

    setCurrentRotate(randomRoll);

    setTimeout(() => {
      setIsAnimate(false);
      setCurrentRotate(randomRoll % 360);

      setTimeout(() => {
        setIsRoll(false);
        setIsAnimate(true);
        openModal('wheelfortune')
      }, 1000);
    }, 5000);

  }, [currentRotate]);

  return (
    <div className="projects__block wheelFortune">
        <div className="projects__content col-lx-4 col-lg-5 col-md-5 col-12">
          <div className="projects__text">
            <h2 className='projects__title'>Колесо фортуни</h2>
            <p className='projects__text_p'>Онлайн-гра на знання міста з призами</p>  
          </div>
          <div className="projects__button">
            <button className="projects__knopka wheelFortune__button" type="button" onClick={onRoll}>
              Пройти тест
            </button>
            
          </div>
        </div>

        <div className="projects__img_block col-lx-8 col-lg-7 col-md-7 col-12">
          <div className={styles.container}>
            <div className={classNames(styles.overflow, { [styles.isRoll]: isRoll })}>
              <div className={styles.content}>
                <Roulette
                  isRoll={isRoll}
                  currentRotate={currentRotate}
                  isAnimate={isAnimate}
                  presents={presents}
                />
              </div>{" "}
            </div>

            {/* <div className={classNames(styles.footer, { [styles.isRoll]: isRoll })}>
              <buton className={styles.btn} onClick={onRoll}>
                Roll
              </buton>
            </div> */}
          </div>
        </div>
      </div>
  );
};

export default Fortune

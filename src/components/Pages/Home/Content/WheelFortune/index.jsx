import React, { useState, useCallback, useContext } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import Roulette from "./Roulette";
import { generateNumber } from "../../../../services/helpers";
import {ModalContext} from "../../../../Base/ModalContainer";

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
  const { hideModal, showModal } = useContext(ModalContext)

  const onRoll = useCallback(() => {
    setIsRoll(true);
    const randomNumber = generateNumber(0, 7);
    const randomWord = presents[randomNumber];
    // const uniqRandomWord = Array.from(new Set(randomWord));
    // const uniq = [];
    // const uniqRandomWord = randomNumber.push(uniq);

    // function makeGetRandomElement(initialArray) {
    //   var arr
    //   function randomIndex() {
    //    return Math.floor(Math.random() * arr.length)
    //   }
    //   function reinitArray() {
    //    arr = initialArray.slice()
    //   }
    //   reinitArray()
    //   return function getRandomElement() {
    //    if (arr.length === 0) reinitArray()
    //    return arr.splice(randomIndex(), 1)[0]
    //   }
    //  }
     
    //  let test = []
     
    //  // использование
    //  var getRandomElement = makeGetRandomElement([1, 2, 3, 4, 5, 6, 7])
    //  for (let i = 0; i < [1, 2, 3, 4, 5, 6, 7].length; i++) {
    //   test.push(getRandomElement())
    //  }
     
    //  console.log(test)

    const randomRoll =
      360 * 50 + (360 / 8) * randomNumber + generateNumber(0, 360 / 8);

    setCurrentRotate(randomRoll);

    // new Audio(idiSound).play();
    // new Audio(startSound).play();

    setTimeout(() => {
      setIsAnimate(false);
      setCurrentRotate(randomRoll % 360);

      setTimeout(() => {
        setIsRoll(false);
        setIsAnimate(true);
        hideModal()
        showModal()
        
        // new Audio(endSound).play();
      }, 1000);
      
      console.log(`${randomWord}`, `${randomNumber}`)
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

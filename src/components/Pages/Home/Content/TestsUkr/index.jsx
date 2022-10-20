import React, { useState } from 'react';
// import { flushSync } from 'react-dom';

const Tests = () => {

    const questions = [
        {
            questionText: 'Склад, який вимовляється з більшою силою голосу, називають..?', 
            answerOptions: [
                {answerText: 'наголошеним', isCorrect: true},
                {answerText: 'ненаголошеним', isCorrect: false},
                {answerText: 'сильним', isCorrect: false},
            ]
        },   
        {
            questionText: 'У якому рядку допущено помилку в правописі слова?', 
            answerOptions: [
                {answerText: 'поріг', isCorrect: false},
                {answerText: 'ніхті', isCorrect: true},
                {answerText: 'хліб', isCorrect: false},
            ]
        },
        {
            questionText: 'Велику літеру вжито неправильно у рядку', 
            answerOptions: [
                {answerText: 'місто Полтава', isCorrect: false},
                {answerText: 'вулиця Михайлівська', isCorrect: false},
                {answerText: 'річка десна', isCorrect: true},
            ]
        },
        {
            questionText: 'Не можна переносити з рядка в рядок слово', 
            answerOptions: [
                {answerText: 'їжак', isCorrect: true},
                {answerText: 'ходжу', isCorrect: false},
                {answerText: 'бур\'ян', isCorrect: false},
            ]
        },
        {
            questionText: 'Продовжіть речення. Допоможе навчитися правильно вимовляти звуки…', 
            answerOptions: [
                {answerText: 'пісня', isCorrect: false},
                {answerText: 'казка', isCorrect: false},
                {answerText: 'скоромовка', isCorrect: true},
            ]
        },
        {
            questionText: 'Продовжіть речення. Розмова двох осіб – це…', 
            answerOptions: [
                {answerText: 'діалог', isCorrect: true},
                {answerText: 'полілог', isCorrect: false},
                {answerText: 'монолог', isCorrect: false},
            ]
        },   
        {
            questionText: 'Знайдіть рядок, у якому всі слова означають ознаку предметів', 
            answerOptions: [
                {answerText: 'мед, маленький, зимовий', isCorrect: false},
                {answerText: 'солодкий, малий, добра', isCorrect: true},
                {answerText: 'сорока, літає, біла', isCorrect: false},
            ]
        },
        {
            questionText: 'У якому рядку букви я, ю, є позначають один звук?', 
            answerOptions: [
                {answerText: 'ключ, осіннє, сяйво', isCorrect: true},
                {answerText: 'маяк, грає, юшка', isCorrect: false},
                {answerText: 'ящик, єнот, весною', isCorrect: false},
            ]
        },
        {
            questionText: 'Знайдіть рядок, у якому слова неправильно поділено для переносу.', 
            answerOptions: [
                {answerText: 'ко-маха, огі-рок, зи-ма', isCorrect: false},
                {answerText: 'діду-сь, я-годи, школ-яр', isCorrect: true},
                {answerText: 'стеж-ка, тра-вень, вер-ба', isCorrect: false},
            ]
        },
        {
            questionText: 'Позначте рядок слів, протилежних за значенням до слова радість.', 
            answerOptions: [
                {answerText: 'смуток, сум', isCorrect: true},
                {answerText: 'забава, сміх', isCorrect: false},
                {answerText: 'скорзадоволення, веселощіомовка', isCorrect: false},
            ]
        },

        {
            questionText: 'Знайдіть іменник, який вживається тільки в однині:', 
            answerOptions: [
                {answerText: 'вулиця', isCorrect: false},
                {answerText: 'тиша', isCorrect: true},
                {answerText: 'дівчина', isCorrect: false},
                {answerText: 'спідниця', isCorrect: false},
            ]
        },   
        {
            questionText: 'Розділ науки про мову, що вивчає словосполучення і речення, це:', 
            answerOptions: [
                {answerText: 'синтаксис', isCorrect: true},
                {answerText: 'пунктуація', isCorrect: false},
                {answerText: 'фонетика', isCorrect: false},
                {answerText: 'лексикологія', isCorrect: false},
            ]
        },
        {
            questionText: 'За метою висловлювання речення бувають:', 
            answerOptions: [
                {answerText: 'розповідні, питальні, окличні', isCorrect: false},
                {answerText: 'розповідні, питальні, складні', isCorrect: false},
                {answerText: 'розповідні, питальні, спонукальні', isCorrect: true},
                {answerText: 'розповідні, окличні, спонукальні', isCorrect: false},
            ]
        },
        {
            questionText: 'На письмі пряма мова передається за допомогою:', 
            answerOptions: [
                {answerText: 'лапок', isCorrect: true},
                {answerText: 'дужок', isCorrect: false},
                {answerText: 'тире на початку', isCorrect: false},
                {answerText: 'тире з обох боків', isCorrect: false},
            ]
        },
        {
            questionText: 'Знайдіть слово, в якому пишеться м\'який знак:', 
            answerOptions: [
                {answerText: 'смієш…ся', isCorrect: false},
                {answerText: 'будуєт…ся', isCorrect: true},
                {answerText: 'хитаеш…ся', isCorrect: false},
                {answerText: 'дивиш…ся', isCorrect: false},
            ]
        },
        {
            questionText: 'Знайдіть слово, в якому пишеться буква ї:', 
            answerOptions: [
                {answerText: 'сер…ал', isCorrect: false},
                {answerText: 'ген…альний', isCorrect: false},
                {answerText: 'рад…ус', isCorrect: false},
                {answerText: 'моза…ка', isCorrect: true},
            ]
        },   
        {
            questionText: 'Знайдіть слово, в якому подвоюються приголосні:', 
            answerOptions: [
                {answerText: 'кла(с)', isCorrect: false},
                {answerText: 'то(н)а', isCorrect: true},
                {answerText: 'гру(п)а', isCorrect: false},
                {answerText: 'ко(л)ектив', isCorrect: false},
            ]
        },
        {
            questionText: 'Визначте рядок, у якому зазначено правильну кількість звуків в українській мові:', 
            answerOptions: [
                {answerText: '32', isCorrect: false},
                {answerText: '36', isCorrect: false},
                {answerText: '38', isCorrect: true},
                {answerText: '41', isCorrect: false},
            ]
        },
        {
            questionText: 'Позначте рядок, у якому в усіх словах пишеться і:', 
            answerOptions: [
                {answerText: 'г…рчиця, щ…тка, ж…нка', isCorrect: true},
                {answerText: 'к…слий, ч…стий, х…трий', isCorrect: false},
                {answerText: 'х…тати, к…дати, щ…рий', isCorrect: false},
                {answerText: 'заг…бель, к…піти, ч…пляти', isCorrect: false},
            ]
        },
        {
            questionText: 'Визначте рядок, у якому дієслова з не пишуться разом:', 
            answerOptions: [
                {answerText: 'не/змінювати, не/дібрати, не/вірити', isCorrect: false},
                {answerText: 'не/хтувати, не/волити, не/зчутися', isCorrect: true},
                {answerText: 'не/вразити, не/вянути, не/знати', isCorrect: false},
                {answerText: 'не/захистити, не/дбати, не/відповідати', isCorrect: false},
            ]
        },

        {
            questionText: 'Однакова кількість звуків і букв у кожному слові рядка :', 
            answerOptions: [
                {answerText: 'піджак, п\'єса, мільйон', isCorrect: false},
                {answerText: 'колія, дощ, льон', isCorrect: false},
                {answerText: 'ґрунт, щастя, їхній', isCorrect: false},
                {answerText: 'щедрий, сьогодні, Україна', isCorrect: false},
                {answerText: 'львів\'янин, юність, під\'їжджати', isCorrect: true},
            ]
        },   
        {
            questionText: 'На місці пропусків пишеться літера ґ в усіх словах рядка:', 
            answerOptions: [
                {answerText: 'а…ітація, …ринджоли, …удзик', isCorrect: false},
                {answerText: '…речаний, …азда, …ідний', isCorrect: false},
                {answerText: 'деле…ація, об…рунтувати, ве…етаріанець', isCorrect: false},
                {answerText: '…атунок, а…рус, …речний', isCorrect: true},
                {answerText: '…іпотенуза, ви…раш, відео…ра', isCorrect: false},
            ]
        },
        {
            questionText: 'Спрощення приголосних позначається на письмі в усіх словах рядка:', 
            answerOptions: [
                {answerText: 'якіс…ний, сер…цебиття, доброчес…ний', isCorrect: true},
                {answerText: 'очис…ний, індивідуаліс…ський, нещас…ний', isCorrect: false},
                {answerText: 'пристрас…ний, віс…ник, фігурис…ці', isCorrect: false},
                {answerText: 'хвас…нути, консультан…ський, дисиден…ство', isCorrect: false},
                {answerText: 'кількіс…ний, хрес…ний, студен…ці', isCorrect: false},
            ]
        },
        {
            questionText: 'Подвійний наголос має слово:', 
            answerOptions: [
                {answerText: 'листопад', isCorrect: false},
                {answerText: 'випадок', isCorrect: false},
                {answerText: 'доцент', isCorrect: false},
                {answerText: 'розбір', isCorrect: true},
                {answerText: 'новий', isCorrect: false},
            ]
        },
        {
            questionText: 'Помилку в написанні слова іншомовного походження допущено врядку:', 
            answerOptions: [
                {answerText: 'бюджет, марокканець, комісія', isCorrect: false},
                {answerText: 'олівє, альтруізм, епіграма', isCorrect: true},
                {answerText: 'дистриб\'ютор, масаж, інновація', isCorrect: false},
                {answerText: 'мільйон, конфеті, парашут', isCorrect: false},
                {answerText: 'інтер\'єр, апетит, імунітет', isCorrect: false},
            ]
        },
        {
            questionText: 'Фразеологізми наведено в усіх рядках ОКРІМ', 
            answerOptions: [
                {answerText: 'бити лихом об землю, земля обітована, дістати з-під землі', isCorrect: false},
                {answerText: 'голці ніде впасти, хоч голки збирай, голки не підточиш', isCorrect: false},
                {answerText: 'до сьомого поту, на сьомому небі, до сьомої ранку', isCorrect: true},
                {answerText: 'палицею кинути, встромляти палицю в колеса, палиця на два кінці', isCorrect: false},
                {answerText: 'наріжний камінь, на серці камінь, тримати камінь за пазухою', isCorrect: false},
            ]
        },   
        {
            questionText: 'Позначте речення, у якому за змістом можна вжити обидва слова, наведені в дужках:', 
            answerOptions: [
                {answerText: 'За інформацією уряду, торік рівень інфлянції (складав, становив) 4%', isCorrect: false},
                {answerText: 'Державна символіка формувалася впродовж (століть, сторіч)', isCorrect: true},
                {answerText: 'Комісія видала накази щодо виборчої (компанії, кампанії)', isCorrect: false},
                {answerText: 'Дотримання карантинних вимог перевіряють у (людних, людяних) місцях', isCorrect: false},
                {answerText: 'Цей (абонент, абонемент) дає нам право відвідувати басейн щосереди', isCorrect: false},
            ]
        },
        {
            questionText: 'З\'ясуйте значення фразеологізму «кирпу гнути»:', 
            answerOptions: [
                {answerText: 'підлещуватися', isCorrect: false},
                {answerText: 'сердитися', isCorrect: false},
                {answerText: 'хизуватися', isCorrect: true},
                {answerText: 'дурити', isCorrect: false},
                {answerText: 'залицятися', isCorrect: false},
            ]
        },
        {
            questionText: 'Закінчення -е (-є) у формі кличного відмінка мають усі іменники в рядку:', 
            answerOptions: [
                {answerText: 'друг, Григорій, пісня, Київ;', isCorrect: false},
                {answerText: 'земля, Зоя, директор, подруга', isCorrect: false},
                {answerText: 'художниця, козак, Степан, мрія', isCorrect: true},
                {answerText: 'Надія, школяр, добродій, Віктор', isCorrect: false},
                {answerText: 'хлопець, Іван, площа, товариш', isCorrect: false},
            ]
        },
        {
            questionText: 'Правильну відмінкову форму числівника сто вісімдесят сім наведено у рядку', 
            answerOptions: [
                {answerText: 'Р.в. ста вісімдесяти семи', isCorrect: true},
                {answerText: 'Д.в. сто вісімдесяти семи', isCorrect: false},
                {answerText: 'З.в. ста вісімдесят сім', isCorrect: false},
                {answerText: 'О.в. ста вісімдесятьма сіма', isCorrect: false},
                {answerText: 'М.в. (у) сто вісімдесяти семи', isCorrect: false},
            ]
        },
    ]

    /* It's working a piece code */
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [showScore, setShowScore] = useState(false)

    const handleAnswerOption = (isCorrect) => {
    
        if(isCorrect) {
            setScore(score + 1)
        }

        const nextQustion = currentQuestion + 1
        
        if(nextQustion < questions.length) {
            setCurrentQuestion(nextQustion)
        } else {
            setShowScore(true)
        }
        // currentQuestion++
        // setTimeout(nextQustion, 10000);      
    }

    return (
        <div className='tests container-fluid'>
            <div className='tests__container container-fluid'>
                {
                    showScore
                        ? <div className="tests__score col-lg-12 col-md-12 col-12">
                                <h2>Вірних відповідей {score} з {questions.length}</h2> 
                          </div>
                        
                        :  <div className="tests__content col-lg-12 col-md-12 col-12">
                                <div className="tests__progress_bar">
                                    <p className='quest__progress_number'>Питання {currentQuestion + 1} з {questions.length}</p>
                                    <div className='progress__bar'></div>
                                </div>
                
                                
                                <div className="test__questions">
                                    <div className="question__block">
                                        <h2>{questions[currentQuestion].questionText}</h2>
                                    
                                        <div className="answers__block container-fluid">
                                            
                                            {questions[currentQuestion].answerOptions.map(item => (
                            
                                                <div className='answer__block col-xl-2 col-lg-2 col-md-12 col-12 row'>
                                                    <div className='answer'>
                                                        <a className='answers' onClick={() => handleAnswerOption(item.isCorrect)}>{item.answerText}</a>
                                                    </div>
                                                </div>
                                                
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                }
            </div>
        </div>
    );
};

export default Tests;
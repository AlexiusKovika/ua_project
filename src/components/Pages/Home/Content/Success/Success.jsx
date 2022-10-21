import React from "react";
import { Button, Container } from 'react-bootstrap';
import './styles.module.scss'

const Success = () => {

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
        >
            <div className="d-flex flex-column align-items-center success__page">
                <h2 className="success__title">Вітаємо!</h2>
                <p className="success__text">Ви успішно пройшли тестування на відповідний рівень знань української мови. Ви можете завантажити Ваш сертифікат, натиснувши кнопку нижче. Електронна версія сертифікату вже надійшла на Вашу пошту.</p>
                
                <iframe width="560" height="315" src="https://www.youtube.com/embed/2uTMTyqQxl4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                <div className="success__footer d-flex align-items-center">
                    
                    <div className="success__mail_send d-flex align-items-center col-xl-9 col-lg-9 col-md-8 col-12">
                        <input
                            className='input'
                            placeholder='email'
                            type="email"
                            name='email'
                        />
                        <button
                            className="success__btn"
                            // variant={"outline-success"}
                        >
                            Надіслати на пошту
                        </button>
                    </div>
                    
                    <div className="success__down d-flex align-items-center col-xl-3 col-lg-3 col-md-4 col-12">
                        <button
                            className="success__btn"
                            // variant={"outline-success"}
                        >
                            Завантажити
                        </button>
                    </div>
                    
                </div>
                
            </div>

        </Container>

    );
}

export default Success;
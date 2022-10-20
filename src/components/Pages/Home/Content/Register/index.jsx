import React, { useEffect, useState } from 'react'
import MaskedInput from 'react-text-mask'
import { useForm } from "react-hook-form";


const Register = () => {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState()
    const [checked, setChecked] = useState();

    const [nameDirty, setNameDirty] = useState(false)
    const [lastNameDirtry, setLastNameDirty] = useState(false)
    const [emailDirtry, setEmailDirty] = useState(false)

    const [nameError, setNameError] = useState('Поле не може бути порожнім')
    const [lastNameError, setLastNameError] = useState('Поле не може бути порожнім')
    const [emailError, setEmailError] = useState('Поле не може бути порожнім')
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
            if (nameError || lastNameError ) {
            setFormValid(false)
        }
        else {
            setFormValid(true)
        }

    }, [nameError, lastNameError])

    const nameHandler = (e) => {
        setName(e.target.value)
        if (e.target.value.length < 2) {
            setNameError('Некоректна довжина')
            if (!e.target.value) {
                setNameError('Поле не може бути порожнім')
            }
        }
        else {
            setNameError('')
        }
    }
    const lastNameHandler = (e) => {
        setLastName(e.target.value)
        if (e.target.value.length < 2) {
            setLastNameError('Некоректна довжина')
            if (!e.target.value) {
                setLastNameError('Поле не може бути порожнім')
            }
        }
        else {
            setLastNameError('')
        }
    }
    const emailHandler = (e) => {
        setEmail(e.target.value)
        const res = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!res.test(String(e.target.value).toLowerCase())) {
            setEmailError('Не вірний email')
            // if (!e.target.value) {
            //     setEmailError('Поле не може бути порожнім')
            // }
        }
        else {
            setEmailError('')
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'name':
                setNameDirty(true)
                break
            case 'lastname':
                setLastNameDirty(true)
                break
            case 'email':
                setEmailDirty(true)
                break
        }
    }
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(JSON.stringify(data));
        setName("")
        setLastName("")
        setPhone("") 
        setEmail("")
        setGender("")
        setChecked(false)
    }

    return (
        <div className="register container-fluid d-flex">
            <h2>Для початку тестування пройдіть експрес-реєстацію</h2>
            <form className='register__contents d-flex' onSubmit={handleSubmit(onSubmit)}>

                <div className="register__upBlock col-lg-7 col-md-6 col-6 d-flex">
                    <div className="register__content">
                        <input
                            className='input'
                            type="text"
                            placeholder="Ім'я"
                            name='name'
                            value={name}
                            onBlur={e => blurHandler(e)}
                            onChange={e => nameHandler(e)}
                        />
                        {(nameDirty && nameError) && <div style={{ color: 'red' }}>{nameError}</div>}
                        <input
                            className='input'
                            placeholder='Прізвище'
                            type="text"
                            name='lastname'
                            value={lastName}
                            onBlur={e => blurHandler(e)}
                            onChange={e => lastNameHandler(e)}
                        />
                        {(lastNameDirtry && lastNameError) && <div style={{ color: 'red' }}>{lastNameError}</div>}
                    </div>

                    <div className="register__content">
                        <div>
                            <MaskedInput
                                className='input'
                                name='phone'
                                guide={true}
                                showMask={true}
                                mask={['+', '3', '8', '(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                                onBlur={e => blurHandler(e)}
                            />
                        </div>

                        <input
                            className='input'
                            placeholder='email'
                            type="email"
                            name='email'
                            value={email}
                            onBlur={e => blurHandler(e)}
                            onChange={e => emailHandler(e)}
                        />
                        {/* {(emailDirtry && emailError) && <div style={{ color: 'red' }}>{emailError}</div>} */}
                    </div>
                </div>

                <div className="register__box col-lg-7 col-md-6 col-6 d-flex">
                    <div className='checkbox__block d-flex'>
                        
                        <div style={{display:'flex', flexDirection:'column'}}>
                            <label className="checkbox__tap d-flex">
                                <input
                                    className='checkbox'
                                    type="radio"
                                    name="gender"
                                    value='male'
                                    checked={checked}
                                    onChange={e => setGender(e.target.value)}
                                    {...register("gender", { required: 'Выберите пол' })}
                                />
                                <span>Чоловіча</span>
                            </label>
                            {errors.gender && <span style={{ color: 'red', display:'flex' }}>{errors.gender.message}</span>}
                        </div>
                        

                        <div style={{display:'flex', flexDirection:'column'}}>
                            <label className="checkbox__tap d-flex">
                                <input
                                    className='checkbox'
                                    type="radio"
                                    name="gender"
                                    value='female'
                                    checked={checked}
                                    onChange={e => setGender(e.target.value)}
                                    {...register("gender", { required: 'Выберите пол' })}
                                />
                                <span>Жіноча</span>
                            </label>
                            {errors.gender && <span style={{ color: 'red' }}>{errors.gender.message}</span>}
                        </div>
                        
                    </div>

                    <div className="register__button_block">
                        <button
                            value='Submit'
                            type='submit'
                            className='register__button'
                            disabled={!formValid}
                            onClick={() => onSubmit}
                        >
                            Відправити
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}


export default Register
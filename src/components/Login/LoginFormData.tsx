import {Error,} from "../common/FormsControls/FormControls";
import styled from "styled-components";
import {login, NullableType} from "../../redax/authReducer";
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {FormikComponents} from "../../assets/FormikComponents";
import React from "react";
import {AppStoreType} from "../../redax/reduxStore";

const TextWrapper = styled.div`
  width: 15vw;
`
type FormikErrorType = {
    email?: string,
    password?: string,
    rememberMe?: boolean,
    captcha?: NullableType<string>
}

export const LoginForm = () => {
    const dispatch = useDispatch()
    const captchaUrl = useSelector<AppStoreType, NullableType<string>>(s => s.auth.captchaUrl)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
            captcha: null
        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 4) {
                errors.password = 'Invalid password';
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(login(values.email, values.password, values.rememberMe, values.captcha))
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <TextWrapper>
                <FormikComponents widthComponent={'10'} text={'E-mail: '} componentType={'input'} id="email"
                                  name="email" inputType="text"
                                  onChange={formik.handleChange} value={formik.values.email}/>
                {formik.errors.email ? <Error>{formik.errors.email}</Error> : null}
            </TextWrapper>
            <TextWrapper>
                <FormikComponents widthComponent={'10'} text={'Password: '} componentType={'input'} id="password"
                                  name="password" inputType="password"
                                  onChange={formik.handleChange} value={formik.values.password}/>
                {formik.errors.password ? <Error>{formik.errors.password}</Error> : null}
            </TextWrapper>
            <TextWrapper>
                <FormikComponents text={'Remember Me: '} componentType={'input'} id="password" name="password"
                                  inputType="checkbox"
                                  onChange={formik.handleChange} value={formik.values.password}/>
            </TextWrapper>
            {captchaUrl && <>
                <img src={captchaUrl} alt={'captchaUrl'}/>
                <FormikComponents text={"Captcha:"} componentType={'input'}
                                  id="captcha" name="captcha"
                                  inputType="captcha"
                                  onChange={formik.handleChange}/>
            </>}
            <button type={'submit'}>Login</button>
        </form>
    )
}


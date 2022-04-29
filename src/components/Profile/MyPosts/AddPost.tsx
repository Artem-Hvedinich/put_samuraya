import React from "react";
import styled from "styled-components";
import {useFormik} from "formik";
import {addPost} from "../../../redax/profileReducer";
import {useDispatch} from "react-redux";
import {FormikComponents} from "../../../assets/FormikComponents";
import {Button} from "../../../assets/styledComponent/Button";

const FormWrapper = styled.form<{ click: boolean }>`
  display: flex;
  align-items: center;
  opacity: ${({click}) => click ? 0 : 1};
  transition: all 1s;`

export const AddPost = ({click}: { click: boolean }) => {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            addPost: ''
        },

        onSubmit: values => {
            dispatch(addPost({addNewPost: values.addPost}))
        }
    })

    return (
        <FormWrapper click={click} onSubmit={formik.handleSubmit}>
            <FormikComponents name='addPost' id={'addPost'} widthComponent={'25'} heightComponent={'2'}
                              componentType={'textarea'}
                              inputType="password" onChange={formik.handleChange} value={formik.values.addPost}/>
            <Button bgColor={'#4d655b'} type={'submit'} width={4} height={1}>Add
                post</Button>
        </FormWrapper>
    )
}
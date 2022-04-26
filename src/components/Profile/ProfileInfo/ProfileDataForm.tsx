import React from "react";
import {useFormik} from "formik";
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {ProfileType, saveProfile} from "../../../redax/profileReducer";
import {Button} from "../../../assets/styledComponent/Button";

const InfoBlock = styled.div`
  position: fixed;
  width: 50vw;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 0 3px black;
  border-radius: 5px;
  padding: 1.5vw; `
const Error = styled.div`
  color: red`

export const ProfileDataForm = ({profile}: { profile: ProfileType }) => {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            ...profile,
            contacts: {
                github: '',
                vk: '',
                facebook: '',
                instagram: '',
                twitter: '',
                website: '',
                youtube: '',
                mainLink: '',
            }
        },
        validate: (values) => {
            const errors = {} as ProfileType;
            if (!values.fullName) {
                errors.fullName = 'Required';
            } else if (values.fullName.length < 2) {
                errors.fullName = 'Min length is 2 symbols';
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(saveProfile(values, false))
        }
    })

    return (
        <InfoBlock>
            <form onSubmit={formik.handleSubmit}>

                <FormikComponent componentType={'input'} id="fullName" name="fullName" inputType="text"
                                 onChange={formik.handleChange} value={formik.values.fullName}
                                 text={'Full Name: '}/>
                {formik.touched.fullName && formik.errors.fullName ? <Error>{formik.errors.fullName}</Error> : null}

                <FormikComponent componentType={'input'} id="lookingForAJob" name="lookingForAJob"
                                 inputType="checkbox"
                                 onChange={formik.handleChange} text={'Looking for a job:'}/>
                <FormikComponent componentType={'textarea'} id="lookingForAJobDescription"
                                 name="lookingForAJobDescription"
                                 onChange={formik.handleChange} value={formik.values.lookingForAJobDescription}
                                 text={'Job description:'}/>
                Contact:
                {profile.contacts && Object.keys(profile.contacts).map((key) => {
                    console.log(`contacts.${key}`)
                    return <div key={key}>
                        <FormikComponent key={key} componentType={"input"} id={`contact.${key}`}
                                         name={`contacts.${key}`} text={key} onChange={formik.handleChange}
                            // value={profile.contacts[key] as string}
                        />
                    </div>
                })}

                <FormikComponent componentType={'textarea'} id="aboutMe" name="aboutMe"
                                 onChange={formik.handleChange} value={formik.values.aboutMe}
                                 text={'About me:'}
                />
                <div style={{width: '100%', display: 'flex', justifyContent: 'center', paddingTop: '1vw'}}>
                    <Button bgColor={'rgba(77, 101, 91, 0.78);'} width={4} height={1} type="submit">Save</Button>
                </div>
            </form>
        </InfoBlock>
    )
}


const FormikComponentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1vw;
  width: 100%;`
const Input = styled.input`
  width: 20vw`
const Textarea = styled.textarea`
  width: 20vw;
  height: 5vw;
  resize: none;`

const LabelWrapper = styled.span`
`

export type ComponentType = 'input' | 'textarea'

export const FormikComponent = ({id, name, inputType, onChange, value, text, componentType}
                                    : {
    id: string, name: string, inputType?: string,
    onChange: any, value?: string, text: string, componentType: ComponentType
}) => {

    return <FormikComponentWrapper>
        <LabelWrapper>
            <label htmlFor={id}>{text}</label>
        </LabelWrapper>
        <span>
            {componentType === 'input' &&
                <Input id={id} name={name} type={inputType}
                       onChange={onChange} value={value}
                />}
            {componentType === 'textarea' &&
                <Textarea id={id} name={name}
                          onChange={onChange} value={value}
                />}
        </span>
    </FormikComponentWrapper>
}
import React from "react";
import {useFormik} from "formik";
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {ProfileType, saveProfile} from "../../../../redax/profileReducer";
import {Button} from "../../../../assets/styledComponent/Button";
import {FormikComponents} from "../../../../assets/FormikComponents";


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
        <ModalWrapper>
            <InfoBlock>
                <form onSubmit={formik.handleSubmit}>

                    <FormikComponents widthComponent={'20'} componentType={'input'} id="fullName" name="fullName"
                                      inputType="text"
                                      onChange={formik.handleChange} value={formik.values.fullName}
                                      text={'Full Name: '}/>
                    {formik.touched.fullName && formik.errors.fullName ? <Error>{formik.errors.fullName}</Error> : null}

                    <FormikComponents widthComponent={'20'} componentType={'textarea'} id="aboutMe" name="aboutMe"
                                      onChange={formik.handleChange} value={formik.values.aboutMe}
                                      text={'About me:'}
                    />
                    <FormikComponents widthComponent={'20'} componentType={'input'} id="lookingForAJob"
                                      name="lookingForAJob"
                                      inputType="checkbox"
                                      onChange={formik.handleChange} text={'Looking for a job:'}/>

                    <FormikComponents widthComponent={'20'} componentType={'textarea'} id="lookingForAJobDescription"
                                      name="lookingForAJobDescription"
                                      onChange={formik.handleChange} value={formik.values.lookingForAJobDescription}
                                      text={'Job description:'}/>
                    <span style={{fontSize:'0.8vw'}}>Contact:</span>
                    {profile.contacts && Object.keys(profile.contacts).map((key) => {
                        console.log(`contacts.${key}`)
                        return <div key={key}>
                            <FormikComponents widthComponent={'20'} key={key} componentType={"input"}
                                              id={`contact.${key}`}
                                              name={`contacts.${key}`} text={key} onChange={formik.handleChange}
                            />
                        </div>
                    })}

                    <div style={{width: '100%', display: 'flex', justifyContent: 'center', paddingTop: '1vw'}}>
                        <Button bgColor={'rgba(77, 101, 91, 0.78);'} width={4} height={1} type="submit">Save</Button>
                    </div>
                </form>
            </InfoBlock>
        </ModalWrapper>
    )
}

const ModalWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: #e0dede;`
const InfoBlock = styled.div`
  position: fixed;
  width: 40vw;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 0 3px black;
  border-radius: 5px;
  padding: 1.5vw; `
const Error = styled.div`
  color: red`
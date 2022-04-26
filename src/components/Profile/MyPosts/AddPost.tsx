import React from "react";
import styled from "styled-components";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormWrapper} from "../../../assets/Wrapper";
import {maxLengthCreator, minLengthCreator, requiredField} from "../../../utils/valubator/validators";
import {Textarea} from "../../common/FormsControls/FormControls";

const Text = styled(Field)`
  width: 35vw;
  height: 10vw;
  resize: none;
  font-size: 15px;
`

type FromDataType = {
    addNewPost: string
}

const maxLength10 = maxLengthCreator(10)
const minLength1 = minLengthCreator(1)

const AddPost: React.FC<InjectedFormProps<FromDataType>> = (props: any) => {
    return (
        <FormWrapper onSubmit={props.handleSubmit}>
            <Text name='addNewPost' component={Textarea}
                  placeholder='Enter You Comment' validate={[requiredField, maxLength10, minLength1]}/>
            <div>
                {/*<button>Add post</button>*/}
            </div>
        </FormWrapper>
    )
}
export const AddPostRedux = reduxForm<FromDataType>({form: 'addNewPost'})(AddPost)
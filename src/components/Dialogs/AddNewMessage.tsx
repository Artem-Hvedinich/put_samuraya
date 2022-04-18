import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormWrapper} from "../../assets/Wrapper";
import {Textarea} from "../common/FormsControls/FormControls";
import {maxLengthCreator, minLengthCreator, requiredField} from "../../utils/valubator/validators";


type FromDataType = {
    newMessageBody: string
}

const maxLength10 = maxLengthCreator(50)
const minLength1 = minLengthCreator(1)
const AddMessageForm: React.FC<InjectedFormProps<FromDataType>> = (props: any) => {

    return (
        <FormWrapper onSubmit={props.handleSubmit}>
            <Field name='newMessageBody' validate={[requiredField, maxLength10, minLength1]}
                   component={Textarea} placeholder='Enter You Message'/>
            <div>
                <button>Send</button>
            </div>
        </FormWrapper>
    )
}

export const AddMessageFormRedux = reduxForm<FromDataType>({form: 'addMessageForm'})(AddMessageForm)
import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormControls";

type FromDataType = {
    newMessageBody: string

}
const AddMessageForm: React.FC<InjectedFormProps<FromDataType>> = (props: any) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field name='newMessageBody'
                   component={Textarea} placeholder='Enter You Message'/>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export const AddMessageFormRedux = reduxForm<FromDataType>({form: 'addMessageForm'})(AddMessageForm)
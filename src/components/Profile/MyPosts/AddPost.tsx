import React from "react";
import styled from "styled-components";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
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

const AddPost: React.FC<InjectedFormProps<FromDataType>> = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Text name='addNewPost' component={Textarea}
                  placeholder='Enter You Comment'/>
            <div>
                {/*<button>Add post</button>*/}
            </div>
        </form>
    )
}
export const AddPostRedux = reduxForm<FromDataType>({form: 'addNewPost'})(AddPost)
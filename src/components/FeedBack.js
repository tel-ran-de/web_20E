import React, {useState} from 'react';
import Field from "./Field";

const fieldsInit = {
    fName: '',
    lName: '',
    email: ''
}

const FeedBack = () => {

    const [fields, setFields] = useState(fieldsInit)

    const changeHandler = event => {
        setFields( fields => ({...fields, [event.target.id]:event.target.value}) );
    }

    return (
        <div>
            <Field
                placeholder="Enter your First Name"
                fieldValue={fields.fName}
                onChange={changeHandler}
                id="fName"
            />
            <Field
                placeholder="Enter your Last Name"
                fieldValue={fields.lName}
                onChange={changeHandler}
                id="lName"
            />
            <Field
                placeholder="Enter your Email Address"
                fieldValue={fields.email}
                onChange={changeHandler}
                id="email"
            />
            <div>
                {fields.fName} {fields.lName} ({fields.email})
            </div>
        </div>
    );
}

export default FeedBack;
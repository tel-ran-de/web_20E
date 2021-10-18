import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";

const initialFormFields = {
    name: '',
    price: '',
    unlimSupport: false,
    space: '',
    usersPerProject: '',
    emailIntegration: false,
    unlimDownload: false
}


const AddNew = () => {

    const [fields, setFields] = useState(initialFormFields)
    const dispatch = useDispatch()
    const history = useHistory()

    const onInputChangeHandler = event => {
        setFields(fields => {
            return {...fields, [event.target.name]: event.target.value}
        })
    }

    const onCheckboxChangeHandler = event => {
        setFields(fields => {
            return {...fields, [event.target.name]: !fields[event.target.name]}
        })
    }

    const onSubmitHandler = event => {
        event.preventDefault()
        dispatch({
            type: 'ADD_NEW_PLAN',
            payload: {
                ...fields,
                id: Date.now()
            }
        })
        setFields(initialFormFields)
        history.push('/')
    }

    return (
        <section className="addNewForm">
            <div className="container">
                <form onSubmit={onSubmitHandler}>
                    <div className="field-wrap">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" value={fields.name} onChange={onInputChangeHandler}/>
                    </div>
                    <div className="field-wrap">
                        <label htmlFor="price">Price</label>
                        <input type="text" name="price" id="price" value={fields.price} onChange={onInputChangeHandler}/>
                    </div>
                    <div className="field-wrap">
                        <label htmlFor="space">Space</label>
                        <input type="text" name="space" id="space" value={fields.space} onChange={onInputChangeHandler}/>
                    </div>
                    <div className="field-wrap">
                        <label htmlFor="usersPerProject">User per Project</label>
                        <input type="text" name="usersPerProject" id="usersPerProject" value={fields.usersPerProject} onChange={onInputChangeHandler}/>
                    </div>
                    <div className="field-wrap">
                        <label htmlFor="unlimSupport">Unlimited Support</label>
                        <input type="checkbox" name="unlimSupport" id="unlimSupport" value={fields.unlimSupport} onChange={onCheckboxChangeHandler}/>
                    </div>
                    <div className="field-wrap">
                        <label htmlFor="emailIntegration">Email Integration</label>
                        <input type="checkbox" name="emailIntegration" id="emailIntegration" value={fields.emailIntegration} onChange={onCheckboxChangeHandler}/>
                    </div>
                    <div className="field-wrap">
                        <label htmlFor="unlimDownload">Unlimited Download</label>
                        <input type="checkbox" name="unlimDownload" id="unlimDownload" value={fields.unlimDownload} onChange={onCheckboxChangeHandler}/>
                    </div>
                    <div className="btn-group">
                        <button type="submit" className="btn btn-add">Add</button>
                    </div>

                </form>
            </div>
        </section>
    )
}

export default AddNew
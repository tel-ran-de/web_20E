import React from 'react'
import { useForm } from 'react-cool-form';
import Field from "./Field";

export default (props) => {

    const { form, use } = useForm({
        defaultValues: {fName: "", lName: "", email: "", postId:5},
        onSubmit: (values) => console.log(JSON.stringify(values))
    });

    const errors = use("errors", {errorWithTouched: true});

    return (
        <div className="container">
            <form ref={form} noValidate>
                <Field
                    label="Your First Name"
                    id="fName"
                    name="fName"
                    placeholder="Enter Your First Name"
                    required
                    error={errors.fName}
                />
                <Field
                    label="Your Last Name"
                    id="lName"
                    name="lName"
                    placeholder="Enter Your Last Name"
                    required
                    error={errors.lName}
                />
                <Field
                    label="Your Email"
                    id="email"
                    name="email"
                    placeholder="your-email@domain.com "
                    required
                    error={errors.email}
                />
                <input type="submit" className="btn btn-success" value="Go!" />
            </form>
        </div>
    )
}
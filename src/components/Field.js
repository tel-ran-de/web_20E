import React from 'react'

export default ({label, id, error,  ...rest}) => (
    <div className="mb-3">
        <label htmlFor={id} className="form-label">{label}</label>
        <input type="text" className="form-control" id={id} {...rest} />
        {error && <p className="alert alert-danger">{error}</p>}
    </div>
)
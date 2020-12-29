import React from 'react'

const InputText = ({ id, label, name, type, handleChange, value }) => {
    return (
        <div className="field">
            <label className="label" htmlFor={id}>
                {label}
            </label>
            <div className="control">
                <input
                    id={id}
                    className="input"
                    name={name}
                    type={type}
                    onChange={handleChange}
                    value={value}
                />
            </div>
        </div>
    )
}

export default InputText

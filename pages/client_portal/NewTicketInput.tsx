import React from 'react';

const NewTicketInput = () => {

    const handleSubmitForm = async (event) => {
        event.preventDefault()
        const {
            name,
            email,
            description
        } = event.target
        const res = await fetch('/api/ticket', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name.value,
                email: email.value,
                description: description.value
            }),
        })
    }


    return (
        <div className="section">
            <h1>Create a new ticket</h1>
            <form style={{
                display: "grid",
                columnGap: 10,
                rowGap: 10,
            }} onSubmit={handleSubmitForm}>
                <div className="form_input">
                    <label>Name</label>
                    <input name="name" />
                </div>
                <div className="form_input">
                    <label>Email</label>
                    <input name="email"/>
                </div>
                <div className="form_input">
                    <label>Description</label>
                    <textarea name="description"/>
                </div>
                <button style={{width: 'fit-content'}}>Submit!</button>
            </form>
        </div>
    );
};

export default NewTicketInput;

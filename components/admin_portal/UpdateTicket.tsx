import React from 'react';
import Select from "react-select";
import {useRouter} from "next/router";

const UpdateTicket = ({ticket, updateCallback}) => {

    const statusOptions = [
        { value: 'clixtltqo0000gne7bw46f6ec', label: 'New', isDisabled: true },
        { value: 'clixtltqo0002gne7632ordsd', label: 'in Progress' },
        { value: 'clixtltqo0004gne74sy67hqg', label: 'Resolved' },
    ]


    const handleFormSubmit = async (event) => {
        event.preventDefault()
        const {
            newStatus,
            response
        } = event.target
        if (!response.value || !newStatus.value) {
            alert('Please select status and fill response to ticket')
        }
        const res = await fetch('/api/adminTicket', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: ticket.id,
                status: newStatus.value,
                response: response.value
            }),
        })
        if (res.status === 200) {
            alert('Successfully updated ticket!')
            updateCallback()
        }
    }

    return (

        <div>
            <form className="form" onSubmit={handleFormSubmit}>
                <div className="form_input">
                    <label>Set Status</label>
                    <Select
                        name="newStatus"
                        options={statusOptions}
                        defaultValue={statusOptions.find(res => res.value === ticket.statusId)}
                    />
                </div>
                <div className="form_input">
                    Response to Ticket
                    <textarea name="response" required />
                </div>
                <button>Submit!</button>
            </form>
            <style jsx>{`
            form {
              box-sizing: border-box;
              padding: 2rem;
              display: grid;
            }
            .form_input {
                margin-bottom: 10px;
            }
        `}</style>
        </div>
    );
};

export default UpdateTicket;

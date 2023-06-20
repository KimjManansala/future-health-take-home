import React from 'react';
import Select from "react-select";
import {useRouter} from "next/router";
import Link from "next/link";

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
        } else {
            try {
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
            } catch (error) {
                console.error(error)
                alert('Unable to update Ticket')
            }
        }
    }

    return (
        <div className="border-top p-2">
            <form onSubmit={handleFormSubmit}>
                <div className="form-floating mb-3">
                    <textarea
                        className="form-control"
                        id="floatingInputResponse"
                        name="response"
                        required
                    />
                    <label htmlFor="floatingInputResponse">Response</label>
                </div>
                <div className="mb-3">
                    <label>Set Status</label>
                    <Select
                        name="newStatus"
                        options={statusOptions}
                        defaultValue={statusOptions.find(res => res.value === ticket.statusId)}
                        id="floatingInputStatus"
                    />
                </div>
                <div className="col-auto">
                    <button className="btn btn-primary mx-1 btn-sm">Submit!</button>
                    <Link href="/admin_portal">
                        <button className="btn btn-secondary btn-sm" type="reset">Cancel</button>
                    </Link>
                </div>
            </form>
            <style jsx>{`
        `}</style>
        </div>
    );
};

export default UpdateTicket;

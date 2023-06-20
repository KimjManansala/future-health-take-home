import React from 'react';
import UpdateTicket from "./UpdateTicket";

const TicketInfoAndAction = ({ticket, updateCallback}) => {
    return (
        <>
            <ul className="list-group list-group-flush">
                 <li className="list-group-item"><span className="fw-bold">Email:</span> {ticket.email}</li>
                 <li className="list-group-item"><span className="fw-bold">Name:</span> {ticket.name}</li>
                 <li className="list-group-item"><span className="fw-bold">Description:</span> {ticket.description}</li>
                 <li className="list-group-item"><span className="fw-bold">Status:</span> {ticket.status.status}</li>
            </ul>
            <UpdateTicket ticket={ticket} updateCallback={updateCallback} />
            <style jsx>{`
                .list-key {
                    font-weight: bold;
                }
                .detail {
                    padding: 5px;
                }
            `}</style>
        </>
    );
};

export default TicketInfoAndAction;

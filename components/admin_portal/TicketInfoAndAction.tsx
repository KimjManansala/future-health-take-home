import React from 'react';
import UpdateTicket from "./UpdateTicket";

const TicketInfoAndAction = ({ticket}) => {
    return (
        <div className="text-left">
            <ul>
                <p className="detail"><span className="list-key">Email:</span> {ticket.name}</p>
                <p className="detail"><span className="list-key">Description:</span> {ticket.description}</p>
                <p className="detail"><span className="list-key">Status:</span> {ticket.status.status}</p>
                <p className="detail"><span className="list-key">Reported User:</span> {ticket.createdBy.firstname} {ticket.createdBy.lastname}</p>
                <p className="detail"><span className="list-key">Reported User Email:</span> {ticket.createdBy.email}</p>
            </ul>
            <UpdateTicket ticket={ticket}/>
            <style jsx>{`
                .list-key {
                    font-weight: bold;
                }
            `}</style>
        </div>
    );
};

export default TicketInfoAndAction;

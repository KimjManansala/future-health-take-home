import React from 'react';
import Ticket from "./Ticket";

interface IExistingTicket {
    tickets: any[]
}

const ExistingTicket: React.FC<IExistingTicket> = ({tickets}) => {
    return (
        <div className="section">
            <h1>My Tickets</h1>
            <main className="d-flex flex-wrap justify-content-left align-items-start">
                {tickets.map((ticket, index) => <Ticket key={ticket.id} ticket={ticket} ticketNumber={index + 1} />)}
            </main>
            <style jsx>{`
            `}</style>
        </div>
    );
};

export default ExistingTicket;

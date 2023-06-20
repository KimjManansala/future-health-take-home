import React from 'react';
import Ticket from "./Ticket";
import Loading from "../common/Loading";

interface IExistingTicket {
    tickets: any[]
}

const ExistingTicket: React.FC<IExistingTicket> = ({tickets}) => {
    return (
        <div className="card mb-4">
            <div className="card-header">
                My Tickets
            </div>
            <main className="d-flex flex-wrap justify-content-left align-items-start justify-content-center">
                <Loading isLoading={!tickets.length}>
                    {tickets.map((ticket, index) => <Ticket key={ticket.id} ticket={ticket} ticketNumber={index + 1} />)}
                </Loading>
            </main>
            <style jsx>{`
            `}</style>
        </div>
    );
};

export default ExistingTicket;

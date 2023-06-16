import React from 'react';
import Ticket from "./Ticket";

interface IExistingTicket {
    tickets: any[]
}

const ExistingTicket: React.FC<IExistingTicket> = ({tickets}) => {
    return (
        <div className="section">
            <h1>Existing Tickets</h1>
            <main>
                {tickets.map((ticket) => <>
                    <Ticket ticket={ticket}/>
                </>)}
            </main>
        </div>
    );
};

export default ExistingTicket;

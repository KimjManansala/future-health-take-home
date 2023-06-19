import React from 'react';
import Ticket from "./Ticket";

interface IExistingTicket {
    tickets: any[]
}

const ExistingTicket: React.FC<IExistingTicket> = ({tickets}) => {
    return (
        <div className="section">
            <h1>My Tickets</h1>
            <main>
                {tickets.map((ticket) => <>
                    <Ticket ticket={ticket}/>
                </>)}
            </main>
            <style jsx>{`
                main {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: stretch;
                }
            `}</style>
        </div>
    );
};

export default ExistingTicket;

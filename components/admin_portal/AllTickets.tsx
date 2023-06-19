import React from 'react';
import Ticket from "../client_portal/Ticket";
import AdminTicket from "./AdminTicket";

interface IAllTickets {
    tickets: any[],
    selectedTicketId?: string
}

const AllTickets: React.FC<IAllTickets> = ({ tickets, selectedTicketId }) => {
    return (
        <div className="section">
            <h1>My Tickets</h1>
            <main>
                {tickets.map((ticket) => <>
                    <AdminTicket ticket={ticket} selectedTicketId={selectedTicketId}/>
                </>)}
            </main>
        </div>
    );
};

export default AllTickets;

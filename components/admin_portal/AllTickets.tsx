import React from 'react';
import Ticket from "../client_portal/Ticket";
import AdminTicket from "./AdminTicket";

interface IAllTickets {
    tickets: any[],
    selectedTicketId?: string,
    updateCallback: () => void;
}

const AllTickets: React.FC<IAllTickets> = ({ tickets, selectedTicketId, updateCallback }) => {
    return (
        <div className="section">
            <h1>All Tickets</h1>
            <main>
                <div className="card-parent">
                    {tickets.map((ticket) => <>
                        <AdminTicket ticket={ticket} selectedTicketId={selectedTicketId} updateCallback={updateCallback} />
                    </>)}
                </div>
            </main>
            <style jsx>{`
                .card-parent {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: stretch;
                }
            `}</style>
        </div>
    );
};

export default AllTickets;

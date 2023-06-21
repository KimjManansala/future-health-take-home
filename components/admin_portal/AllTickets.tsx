import React from 'react';
import Ticket from "../client_portal/Ticket";
import AdminTicket from "./AdminTicket";
import Loading from "../common/Loading";

interface IAllTickets {
    tickets: any[],
    selectedTicketId?: string,
    updateCallback: (ticket: any) => void;
}

const AllTickets: React.FC<IAllTickets> = ({ tickets, selectedTicketId, updateCallback }) => {
    return (
        <div className="card mb-4">
            <div className="card-header">
                All Tickets
            </div>
            <main className="d-flex flex-wrap justify-content-left align-items-start">
                <Loading isLoading={!tickets.length}>
                    {tickets.map((ticket) => <AdminTicket key={ticket.id} ticket={ticket} selectedTicketId={selectedTicketId} updateCallback={updateCallback} />
                    )}
                </Loading>
            </main>
            <style jsx>{`
              
            `}</style>
        </div>
    );
};

export default AllTickets;

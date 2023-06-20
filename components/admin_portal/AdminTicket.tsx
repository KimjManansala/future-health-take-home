import React from 'react';
import Link from "next/link";
import TicketInfoAndAction from "./TicketInfoAndAction";

const AdminTicket = ({ticket, selectedTicketId, updateCallback}) => {
    return (
        <div>

                <div className="card">
                    <p className="title">Ticket from: {ticket.name}</p>
                    {selectedTicketId !== ticket.id ? (
                        <div className="info-button">
                            <Link href={`/admin_portal/${ticket.id}`}>Click for more info</Link>
                        </div>
                        ):(
                        <TicketInfoAndAction ticket={ticket} updateCallback={updateCallback} />
                    )}
                </div>
            <style jsx>
                {`
                    .card {
                        flex: 0 0 200px;
                        margin: 10px;
                        border: 1px solid #ccc;
                        box-shadow: 2px 2px 6px 0px  rgba(0,0,0,0.3);
                        display: flex;
                        flex-direction: column;
                        max-width: 100%;
                        
                    }
                    .title {
                        padding: 5px;
                        text-align: center;
                    }
                    .info-button {
                        padding: 5px;
                        margin: auto;
                        margin-bottom: 10px;
                        width: fit-content;
                    }
                  
                `}
            </style>
        </div>
    );
};

export default AdminTicket;

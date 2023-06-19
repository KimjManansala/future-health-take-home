import React from 'react';
import Link from "next/link";
import TicketInfoAndAction from "./TicketInfoAndAction";

const AdminTicket = ({ticket, selectedTicketId}) => {
    return (
        <div>
            <div className="card">
                <p className="title">{ticket.name}</p>
                {selectedTicketId !== ticket.id ? (
                    <div className="info-button">
                        <Link href={`/admin_portal/${ticket.id}`}>Click for more info</Link>
                    </div>
                    ):(
                    <TicketInfoAndAction ticket={ticket} />
                )}

            </div>
            <style jsx>
                {`
                    .card {
                        width: 30%;
                        margin: 5px;
                        padding: 5px
                        display: flex;
                        flex-direction: column;
                        border: 1px grey solid;
                        
                    }
                    .title {
                        padding: 5px;
                        text-align: center;
                    }
                    .info-button {
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

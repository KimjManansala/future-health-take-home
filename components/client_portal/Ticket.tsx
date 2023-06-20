import React, {useState} from 'react';
import {bold} from "kleur/colors";

const Ticket = ({ticket, ticketNumber}) => {
    const [isExpand, setIsExpand] = useState<boolean>(false);
    const collapseBodyId = `collapse-body-${ticket.id}`
    return (
        <>
                <div className="card ">
                    <div className="card-body">
                        <h5 className="card-title">Ticket #{ticketNumber}</h5>
                        {isExpand && (
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><span className="fw-bold">Name:</span> {ticket.name}</li>
                                <li className="list-group-item"><span className="fw-bold">Email:</span> {ticket.email}</li>
                                <li className="list-group-item"><span className="fw-bold">Description:</span> {ticket.description}</li>
                                <li className="list-group-item"><span className="fw-bold">Status:</span> {ticket.status.status}</li>
                            </ul>
                        )}
                        <button className="btn btn-primary" onClick={() => {setIsExpand(!isExpand)}}>{!isExpand? 'Expand' : 'Minimize'}</button>
                    </div>
                </div>
            <style jsx>{`
            .card {
                max-width: 350px;
                margin: 5px;
                
            }
            `}</style>
        </>
    );
};

export default Ticket;

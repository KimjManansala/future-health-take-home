import React, {useState} from 'react';
import {bold} from "kleur/colors";

const Ticket = ({ticket, ticketNumber}) => {
    const [isExpand, setIsExpand] = useState<boolean>(false);
    return (
        <div>
            <div>
                <div className="card">
                    <div>
                        <h3>Ticket #{ticketNumber}</h3>
                        {!isExpand && (
                        <button onClick={() => {setIsExpand(!isExpand)}}>Click for more info</button>
                        )}
                    </div>
                    {isExpand && (
                        <div>
                            <p className="detail">Name: {ticket.name}</p>
                            <p className="detail">Email: {ticket.email}</p>
                            <p className="detail">Description: {ticket.description}</p>
                            <p className="detail">Status: {ticket.status.status}</p>
                            <button onClick={() => {setIsExpand(!isExpand)}}>Minimize</button>
                        </div>
                    )}
                </div>
            </div>
            <style jsx>{`

            .title {
              font-size: 1.5em;

              text-align: center;
              margin: 0;
            }
            .detail {
                font-size: small;
                text-align: left;
            }
            .card {
                flex: 0 0 200px;
                margin: 10px;
                border: 1px solid #ccc;
                box-shadow: 2px 2px 6px 0px  rgba(0,0,0,0.3);
                display: flex;
                flex-direction: column;
                max-width: 100%;
                padding: 5px;
                
            }
            `}</style>
        </div>
    );
};

export default Ticket;

import React from 'react';

const Ticket = ({ticket, ticketNumber}) => {
    return (
        <div>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <h3>Ticket #{ticketNumber}</h3>
                        <p>Click for more info</p>
                    </div>
                    <div className="flip-card-back">
                        <p className="title">{ticket.name}</p>
                        <p className="detail">Email: {ticket.email}</p>
                        <p className="detail">Description: {ticket.description}</p>
                        <p className="detail">Status: {ticket.status.status}</p>
                    </div>
                </div>
            </div>
            <style jsx>{`
              .flip-card {
              padding: 5px;
              background-color: transparent;
              width: 190px;
              height: 127px;
              perspective: 1000px;
              font-family: sans-serif;
            }
            
            .title {
              font-size: 1.5em;

              text-align: center;
              margin: 0;
            }
            .detail {
                font-size: small;
                text-align: left;
            }
            
            .flip-card-inner {
              position: relative;
              width: 100%;
              height: 100%;
              text-align: center;
              transition: transform 0.8s;
              transform-style: preserve-3d;
            }
            
            .flip-card:hover .flip-card-inner {
              transform: rotateY(180deg);
            }
            
            .flip-card-front, .flip-card-back {
              // box-shadow: 0 8px 14px 0 rgba(0,0,0,0.2);
              position: absolute;
              display: flex;
              flex-direction: column;
              justify-content: center;
              width: 100%;
              height: 100%;
              -webkit-backface-visibility: hidden;
              backface-visibility: hidden;
              border: 1px solid grey;
              // border-radius: 1rem;
            }
            
            .flip-card-front {
              color: black;
            }
            
            .flip-card-back {
              color: black;
              transform: rotateY(180deg);
              padding: 5px
            }
            `}</style>
        </div>
    );
};

export default Ticket;

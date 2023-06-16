import ExistingTicket from "../../components/client_portal/ExistingTicket";
import React, {useEffect, useState} from "react";
import Layout from "../../components/Layout";
import NewTicketInput from "../../components/client_portal/NewTicketInput";

const ClientPortal = () => {
    const [tickets, setTickets] = useState<any[]>([])

    const handleGetTickets = async () => {
        const res = await fetch('/api/ticket', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await res.json()
        setTickets(data.props.result)
    }
    const newTicketCallback = () => {
        handleGetTickets();
    }

    useEffect(() => {
        handleGetTickets()
    }, [])
    return (
        <Layout>
            <div className="page">
                <ExistingTicket tickets={tickets}/>
                <NewTicketInput newTicketCallback={newTicketCallback}/>
            </div>
        </Layout>
    );
};

export default ClientPortal;

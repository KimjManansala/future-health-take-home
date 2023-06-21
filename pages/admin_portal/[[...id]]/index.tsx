import React, {useEffect, useState} from 'react';
import Layout from "../../../components/Layout";
import {mockClientUserId} from "../../../common";
import AllTickets from "../../../components/admin_portal/AllTickets";
import {useRouter} from "next/router";
import ticket from "../../../components/client_portal/Ticket";

const AdminPortal = () => {
    const router = useRouter()
    const queryIds = router?.query?.id
    let selectedTicketID = undefined
    if (queryIds) {
        selectedTicketID = queryIds[0]
    }
    const [tickets, setTickets] = useState<any[]>([])

    const handleGetTickets = async () => {
        const res = await fetch(`/api/ticket`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await res.json()
        setTickets(data.props.result)
    }

    const updateTicket = (updatedTicket) => {
        const index = tickets.findIndex(item => item.id === updatedTicket.id)

        setTickets([
            ...tickets.slice(0, index),
            updatedTicket,
            ...tickets.slice(index + 1)
        ])
    }

    useEffect(() => {
        handleGetTickets()
    }, [])

    return (
        <Layout>
            <AllTickets tickets={tickets} selectedTicketId={selectedTicketID} updateCallback={updateTicket}/>
        </Layout>
    );
};

export default AdminPortal;

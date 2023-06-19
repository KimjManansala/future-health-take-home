import React, {useEffect, useState} from 'react';
import Layout from "../../../components/Layout";
import {mockClientUserId} from "../../../common";
import AllTickets from "../../../components/admin_portal/AllTickets";
import {useRouter} from "next/router";

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

    useEffect(() => {
        handleGetTickets()
    }, [])

    return (
        <Layout>
            <div>
            <AllTickets tickets={tickets} selectedTicketId={selectedTicketID}/>
            </div>
        </Layout>
    );
};

export default AdminPortal;

import React, {useEffect, useState} from 'react';
import Layout from "../../../components/Layout";
import {mockClientUserId} from "../../../common";
import AllTickets from "../../../components/admin_portal/AllTickets";

const AdminPortal = () => {
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
            <AllTickets tickets={tickets} />
            </div>
        </Layout>
    );
};

export default AdminPortal;

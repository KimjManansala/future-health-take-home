import React from "react"

import Layout from "../../components/Layout"
import Link from "next/link";

const Blog: React.FC<{}> = () => {
    return (
        <Layout>
            <div className="page">
                <div className="container text-center">
                    <h1>Welcome!</h1>
                    <h3>Here is a simulation of a mock help desk</h3>
                    <div className="row">
                        <div className="col" role="button">
                            <Link href={'/client_portal'}>
                                <div className="card" id='client-portal-link'>
                                    <div className="card-body">
                                        Go to client portal
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col" role="button">
                            <Link href={'/admin_portal'}>
                                <div className="card" id='admin-portal-link'>
                                    <div className="card-body">
                                        Go to admin portal
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
           .page > div {
            padding: 5px;
           }
      `}</style>
        </Layout>
    )
}

export default Blog

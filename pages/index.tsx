import React from "react"

import Layout from "../components/Layout"
import Link from "next/link";

const Blog: React.FC<{}> = () => {
  return (
    <Layout>
      <div className="page">
          <div>
              <Link href={'/client_portal'}>Go to client portal</Link>
          </div>
          <div>
              <Link href={'/admin_portal'}>Go to admin portal</Link>
          </div>
      </div>
      <style jsx>{`
 
      `}</style>
    </Layout>
  )
}

export default Blog

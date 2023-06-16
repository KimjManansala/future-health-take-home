import React from "react"
import { GetStaticProps } from "next"
import Layout from "../components/Layout"
import Post, { PostProps } from "../components/Post"
import prisma from "../lib/prisma";

export const getStaticProps: GetStaticProps = async () => {
  const user = await prisma.userType.findMany();
  console.log('user', user);
  return {
    props: { user },
    revalidate: 10,
  };
};

type Props = {
  user: PostProps[]
}

const Blog: React.FC<Props> = (props) => {
  return (
    <Layout>
      <div className="page">
        <div className="section">
          <h1>Existing Tickets</h1>
          <main>
            Hello world
          </main>
        </div>
        <div className="section">
          <h1>Create a new ticket</h1>
          <form style={{
            display: "grid",
            columnGap: 10,
            rowGap: 10,
          }}>
            <div className="form_input">
              <label>Name</label>
              <input name="name" />
            </div>
            <div className="form_input">
              <label>Email</label>
              <input name="email"/>
            </div>
            <div className="form_input">
              <label>Description</label>
              <textarea name="description"/>
            </div>
            <button style={{width: 'fit-content'}}>Submit!</button>
          </form>
        </div>
      </div>
      <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
        .form_input {
          display: block;
          justify-content: space-between;
        }
        .page {
          max-width: 100vw;
          margin: auto;
        }
        .form_input > label {
          display: block;
        }
        .form_input > input, textarea {
          display: block;
          width: 100%;
          padding-top: 2px;
        }
      `}</style>
    </Layout>
  )
}

export default Blog

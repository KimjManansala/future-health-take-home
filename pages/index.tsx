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
          TODO Create login screen here
      </div>
      <style jsx>{`
 
      `}</style>
    </Layout>
  )
}

export default Blog

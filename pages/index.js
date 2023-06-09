import Layout from "@/components/Layout";
import HomePage from "@/components/Home/HomePage";
import Image from "next/image";
import { Button } from "@material-tailwind/react";


export default function index() {
  return (
    <Layout title={`Kingdom`}>
      <HomePage />
    </Layout>
  );
}

// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const res = await fetch(
//     "https://demo-production-edcf.up.railway.app/api/people"
//   );
//   const people = await res.json();

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: { people },
//     revalidate: 1,
//   };
// }

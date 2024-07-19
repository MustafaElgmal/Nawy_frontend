import CompoundLanding from "@/components/CompoundLanding";
import Navbar from "@/components/Navbar";
import UnitSection from "@/components/UnitSection";
import { base_url } from "@/constants";
import { property } from "@/interfaces/property.interface";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";

const CompoundPage = ({ compound }: { compound: property }) => {
  return (
    <div className="min-h-screen bg-[#ffffff] ">
      <Navbar />
      <CompoundLanding compound={compound} />
      <UnitSection compound={compound} />
    </div>
  );
};
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${base_url}/api/property`);
  const compounds = await res.json();
  const paths = compounds.data.map((compound: property) => {
    return {
      params: {
        name: compound.name,
      },
    };
  });
  return { paths, fallback: false };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Fetch data from an API or perform server-side operations
  let res = await fetch(`${base_url}/api/property/${params?.name!}`);
  const compound = await res.json();

  // Pass the fetched data as props to the page component
  return {
    props: {
        compound: compound.data,
    },
  };
};

export default CompoundPage;

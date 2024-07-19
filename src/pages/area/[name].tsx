import AboutArea from "@/components/AboutArea";
import AreaLanding from "@/components/AreaLanding";
import CompundDetails from "@/components/CompundDetails";
import Navbar from "@/components/Navbar";
import { base_url } from "@/constants";
import { AppProps } from "@/interfaces/App.interface";
import { area } from "@/interfaces/area.interface";
import { GetStaticProps, GetStaticPaths } from "next";
import React from "react";

const AreaDetails = ({ area }: { area: area }) => {
  return (
    <div className="min-h-screen bg-[#ffffff] ">
      <Navbar />
      <AreaLanding area={area} />
      <AboutArea area={area} />
      <CompundDetails area={area} />
    </div>
  );
};
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${base_url}/api/workingarea`);
  const area = await res.json();
  const paths = area.data.map((area: area) => {
    return {
      params: {
        name: area.name,
      },
    };
  });
  return { paths, fallback: false };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Fetch data from an API or perform server-side operations
  let res = await fetch(`${base_url}/api/workingarea/${params?.name!}`);
  const workingarea = await res.json();

  // Pass the fetched data as props to the page component
  return {
    props: {
      area: workingarea.data,
    },
  };
};

export default AreaDetails;

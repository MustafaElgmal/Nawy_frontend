import Description from "@/components/Description";
import Navbar from "@/components/Navbar";
import UnitLanding from "@/components/UnitLanding";
import UnitTableDetails from "@/components/UnitTableDetails";
import { base_url } from "@/constants";
import { unit } from "@/interfaces/unit.interface";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";

const UnitDetails = ({ unit }: { unit: unit }) => {
  return (
    <div className="min-h-screen bg-[#ffffff] ">
      <Navbar />
      <UnitLanding unit={unit} />
      <UnitTableDetails unit={unit}/>
      <Description unit={unit} />
    </div>
  );
};
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${base_url}/api/unit`);
  const units = await res.json();
  const paths = units.data.map((unit: unit) => {
    return {
      params: {
        name: unit.property.name,
        id: unit.id
      },
    };
  });
  return { paths, fallback: false };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Fetch data from an API or perform server-side operations
  let res = await fetch(`${base_url}/api/unit/${params?.id!}`);
  const unit = await res.json();

  // Pass the fetched data as props to the page component
  return {
    props: {
      unit: unit.data,
    },
  };
};
export default UnitDetails;

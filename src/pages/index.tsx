import Navbar from "@/components/Navbar";
import Landing from "@/components/Landing";
import TopCompounds from "@/components/TopCompounds";
import TopArea from "@/components/TopArea";
import { base_url } from "@/constants/index";
import { AppProps } from "@/interfaces/App.interface";

export default function Home({ data }: AppProps) {
  return (
    <div className="min-h-screen bg-[#ffffff] ">
      <Navbar />
      <Landing />
      <TopCompounds compounds={data?.properties} />
      <TopArea area={data?.area} />
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from an API or perform server-side operations
  let res = await fetch(`${base_url}/api/property`);
  const properties = await res.json();
  res = await fetch(`${base_url}/api/workingarea`);
  const area = await res.json();

  // Pass the fetched data as props to the page component
  return {
    props: {
      data: { properties: properties.data, area: area.data },
    },
  };
}

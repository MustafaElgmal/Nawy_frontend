import { unit } from "@/interfaces/unit.interface";
import Link from "next/link";

export default function UnitTableDetails({ unit }: { unit: unit }) {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block  py-2 align-middle sm:px-6 lg:px-8">
            <table className=" divide-y divide-black ">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-lg font-bold  text-[#1E4164] sm:pl-3"
                  >
                    {unit.type}
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5  text-lg font-bold text-center text-[#1E4164]"
                  >
                    {unit.squareFootage} m&sup2;
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="bg-[#F4F4F4]">
                  <td className="whitespace-nowrap px-3 py-4 font-lg text-[#212427] ">
                    Reference No.
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 font-lg text-[#212427] text-center">
                    {unit.id}
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-3 py-4 font-lg text-[#212427] ">
                    Bedrooms
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 font-lg text-[#212427] text-center">
                    {unit.bedrooms}
                  </td>
                </tr>
                <tr className="bg-[#F4F4F4]">
                  <td className="whitespace-nowrap px-3 py-4 font-lg text-[#212427] ">
                    Bathrooms
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 font-lg text-[#212427] text-center">
                    {unit.bathrooms}
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-3 py-4 font-lg text-[#212427] ">
                    Delivery In
                  </td>
                  {unit.isReady ? (
                    <td className="whitespace-nowrap px-3 py-4 font-lg text-[#212427] text-center">
                      Ready to move
                    </td>
                  ) : (
                    <td className="whitespace-nowrap px-3 py-4 font-lg text-[#212427] text-center">
                      {unit.deliveryDate}
                    </td>
                  )}
                </tr>
                <tr className="bg-[#F4F4F4]">
                  <td className="whitespace-nowrap px-3 py-4 font-lg text-[#212427] ">
                    Compound
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 font-lg text-[#015C9A] underline text-center">
                    <Link href={`/compound/${unit.property.name}`}>
                      {unit.property.name}
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-3 py-4 font-lg text-[#212427] ">
                    Owner
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 font-lg text-[#212427] text-center">
                    {unit.property.owner}
                  </td>
                </tr>
                <tr className="bg-[#F4F4F4]">
                  <td className="whitespace-nowrap px-3 py-4 font-lg text-[#212427] ">
                  Finishing
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 font-lg text-[#212427] text-center">
                    {unit.isReady?"Finished":"Not Finished"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

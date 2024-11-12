import React, { useEffect } from "react";
import { useAccessoriesStore } from "../../state";

const GetAllAccessories: React.FC = () => {
  const { accessories, getAllAccessories } = useAccessoriesStore();

  useEffect(() => {
    getAllAccessories();
  }, [getAllAccessories]);

  return (
    <div className="flex flex-col w-full min-h-screen p-2 m-2 overflow-auto border border-black rounded-sm">
      <table className="w-full p-4 m-3 text-center border-collapse rounded-sm min-w-max sm:w-auto">
        <thead>
          <tr>
            <th className="p-2 m-2 text-sm bg-white border-r border-black sm:text-base">
              Acccesory ID
            </th>
            <th className="p-2 m-2 text-sm bg-white border-r border-black sm:text-base">
              Accessory Name
            </th>
            <th className="p-2 m-2 text-sm bg-white border-r border-black sm:text-base">
              Price
            </th>
            <th className="p-2 m-2 text-sm bg-white border-r border-black sm:text-base">
              Quantity
            </th>
            <th className="p-2 m-2 text-sm bg-white border-r border-black sm:text-base">
              Image
            </th>
            <th className="p-2 m-2 text-sm bg-white border-r border-black sm:text-base">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {accessories?.map((a) => (
            <tr key={a?._id} className="text-xs sm:text-sm">
              <td className="p-2 m-2">{a?._id}</td>
              <td className="p-2 m-2">{a?.accessory_name}</td>
              <td className="p-2 m-2">{a?.price}</td>
              <td className="p-2 m-2">{a?.quantity}</td>
              <td className="flex items-center justify-center p-2 m-2">
                {a.image && a.image.length > 0 && (
                  <img
                    src={a.image[0].url}
                    alt={a.accessory_name}
                    className="self-center w-10 h-10 m-2"
                  />
                )}
              </td>
              <td>
                <div className="flex flex-col items-center justify-between p-2 m-2 sm:flex-row">
                  <button className="p-1 m-1 text-xs text-white transition duration-300 ease-in-out bg-green-500 rounded-sm sm:p-2 sm:m-2 sm:text-sm hover:bg-green-600">
                    View
                  </button>
                  <button className="p-1 m-1 text-xs text-white transition duration-300 ease-in-out bg-blue-500 rounded-sm sm:p-2 sm:m-2 sm:text-sm hover:bg-blue-600">
                    Edit
                  </button>
                  <button className="p-1 m-1 text-xs text-white transition duration-300 ease-in-out bg-red-500 rounded-sm sm:p-2 sm:m-2 sm:text-sm hover:bg-red-600">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetAllAccessories;

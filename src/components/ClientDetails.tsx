import React from "react";
import { FormState } from "./../App";
type ClientDetailsProps = {
  handleClientDetails: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmitClientDetails: (e: React.FormEvent<HTMLFormElement>) => void;
  state: FormState;
};
function ClientDetails({
  handleClientDetails,
  handleSubmitClientDetails,
  state,
}: ClientDetailsProps) {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Client Details
      </h2>
      <form
        onSubmit={handleSubmitClientDetails}
        className="flex flex-col gap-4"
      >
        <label className="flex flex-col text-gray-700 font-medium">
          First Name
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleClientDetails}
            className="mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your first name"
          />
        </label>

        {/* <label className="flex flex-col text-gray-700 font-medium">
          Phone Number
          <input
            type="text"
            name="phone"
            value={state.applicant.phone}
            onChange={handleClientDetails}
            className="mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your phone number"
          />
        </label> */}

        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Submit Details
        </button>
      </form>
    </div>
  );
}

export default ClientDetails;

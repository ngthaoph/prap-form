import React from "react";
import { FormState } from "./../App";

type ClientDetailsProps = {
  handleClientFirstName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClientLastName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmitClientDetails: (e: React.FormEvent<HTMLFormElement>) => void;
  handleClientPhone: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClientEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  state: FormState;
};

function ClientDetails({
  handleClientFirstName,
  handleClientLastName,
  handleClientPhone,
  handleClientEmail,
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
        {/* FIRST NAME */}
        <label className="flex flex-col text-gray-700 font-medium">
          First Name
          <input
            type="text"
            value={state.clientDetails.firstName}
            onChange={handleClientFirstName}
            placeholder="Enter your first name"
            className="mt-1 p-2 border border-gray-300 rounded"
          />
        </label>

        {/* LAST NAME */}
        <label className="flex flex-col text-gray-700 font-medium">
          Last Name
          <input
            type="text"
            value={state.clientDetails.lastName}
            onChange={handleClientLastName}
            placeholder="Enter your last name"
            className="mt-1 p-2 border border-gray-300 rounded"
          />
        </label>

        {/* PHONE */}
        <label className="flex flex-col text-gray-700 font-medium">
          Phone
          <input
            type="text"
            value={state.clientDetails.phone}
            onChange={handleClientPhone}
            placeholder="Enter your phone"
            className="mt-1 p-2 border border-gray-300 rounded"
          />
        </label>
        {/* PHONE */}
        <label className="flex flex-col text-gray-700 font-medium">
          Phone
          <input
            type="text"
            value={state.clientDetails.email}
            onChange={handleClientEmail}
            placeholder="Enter your email"
            className="mt-1 p-2 border border-gray-300 rounded"
          />
        </label>

        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit Details
        </button>
      </form>
    </div>
  );
}

export default ClientDetails;

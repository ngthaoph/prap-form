import React from "react";

function Affordability({
  state,
  handleIncome,
  handleRent,
  handleSubmitAffordability,
}) {
  const { income, rent } = state;

  return (
    <div className="p-6 max-w-md mx-auto border rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Check Affordability
      </h2>

      <form
        onSubmit={handleSubmitAffordability}
        className="flex flex-col gap-4"
      >
        {/* Income Field */}
        <label className="flex flex-col text-sm font-medium text-gray-700">
          Income Amount ($)
          <input
            type="number"
            name="income"
            value={income}
            onChange={handleIncome}
            className="mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder="Enter income amount"
            required
          />
        </label>

        {/* Rent Field */}
        <label className="flex flex-col text-sm font-medium text-gray-700">
          Rent Amount ($)
          <input
            type="number"
            name="rent"
            value={rent}
            onChange={handleRent}
            className="mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder="Enter rent amount"
            required
          />
        </label>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Check Eligibility
        </button>
      </form>
    </div>
  );
}

export default Affordability;

import React from "react";
import { ifInCatchment } from "../services/helper";

function Catchment({
  handleSubmitPostcode,
  postcode,
  handlePostcode,
  searched,
  submittedPostcode,
}) {
  const inCatchment = ifInCatchment(submittedPostcode);

  return (
    <div className="w-full">
      {!searched && (
        <form
          onSubmit={handleSubmitPostcode}
          className="flex flex-col gap-4 border border-gray-300 p-6 rounded-lg shadow-md"
        >
          <label className="flex flex-col gap-2">
            <span className="font-medium text-gray-700">
              Where are you currently located?
            </span>
            <input
              type="text"
              name="postcode"
              value={postcode}
              onChange={handlePostcode}
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your postcode"
            />
          </label>

          <button
            type="submit"
            className="self-start bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      )}

      {searched && (
        <div className="mt-6 p-4 border border-gray-300 rounded-lg bg-gray-50">
          <p className="text-lg font-medium">
            {inCatchment ? (
              <span className="text-green-600">
                ✅ You are within our catchment
              </span>
            ) : (
              <span className="text-red-600">
                ❌ You are not within our catchment
              </span>
            )}
          </p>
        </div>
      )}
    </div>
  );
}

export default Catchment;

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
    <div>
      {!searched && (
        <form
          className="flex flex-col border-2 justify-start gap-4 p-4"
          onSubmit={handleSubmitPostcode}
        >
          <label className="flex flex-row gap-4">
            <div className="bg-blue-900 text-white p-1">
              Where are you currently located?
            </div>
            <input
              className="bg-pink-300 p-1"
              type="text"
              name="postcode"
              value={postcode}
              onChange={handlePostcode}
            />
          </label>
          <button className="flex justify-center" type="submit">
            <div className="bg-cyan-600 p-1 text-white">SUBMIT</div>
          </button>
        </form>
      )}
      {searched && (
        <div className="border p-4 mt-4">
          <div className="mb-2">
            {inCatchment
              ? "✅ You are within our catchment"
              : "❌ You are not within our catchment"}
          </div>
        </div>
      )}
    </div>
  );
}

export default Catchment;

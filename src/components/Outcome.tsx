import React from "react";
import { FormState } from "./../App";

type OutcomeProps = {
  state: FormState;
};

function Outcome({ state }: OutcomeProps) {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md text-center">
      <h2 className="text-2xl font-semibold mb-4">Outcome</h2>
      <div className="text-gray-700 text-lg">
        {state.affordability ? (
          <p>
            You can expect us to contact you to follow with your application in
            5 business days.
          </p>
        ) : (
          <p>
            Unfortunately, your rent is not affordable on your income. Please
            contact us on <span className="font-semibold">9556 5775</span> to
            discuss any possible assistance.
          </p>
        )}
      </div>
    </div>
  );
}

export default Outcome;

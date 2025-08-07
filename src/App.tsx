import "./App.css";
import { useState, useReducer } from "react";
import Affordability from "./components/Affordability";
import Catchment from "./components/Catchment";
import ClientDetails from "./components/ClientDetails";
import { ifInCatchment } from "./services/helper";
//FORM
const initialFormState = {
  name: "",

  rent: "",
  income: "",
};
const formReducer = (state, action) => {
  switch (action.type) {
    case "name":
      return {
        ...state,
        name: action.payload,
      };
    case "rent":
      return { ...state, rent: action.payload };
    case "income":
      return { ...state, income: action.payload };
    default:
      return state;
  }
};

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const handleCurrentPage = (delta: number): void => {
    setCurrentPage((prevPage) => prevPage + delta);
  };
  const [postcode, setPostcode] = useState("");
  const [submittedPostcode, setSubmittedPostcode] = useState("");
  const [searched, setSearched] = useState(false);
  const [rent, setRent] = useState("");
  const [income, setIncome] = useState("");

  //APPLICANT DETAILS
  const [state, dispatch] = useReducer(formReducer, initialFormState);
  console.log(state);

  const handleClientDetails = (e) => {
    dispatch({
      type: "name",
      payload: e.target.value,
    });
  };
  const handleSubmitClientDetails = (e) => {
    e.preventDefault();
    console.log("Client details submitted");
  };
  ////////////////
  //AFFORDABLITY
  const handleIncome = (e) => {
    dispatch({ type: "income", payload: e.target.value });
  };
  const handleRent = (e) => {
    dispatch({ type: "rent", payload: e.target.value });
  };
  const handleSubmitAffordability = (e) => {
    e.preventDefault();
    const rentValue = parseFloat(rent);
    const incomeValue = parseFloat(income);

    const percentage = (rentValue / incomeValue) * 100;
    const isAffordable = percentage <= 55; // Rent must be ≤ 55% of income
    const isWithinIncomeLimit = incomeValue < 1500; // Income must be < $1500
    console.log(isWithinIncomeLimit);
  };

  ////////////////

  const handlePostcode = (event) => {
    setPostcode(event.target.value);
  };

  const handleSubmitPostcode = (e) => {
    e.preventDefault();
    setSubmittedPostcode(postcode);
    setPostcode("");
    setSearched(true);
  };

  const inCatchment = ifInCatchment(submittedPostcode);

  return (
    <div>
      <h1>PRIVATE RENTAL ASSISTANCE PROGRAM</h1>
      {currentPage === 1 && (
        <Catchment
          handleSubmitPostcode={handleSubmitPostcode}
          postcode={postcode}
          handlePostcode={handlePostcode}
          searched={searched}
          setSearched={setSearched}
          submittedPostcode={submittedPostcode}
        />
      )}
      {currentPage === 2 && (
        <ClientDetails
          handleClientDetails={handleClientDetails}
          handleSubmitClientDetails={handleSubmitClientDetails}
          state={state}
        />
      )}
      {currentPage === 3 && (
        <Affordability
          state={state}
          handleIncome={handleIncome}
          handleRent={handleRent}
          handleSubmitAffordability={handleSubmitAffordability}
        />
      )}
      {/*FORM DIRECTION*/}
      <div className="flex justify-center gap-5">
        <button type="button" onClick={() => handleCurrentPage(-1)}>
          BACK
        </button>
        <button type="button" onClick={() => handleCurrentPage(1)}>
          PROCEED
        </button>
      </div>
    </div>

    // <div className="flex justify-center p-4">
    //   <div>
    //     <div>
    //       {!searched && (
    //         <form
    //           className="flex flex-col border-2 justify-start gap-4 p-4"
    //           onSubmit={handleSubmit}
    //         >
    //           <label className="flex flex-row gap-4">
    //             <div className="bg-blue-900 text-white p-1">Postcode</div>
    //             <input
    //               className="bg-pink-300 p-1"
    //               type="text"
    //               name="postcode"
    //               value={postcode}
    //               onChange={handlePostcode}
    //             />
    //           </label>
    //           <button className="flex justify-center" type="submit">
    //             <div className="bg-cyan-600 p-1 text-white">SUBMIT</div>
    //           </button>
    //         </form>
    //       )}

    //       {searched && (
    //         <div className="border p-4 mt-4">
    //           <div className="mb-2">
    //             {inCatchment
    //               ? "✅ You are within our catchment"
    //               : "❌ You are not within our catchment"}
    //           </div>
    //           <button
    //             className="bg-gray-300 p-1"
    //             onClick={() => setSearched(false)}
    //           >
    //             Back
    //           </button>
    //         </div>
    //       )}
    //     </div>

    //     {step === 2 && (
    //       <div>
    //         <form
    //           className="flex flex-col border-2 justify-start gap-4 p-4 mt-4"
    //           onSubmit={handleEligibility}
    //         >
    //           <label className="flex flex-row gap-4">
    //             <div className="bg-blue-900 text-white p-1">Rent ($)</div>
    //             <input
    //               className="bg-pink-300 p-1"
    //               type="number"
    //               value={rent}
    //               onChange={(e) => setRent(e.target.value)}
    //             />
    //           </label>
    //           <label className="flex flex-row gap-4">
    //             <div className="bg-blue-900 text-white p-1">Income ($)</div>
    //             <input
    //               className="bg-pink-300 p-1"
    //               type="number"
    //               value={income}
    //               onChange={(e) => setIncome(e.target.value)}
    //             />
    //           </label>
    //           <button className="flex justify-center" type="submit">
    //             <div className="bg-cyan-600 p-1 text-white">
    //               Check Eligibility
    //             </div>
    //           </button>
    //         </form>

    //         {(state.isAffordable || state.isIncomeLimit) && (
    //           <div className="mt-4 border p-2">
    //             <div>Affordable: {state.isAffordable ? "Yes" : "No"}</div>
    //             <div>Income Limit: {state.isIncomeLimit ? "Yes" : "No"}</div>
    //           </div>
    //         )}
    //       </div>
    //     )}
    //   </div>
    // </div>
  );
}

export default App;

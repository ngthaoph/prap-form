import { useState, useReducer } from "react";
import Affordability from "./components/Affordability";
import Catchment from "./components/Catchment";
import ClientDetails from "./components/ClientDetails";
import Outcome from "./components/Outcome";

type ClientDetails = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
};
export interface FormState {
  postcode: string;
  clientDetails: ClientDetails;
  rent: string;
  income: string;
  affordability: boolean;
  incomeLimit: boolean;
}
const initialFormState: FormState = {
  postcode: "",
  clientDetails: {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  },
  rent: "",
  income: "",
  affordability: false,
  incomeLimit: false,
};
type FormAction =
  | { type: "postcode"; payload: string }
  | {
      type: "client_details";
      payload: ClientDetails;
    }
  | { type: "rent"; payload: string }
  | { type: "income"; payload: string }
  | { type: "affordability"; payload: boolean }
  | { type: "incomeLimit"; payload: boolean };

const formReducer = (state: FormState, action: FormAction) => {
  switch (action.type) {
    case "postcode":
      return { ...state, postcode: action.payload };
    case "client_details":
      return {
        ...state,
        clientDetails: action.payload,
      };
    case "rent":
      return { ...state, rent: action.payload };
    case "income":
      return { ...state, income: action.payload };
    case "affordability":
      return { ...state, affordability: action.payload };
    case "incomeLimit":
      return { ...state, incomeLimit: action.payload };
    default:
      return state;
  }
};

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postcode, setPostcode] = useState("");
  const [submittedPostcode, setSubmittedPostcode] = useState("");
  const [searched, setSearched] = useState(false);
  const [state, dispatch] = useReducer(formReducer, initialFormState);
  console.log(state);

  const handleCurrentPage = (delta: number) => {
    setCurrentPage((prevPage) => prevPage + delta);
  };

  const handleClientFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "client_details",
      payload: {
        ...state.clientDetails,
        firstName: e.target.value,
      },
    });
  };
  const handleClientLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "client_details",
      payload: {
        ...state.clientDetails,
        lastName: e.target.value,
      },
    });
  };
  const handleClientPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "client_details",
      payload: {
        ...state.clientDetails,
        phone: e.target.value,
      },
    });
  };
  const handleClientEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "client_details",
      payload: {
        ...state.clientDetails,
        email: e.target.value,
      },
    });
  };

  const handleSubmitClientDetails = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Client details submitted");
  };

  const handleIncome = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "income", payload: e.target.value });
    const isWithinIncomeLimit = Number(state.income) < 1500;
    isWithinIncomeLimit &&
      dispatch({ type: "incomeLimit", payload: !state.incomeLimit });
  };

  const handleRent = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "rent", payload: e.target.value });
  };

  const handleSubmitAffordability = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const rentValue = parseFloat(state.rent);
    const incomeValue = parseFloat(state.income);

    const percentage = (rentValue / incomeValue) * 100;

    percentage <= 55
      ? dispatch({ type: "affordability", payload: true })
      : dispatch({ type: "affordability", payload: false });
  };

  const handlePostcode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostcode(e.target.value);
    dispatch({ type: "postcode", payload: e.target.value });
  };

  const handleSubmitPostcode = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmittedPostcode(postcode);
    setPostcode("");
    setSearched(true);
  };

  // const inCatchment = ifInCatchment(submittedPostcode);

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">
        Private Rental Assistance Program
      </h1>

      {/* PAGE FLOW */}
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
          state={state}
          handleSubmitClientDetails={handleSubmitClientDetails}
          handleClientFirstName={handleClientFirstName}
          handleClientLastName={handleClientLastName}
          handleClientPhone={handleClientPhone}
          handleClientEmail={handleClientEmail}
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
      {currentPage === 4 && <Outcome state={state} />}

      {/* NAVIGATION BUTTONS */}
      <div className="flex justify-between mt-8">
        <button
          type="button"
          onClick={() => handleCurrentPage(-1)}
          disabled={currentPage === 1}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 disabled:opacity-50"
        >
          Back
        </button>
        <button
          type="button"
          onClick={() => handleCurrentPage(1)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Proceed
        </button>
      </div>
    </div>
  );
}

export default App;

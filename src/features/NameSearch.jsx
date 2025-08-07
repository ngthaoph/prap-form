import React from "react";

function NameSearch() {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });
  console.log(name);
  const { firstName, lastName } = name;

  const [submittedForm, setSubmittedForm] = useState({
    firstName: "",
    lastName: "",
  });

  const handleName = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setName((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedForm(name);
  };
  return (
    <div>
      <div className="flex justify-center">
        <form
          className="flex flex-col border-2 justify-start gap-4 p-4"
          onSubmit={handleSubmit}
        >
          <label className="flex flex-row gap-4 ">
            <div className="bg-blue-900 text-white">First Name</div>

            <input
              className="bg-pink-300"
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleName}
            />
          </label>
          <label className="flex flex-row gap-4">
            <div className="bg-blue-900 text-white">Last Name</div>

            <input
              className="bg-pink-300 text-black"
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleName}
            />
          </label>
          <button className="flex justify-center" type="submit">
            <div className=" bg-cyan-600 p-0.5">SUBMIT</div>
          </button>
        </form>
        <div>
          {submittedForm.firstName} {submittedForm.lastName}
        </div>
      </div>
    </div>
  );
}

export default NameSearch;

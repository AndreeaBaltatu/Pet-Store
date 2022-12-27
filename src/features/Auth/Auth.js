import { useState } from "react";

export function Auth() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    retype_password: "",
    fName: "",
    lName: "",
  });
  const { retype_password, ...dataForServer } = values;

  function handleInputChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault(); //-ca sa nu faca submit singur, preluam noi controlul

    const data = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(dataForServer),
    }).then((res) => res.json());
  }

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={values.email}
            onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={values.password}
            onChange={handleInputChange}
          />
        </p>

        <p>
          <label htmlFor="retype_password">Retype Password</label>
          <input
            type="password"
            name="retype_password"
            id="retype_password"
            value={values.retype_password}
            onChange={handleInputChange}
          />
        </p>

        <p>
          <label htmlFor="fName">First Name</label>
          <input
            type="text"
            name="fName"
            id="fName"
            value={values.fName}
            onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="lName">Last Name</label>
          <input
            type="text"
            name="lName"
            id="lName"
            value={values.lName}
            onChange={handleInputChange}
          />
        </p>

        <p>
          <button>Register</button>
        </p>
      </form>
    </>
  );
}

import React, { useState } from "react";

const UnosForme = () => {
  const [ime, setIme] = useState("");
  const [listaImena, setListaImena] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (ime.trim() !== "") {
      setListaImena([...listaImena, ime]);
      setIme("");
    }
  };

  const handleChange = (e) => {
    setIme(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Ime:
          <input name="name" onChange={handleChange} value={ime} autoFocus />
        </label>
        <input type="submit" value="Potvrdi" />
      </form>

      <ul>
        {listaImena.map((ime) => (
          <li key={crypto.randomUUID()}>{ime}</li>
        ))}
      </ul>
    </div>
  );
};

export default UnosForme;

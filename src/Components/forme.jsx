/*import React from "react";

const UnosForme = () => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Ime:
          <input name="name" onChange={handleChange} value={ime} />
        </label>
        <input type="submit" value="Potvrdi" />
      </form>
    </div>
  );
};

export default UnosForme;*/

import React, { useState } from "react";

const UnosForme = () => {
  // 1. Kreirajte useState varijablu za pohranu imena
  const [ime, setIme] = useState("");
  const [listaImena, setListaImena] = useState([]);

  // 2. Kreirajte funkciju koja dodaje ime u listu
  const handleSubmit = (e) => {
    e.preventDefault();

    // Dodajte provjeru da se izbjegne dodavanje praznog imena
    if (ime.trim() !== "") {
      setListaImena([...listaImena, ime]);
      setIme(""); // Očistite unos nakon dodavanja imena
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

      {/* Prikaz liste unesenih imena */}
      <ul>
        {listaImena.map((ime) => (
          <li key={crypto.randomUUID()}>{ime}</li>
        ))}
      </ul>
    </div>
  );
};

export default UnosForme;

import React, { useState } from "react";

const Zadatak = () => {
  const [korisnik, setKorisnik] = useState({
    ime: "",
    spol: "",
    email: "",
    lozinka: "",
  });

  const [listaKorisnika, setListaKorisnika] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setKorisnik({
      ...korisnik,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !korisnik.ime ||
      !korisnik.spol ||
      !korisnik.email ||
      !korisnik.lozinka
    ) {
      alert("Molimo unesite sva obavezna polja.");
      return;
    }

    if (korisnik.spol !== "muško" && korisnik.spol !== "žensko") {
      alert("Polje -Spol- mora biti popunjeno sa 'muško' ili 'žensko'.");
      return;
    }

    console.log("Novi korisnik:", korisnik);

    setListaKorisnika([
      ...listaKorisnika,
      { ...korisnik, id: crypto.randomUUID() },
    ]);

    setKorisnik({
      ime: "",
      spol: "",
      email: "",
      lozinka: "",
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>
          Ime:
          <input
            name="ime"
            onChange={handleChange}
            value={korisnik.ime}
            autoFocus
            required
          />
        </label>
        <br />
        <label>
          Spol:
          <input
            name="spol"
            onChange={handleChange}
            value={korisnik.spol}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            name="email"
            type="email"
            onChange={handleChange}
            value={korisnik.email}
            required
          />
        </label>
        <br />
        <label>
          Lozinka:
          <input
            name="lozinka"
            type="password"
            onChange={handleChange}
            value={korisnik.lozinka}
            required
          />
        </label>
        <br />
        <button className="myButton" type="submit">
          Potvrdi
        </button>
      </form>

      <ul>
        {listaKorisnika.map((korisnik) => (
          <li key={crypto.randomUUID()}>{korisnik.ime}</li>
        ))}
      </ul>
    </div>
  );
};

export default Zadatak;

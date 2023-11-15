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

    // Provjeri obavezna polja
    if (
      !korisnik.ime ||
      !korisnik.spol ||
      !korisnik.email ||
      !korisnik.lozinka
    ) {
      alert("Molimo unesite sva obavezna polja.");
      return;
    }

    // Provjeri valjanost unosa za polje spola
    if (korisnik.spol !== "muško" && korisnik.spol !== "žensko") {
      alert("Polje spola mora biti popunjeno sa 'muško' ili 'žensko'.");
      return;
    }

    // Spremi korisnika u stanje i prikaži ga na ekranu
    console.log("Novi korisnik:", korisnik);

    // Dodajte novog korisnika u listu korisnika s jedinstvenim ključem
    setListaKorisnika([
      ...listaKorisnika,
      { ...korisnik, id: crypto.randomUUID() },
    ]);

    // Resetiraj polja na početno stanje
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
        <input type="submit" value="Potvrdi" />
      </form>

      {/* Prikaz liste unesenih korisnika */}
      <ul>
        {listaKorisnika.map((korisnik) => (
          <li key={crypto.randomUUID()}>{korisnik.ime}</li>
        ))}
      </ul>
    </div>
  );
};

export default Zadatak;

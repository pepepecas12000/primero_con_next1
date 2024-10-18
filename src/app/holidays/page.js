"use client";
import Link from 'next/link';
import { useState } from "react";
import '@/app/styles/holidays.css';

export default function PublicHolidays() {
  const [pais, setPais] = useState("");
  const [anio, setAnio] = useState("");
  const [holidays, setHolidays] = useState([]);

  const fetchHolidays = async (e) => {
    e.preventDefault();

    if (!pais || !anio) {
      console.log("Falta año o país");
      return;
    }

    try {
      const response = await fetch(`https://date.nager.at/api/v3/publicholidays/${anio}/${pais}`);
      const data = await response.json();
      setHolidays(data); 
      
    } catch (error) {
      console.error("Error al obtener los días festivos:", error);
      setHolidays([]);
    }
  };

  return (
    <div className="holidays_container" style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f8ff', color: '#333', margin: 0, padding: '20px' }}>
      <div className="link_home">
        <Link href="/">
          <button className="home_button">Home</button>
        </Link>
      </div>
      <h1 className="holidays_title">Buscador de Días Festivos</h1>
      
      <div className="input_container">
        <label htmlFor="pais">País: </label>
        <input
          type="text"
          id="pais"
          className="pais_input"
          value={pais}
          onChange={(e) => setPais(e.target.value)}
          placeholder="Ej. MX"
        />
      </div>
      <div className="input_container">
        <label htmlFor="anio">Año: </label>
        <input
          type="number"
          id="anio"
          className="anio_input"
          value={anio}
          onChange={(e) => setAnio(e.target.value)}
          placeholder="Ej. 2024"
        /> 
      </div>
     <div id='centrar_boton'><button type="submit" className="fetch_button" onClick={fetchHolidays}>Buscar Días Festivos</button></div>
      {holidays && (
        <div className="results_container">
          <h2 className="results_title">Días Festivos en {pais.toUpperCase()} para {anio}</h2>
          <div id="centrar">
            <ul className="holidays_list">
              {holidays.map((holiday, index) => (
                <li key={index} className="holiday_item">
                  {holiday.date}: {holiday.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {holidays.length === 0 && (
        <p className="no_results_message">No se encontraron días festivos para el año {anio} y el país {pais.toUpperCase()}.</p>
      )}
    </div>
  );
}

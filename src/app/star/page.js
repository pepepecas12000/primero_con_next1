"use client";
import Link from 'next/link';
import { useState } from "react";
import '@/app/styles/star.css';

export default function Star() {
  const [id, setId] = useState('1');
  const [person, setPerson] = useState(null);

  function generarIdRandom() {
    setId(Math.floor(Math.random() * (80 - 1 + 1)) + 1);
    getPersonData();
  }

  const getPersonData = async () => {
    try {
      const res = await fetch(`https://www.swapi.tech/api/people/${id}`);
      const data = await res.json();

      if (data.message === 'ok') {
        setPerson(data.result.properties);
      } else {
        setPerson(null);
      }
    } catch (err) {
      console.log("Error al hacer la solicitud.");
      setPerson(null);
    }
  };

  return (
    <div className="star_container" style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#1a1a1a', color: '#ffffff', margin: 0, padding: '20px' }}>
      <div className="link_home">
        <Link href="/">
          <button className="home_button">Home</button>
        </Link>
      </div>
      <div className="generator_section">
        <h1 className="title">Generador de datos de personajes de Star Wars</h1>
        <button type="submit" className="generate_button" onClick={generarIdRandom}>Generar</button>
      </div>

      <h2 className="info_title">Información:</h2>
      {person && (
        <div className="person_info" style={{ marginTop: '20px' }}>
          <h2 className="person_title">Información del Personaje</h2>
          <p><strong>Nombre:</strong> {person.name}</p>
          <p><strong>Altura:</strong> {person.height}</p>
          <p><strong>Peso:</strong> {person.mass}</p>
          <p><strong>Color de cabello:</strong> {person.hair_color}</p>
          <p><strong>Color de piel:</strong> {person.skin_color}</p>
          <p><strong>Color de ojos:</strong> {person.eye_color}</p>
          <p><strong>Año de nacimiento:</strong> {person.birth_year}</p>
          <p><strong>Género:</strong> {person.gender}</p>
        </div>
      )}
    </div>
  );
}

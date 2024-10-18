"use client";
import { useState } from 'react';
import '@/app/styles/coctail.css';
import Link from 'next/link';

export default function Coctel() {
  const [nombreBebida, setNombreBebida] = useState('');
  const [bebidas, setBebidas] = useState([]);

  const buscarBebida = async (e) => {
    e.preventDefault();

    if (!nombreBebida) {
      console.log('Por favor, ingresa un nombre de bebida.');
      return;
    }

    try {
      const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nombreBebida}`);
      const data = await res.json();

      if (res.ok) {
        setBebidas(data.drinks);
        console.log("si se pudo");
        console.log(bebidas);
      } else {
        console.log(data.message);
        setBebidas([]);
      }
    } catch (err) {
      console.log('Error al buscar la bebida.');
    }
  };

  return (
    <div className="coctel_container" style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#fff8e1', color: '#333', margin: 0, padding: '20px', display: 'flex', flexDirection: 'column' }}>
      <div className="link_home">
        <Link href="/">
          <button className="home_button">Home</button>
        </Link>
      </div>
      <h1 className="coctel_title">Buscador de Cócteles</h1>
      <div id="coctel_inputs" className="coctel_input_container">
        <input
          type="text"
          className="coctel_input_bebida"
          value={nombreBebida}
          onChange={(e) => setNombreBebida(e.target.value)}
          placeholder="Ingresa el nombre de la bebida"
        />
        <button type="submit" className="coctel_buscar_button" onClick={buscarBebida}>Buscar</button>
      </div>
      <h2 className="coctel_resultados_title">Resultados:</h2>
      {bebidas && (
        <div className="coctel_results">
          {bebidas.map((bebida) => (
            <div className="coctel_result_item" key={bebida.idDrink}>
              <h3 className="coctel_bebida_nombre">{bebida.strDrink}</h3>
              <img className="coctel_bebida_imagen" src={bebida.strDrinkThumb} alt={bebida.strDrink} />
              <p className="coctel_bebida_categoria"><strong>Categoría:</strong> {bebida.strCategory}</p>
              <p className="coctel_bebida_instrucciones"><strong>Instrucciones:</strong> {bebida.strInstructions}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

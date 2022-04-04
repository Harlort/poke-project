import styles from "./Pokemon.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Pokemon = ({ id, name, img, url }) => {
  const [types, setTypes] = useState([]);
  const [bgColor, setBgColor] = useState();


  const HandleClick = (id, img) => {
    
    console.log(img)
    navigate ("/pokemon", {state:{ id:id, img:img}})
    

  const pokemonStyle = {
    display: "flex",
    backgroundColor: bgColor,
    width: "332px",
    height: "110px",
    marginTop: "20px",
    borderRadius: "28px",

  };
  
  
  useEffect(() => {
    fetch(url)
      .then((results) => results.json())
      .then((data) => setTypes(data.types));
  }, []);

  useEffect(() => checkBGColor(), [types]);

  function checkBGColor() {
    if (types.length > 0) {
      if (types.length > 1 && types[0].type.name === "normal") {
        setBackground(types[1].type.name);
      } else {
        setBackground(types[0].type.name);
      }
    }
  }

  function setBackground(type) {
    switch (type) {
      case "normal":
        return setBgColor("#BABBAD");
      case "fighting":
        return setBgColor("#A75642");
      case "flying":
        return setBgColor("#7BA4FF");
      case "poison":
        return setBgColor("#A95EA1");
      case "ground":
        return setBgColor("#EACA59");
      case "grass":
        return setBgColor("#8BD751");
      case "fire":
        return setBgColor("#FA5542");
      case "rock":
        return setBgColor("#CEBC72");
      case "bug":
        return setBgColor("#C2D120");
      case "ghost":
        return setBgColor("#7672D0");
      case "steel":
        return setBgColor("#C4C2DA");
      case "water":
        return setBgColor("#55AEFE");
      case "electric":
        return setBgColor("#FCE53A");
      case "psychic":
        return setBgColor("#FB65B6");
      case "ice":
        return setBgColor("#95F1FE");
      case "dragon":
        return setBgColor("#8A75FF");
      case "dark":
        return setBgColor("#8F6A57");
      case "fairy":
        return setBgColor("#FAADFF");
      default:
        return setBgColor("grey");
    }
  }
  
  let navigate = useNavigate();
  const HandleClick = (id, img) => {
    
    console.log(pokemonStyle.backgroundColor)
    navigate ("/pokemon", {state:{ id:id, img:img}})
    
  };

  return (

    <div style={pokemonStyle} onClick={() => (HandleClick(id, img))}>


    <div className="poke-card-container" onClick={() => (HandleClick(id, img))}>
      <div className="poke-img-container">
        <img className="poke-img" src={img} alt={name} />

    <div style={pokemonStyle}>

      <div className={styles.img}>
        <img src={img} alt={name} />

      </div>
      <div className={styles.nameContainer}>
        <h2>{name}</h2>
        <h1>#{id}</h1>
      </div>
    </div>
  );
};

export default Pokemon;

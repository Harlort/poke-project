
<<<<<<< HEAD
/*
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./PokemonSite.module.css";
import { useNavigate } from "react-router-dom";

=======
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./PokemonSite.module.css";
import logo from "../img/logo/pokemon-logo-thefuckingrightone.svg.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'


//<FontAwesomeIcon icon={solid('user-secret')} />
>>>>>>> a8723d50b70c81497c593ac245a71f9d90ed508d


Fixa med css
<<<<<<< HEAD
skapa components istället för att ha allt i samma

=======
får inte ut abilities eller type
*/
>>>>>>> a8723d50b70c81497c593ac245a71f9d90ed508d

const PokemonSite = () => {

    const [pokeStats, setPokeStats] = useState([]);
    let location = useLocation();
    const Poke = location.state.id;
    const img = location.state.img;

    let URL = `https://pokeapi.co/api/v2/pokemon/${Poke}`

    useEffect(() => {
         async function fetchPoke() {
        try {
            const res = await fetch(
                URL
            );
            const data = await res.json();
            setPokeStats(data)
            
        } catch (error) {
            console.log(error)
        }}
        fetchPoke();
    }, []);

      console.log(pokeStats)
    let navigate = useNavigate();

    const BackHome = () => {
        navigate(-1)
    }

    
    return (
        <>
        <article className={styles.header}>
            <img src={logo} alt="Logo" className={styles.logo}/>
            <article className={styles.button}>
                <p onClick={() => (BackHome())}><FontAwesomeIcon icon={solid('backward')} /></p>
            </article>
        </article>
        <section className={styles.container}>
            
            <div className={styles.wrapper}>
                <h1>#{pokeStats.id}</h1>
                <h1>{pokeStats.name}</h1>
            </div>
            <section className={styles.content}>
            <div className={styles.imgContainer}>
                <img src={img} alt={pokeStats.name}/>
            </div>
            <div className={styles.typeContainer}>
                <p>TYPE</p>
            </div>
            <article>
                <p>ABILITY</p>
            </article>
            </section>
        </section>
        </>
    );

};

export default PokemonSite;
*/

import { useEffect, useState } from "react";
import { Pokemon } from "../../components/Pokemon";
import { MainContainer } from "./styles";

export function Home() {
    const [pokedex, setPokedex] = useState<PokemonProps[]>([]);    

    async function getPokemon() {
        const pokemons = [];

        for(let i = 1; i <= 30; i++)  {
            const api = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
            const apiJson = await api.json();
            const pokemon: PokemonProps = {
                id: apiJson.id,
                name: apiJson.name,
                image: apiJson.sprites.other.dream_world.front_default,
                type: apiJson.types[0].type.name
            }


            pokemons.push(pokemon)
        }

        setPokedex([...pokemons])

    }

    useEffect(() => {
        getPokemon();
    }, [])

    useEffect(() => {
        console.log(pokedex);
    })

    return (
        <MainContainer>
            {pokedex.map(pokemon => 
                <Pokemon key={pokemon.id} 
                        name={pokemon.name} 
                        image={pokemon.image} 
                        type={pokemon.type} 
                        />)}
        </MainContainer>
    )
}
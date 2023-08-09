import { useEffect, useState } from "react";

interface PokemonProps {
    id: number,
    name: string,
    image: string,
}

export function Home() {
    const [pokedex, setPokedex] = useState<PokemonProps[]>([]);    

    async function getPokemon() {
        const pokemons = [];

        for(let i = 1; i <= 3; i++)  {
            const api = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
            const apiJson = await api.json();
            const pokemon: PokemonProps = {
                id: apiJson.id,
                name: apiJson.name,
                image: apiJson.sprites.other.dream_world.front_default
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
        <div>
            <ul>
                {pokedex.map(pokemon => <li>{`${pokemon.id} - ${pokemon.name} - `}<img src={pokemon.image} alt={pokemon.name} width={70} /></li>)}
            </ul>
        </div>
    )
}
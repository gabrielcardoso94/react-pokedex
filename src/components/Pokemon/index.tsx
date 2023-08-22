import { DivContainer } from "./styles";

export function Pokemon({ name, image}: PokemonProps) {
    return (
        <DivContainer>
            <h1>{name.toUpperCase()}</h1>
            
            <div id="img">
                <img src={image} />
            </div>
        </DivContainer>
    )
}
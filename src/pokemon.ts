export interface PokemonT {
  count: number;
  results: pokemonDT[];
}

export interface pokemonDT {
  id: number;
  name: string;
  image?: string;
  description: string;
  card: string;
}

export const pokemons: PokemonT = {
  count: 0,
  results: [
    {
      id: 1,
      name: "Ivysaur",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
      description:
        "Ivysaur, the Seed Pokémon. A Grass and Poison type. The stronger the sunlight it absorbs, the stronger this Pokémon becomes and the larger its flower bud grows.",
      card: "https://m.media-amazon.com/images/I/51-+m1hui8L._AC_.jpg",
    },
    {
      id: 2,
      name: "Venusaur",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
      description:
        "Venusaur is a large, quadrupedal Pokémon with a turquoise body. It has small red eyes and several large ferns on its back and head. The plant bulb that was on the back of its previous evolutions, Bulbasaur and Ivysaur, has now bloomed into a large flower with large pink petals and a yellow center.",
      card: "https://m.media-amazon.com/images/I/71mJjFYc3mL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
      id: 3,
      name: "Charmander",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      description:
        "Charmander is a small, bipedal, lizard-like Pokémon. Most of its body is colored orange, while its underbelly is a light yellow color. Charmander, along with all of its evolved forms, has a flame that is constantly burning on the end of its tail.",
      card: "https://m.media-amazon.com/images/I/51XQadWUh6L._AC_.jpg",
    },
    {
      id: 4,
      name: "Squirtle",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      description:
        "Its rounded shape and the grooves on its surface minimize resistance in water, enabling SQUIRTLE to swim at high speeds. It shelters itself in its shell, then strikes back with spouts of water at every opportunity. The shell is soft when it is born. It soon becomes so resilient, prodding fingers will bounce off it.",
      card: "https://m.media-amazon.com/images/I/71AicEWk68L._AC_SL1500_.jpg",
    },
    {
      id: 5,
      name: "Bulbasaur",
      image:
        "https://render.fineartamerica.com/images/rendered/default/print/8/5.5/break/images/artworkimages/medium/1/bulbasaur-bulb.jpg",
      description:
        "Bulbasaur are small, squat amphibian and plant Pokémon that move on all four legs, and have blue-green bodies with darker blue-green spots. As a Bulbasaur undergoes evolution into Ivysaur and then later into Venusaur, the bulb on its back blossoms into a large flower.",
      card: "https://m.media-amazon.com/images/I/512aSUYQPnL._AC_.jpg",
    },
  ],
};

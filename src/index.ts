import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import { pokemonDT, pokemons } from "./pokemon";
import cors from "cors";

const app: Express = express();
const port = process.env.PORT || 3000;

const corsOptions = {
  origin: "*", // Allow requests from all origins
  methods: "GET,POST,DELETE", // Allow all HTTP methods
  allowedHeaders: "Content-Type, Authorization", // Allow common headers
};

// Use CORS middleware with the configured options
app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: true }));

//1. GET a random pokemon
app.get("/pokemon_okeke/random", (req: Request, res: Response) => {
  const randomIndex = Math.floor(Math.random() * pokemons.results.length);
  const randomPokemon = pokemons.results[randomIndex];
  res.json(randomPokemon);
});

//2. GET all pokemons
app.get("/pokemon_okeke", (req: Request, res: Response) => {
  // just return the pokemon results
  res.json(pokemons);
});

//3. GET a specific pokemon
app.get("/pokemon_okeke/:id", (req: Request, res: Response) => {
  // get the id parsed
  const id = parseInt(req.params.id);
  const foundPokemon = pokemons.results.find(
    (poke: pokemonDT) => poke.id === id
  );

  if (foundPokemon) {
    res.json(foundPokemon);
  } else {
    res.status(404).json({ message: "Pokemon not found" });
  }
});

//4. POST a pokemon
app.post("/pokemon_okeke", (req: Request, res: Response) => {
  const { name, image, description, card } = req.body;

  const newID = pokemons.results.length + 1;

  const newPokemon: pokemonDT = {
    id: newID,
    name,
    image,
    description,
    card,
  };

  pokemons.results.push(newPokemon);

  // Update the count property to reflect the addition of the new Pokemon
  pokemons.count++;

  // Call updatePokemons after modifying the list of pokemons
  updatePokemons();

  // Respond with a success message and the newly created Pokemon
  res.status(201).json(newPokemon);
});

//5 DELETE a pokemon
app.delete("/pokemon_okeke/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  const findIndex = pokemons.results.findIndex(
    (poke: pokemonDT) => poke.id === id
  );

  if (findIndex !== -1) {
    // Remove the Pokemon from the results array using splice
    pokemons.results.splice(findIndex, 1);

    // Update the count
    pokemons.count--;

    // Call updatePokemons after modifying the list of pokemons
    updatePokemons();

    res.status(200).json({ message: "Pokemon deleted successfully" });
  } else {
    res.status(404).json({ message: "Pokemon not found" });
  }
});

app.get("/", (req: Request, res: Response) => {
  res.send("My Personal Pokemon API made by Okeke Chukwuebuka Emmanuel");
});

const updatePokemons = () => {
  pokemons.count = pokemons.results.length;
};

updatePokemons();

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

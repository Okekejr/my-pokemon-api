"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const pokemon_1 = require("./pokemon");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
const corsOptions = {
    origin: "*", // Allow requests from all origins
    methods: "GET,POST,DELETE", // Allow all HTTP methods
    allowedHeaders: "Content-Type, Authorization", // Allow common headers
};
// Use CORS middleware with the configured options
app.use((0, cors_1.default)(corsOptions));
app.use(body_parser_1.default.urlencoded({ extended: true }));
//1. GET a random pokemon
app.get("/pokemon_okeke/random", (req, res) => {
    const randomIndex = Math.floor(Math.random() * pokemon_1.pokemons.results.length);
    const randomPokemon = pokemon_1.pokemons.results[randomIndex];
    res.json(randomPokemon);
});
//2. GET all pokemons
app.get("/pokemon_okeke", (req, res) => {
    // just return the pokemon results
    res.json(pokemon_1.pokemons);
});
//3. GET a specific pokemon
app.get("/pokemon_okeke/:id", (req, res) => {
    // get the id parsed
    const id = parseInt(req.params.id);
    const foundPokemon = pokemon_1.pokemons.results.find((poke) => poke.id === id);
    if (foundPokemon) {
        res.json(foundPokemon);
    }
    else {
        res.status(404).json({ message: "Pokemon not found" });
    }
});
//4. POST a pokemon
app.post("/pokemon_okeke", (req, res) => {
    const { name, image, description, card } = req.body;
    const newID = pokemon_1.pokemons.results.length + 1;
    const newPokemon = {
        id: newID,
        name,
        image,
        description,
        card,
    };
    pokemon_1.pokemons.results.push(newPokemon);
    // Update the count property to reflect the addition of the new Pokemon
    pokemon_1.pokemons.count++;
    // Call updatePokemons after modifying the list of pokemons
    updatePokemons();
    // Respond with a success message and the newly created Pokemon
    res.status(201).json(newPokemon);
});
//5 DELETE a pokemon
app.delete("/pokemon_okeke/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const findIndex = pokemon_1.pokemons.results.findIndex((poke) => poke.id === id);
    if (findIndex !== -1) {
        // Remove the Pokemon from the results array using splice
        pokemon_1.pokemons.results.splice(findIndex, 1);
        // Update the count
        pokemon_1.pokemons.count--;
        // Call updatePokemons after modifying the list of pokemons
        updatePokemons();
        res.status(200).json({ message: "Pokemon deleted successfully" });
    }
    else {
        res.status(404).json({ message: "Pokemon not found" });
    }
});
app.get("/", (req, res) => {
    res.send("My Personal Pokemon API made by Okeke Chukwuebuka Emmanuel");
});
const updatePokemons = () => {
    pokemon_1.pokemons.count = pokemon_1.pokemons.results.length;
};
updatePokemons();
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
exports.default = app;

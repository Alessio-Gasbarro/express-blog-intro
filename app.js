//Import expressJS to app.js
const express = require('express');
const { title } = require('process');

//Function assigned variable = app
const app = express();

//Base port set to 3000
const port = 3000;

//Base "Rotta"
app.get('/', (req, res) => {
    res.send('<h1>Server del mio blog<h1>');
});

//Open port and server in stand-by
app.listen(port, () => {
    console.log(`Server in ascolto alla porta ${port}`);
});

const dolciblog = [
    {
        title: "Ciambellone",
        content: "Torta rotonda, come una ciambella!",
        img: "./images/ciambellone.jpeg",
        tags: ["Zucchero", "Burro", "Uova"],
    },
    {
        title: "Cracker Barbabietola",
        content: "Non so cosa sia questo orrore.",
        img: "./images/cracker_barbabietola.jpeg",
        tags: ["Farina", "Acqua", "Barbabietola"],
    },
    {
        title: "Pane Fritto dolce",
        content: "Praticamente le pettole pugliesi!",
        img: "./images/pane_fritto_dolce.jpeg",
        tags: ["Farina", "Zucchero", "Olio"],
    },
    {
        title: "Pasta Barbabietola",
        content: "Stessa cosa dei cracker ma bolliti! (Scherzo)",
        img: "./images/pasta_barbabietola.jpeg",
        tags: ["Farina", "Barbabietola", "Pazienza"],
    },
    {
        title: "Torta Paesana",
        content: "Torta al gusto di torta, ma più buona!",
        img: "./images/torta_paesana.jpeg",
        tags: ["Torta", "Torta", "Torta"],
    },
];

//Array "dolciblog" postato in Post>3000/catalogo
app.use("/catalogo", express.static('public'), (req, res) => {
    res.json(dolciblog);
});
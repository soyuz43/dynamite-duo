const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ],
    villains: [
        {
            id:1,
            name: "Guy who kills Dynoguy",
            power: "Killing Dynoguy"
        },
        {
            id:2,
            name: "SuperSlow",
            power: "Beating Hyperseed in a race"
        }

    ]
}

export const getVillains = () => {
    return database.villains.map(villain => ({...villain}))
}

export const getHeroes = () => {
    return database.heroes.map(hero => ({...hero}))
}
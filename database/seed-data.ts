interface SeedData {
    entries: SeedEntry[];
}

interface SeedEntry {
    description: string;
    status: string;
    createdAd: number;
}

export const seedData: SeedData = {
    entries: [
        {
            description: 'Pendiente : Lorem Lorem Lorem Lorem Lorem',
            status: 'pending',
            createdAd: Date.now()
        },
        {
            description: 'En Progreso : Lorem Lorem Lorem Lorem Lorem',
            status: 'in-progress',
            createdAd: Date.now() - 1000000
        },
        {
            description: 'Finalizado : Lorem Lorem Lorem Lorem Lorem',
            status: 'finished',
            createdAd: Date.now() - 100000
        }
    ]
};

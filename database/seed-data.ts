interface SeedData {
    entries: SeedEntry[];
}

interface SeedEntry {
    description: string;
    status: string;
    createdAt: number;
}

export const seedData: SeedData = {
    entries: [
        {
            description: 'Pendiente : Lorem Lorem Lorem Lorem Lorem',
            status: 'pending',
            createdAt: Date.now()
        },
        {
            description: 'En Progreso : Lorem Lorem Lorem Lorem Lorem',
            status: 'in-progress',
            createdAt: Date.now() - 1000000
        },
        {
            description: 'Finalizado : Lorem Lorem Lorem Lorem Lorem',
            status: 'finished',
            createdAt: Date.now() - 100000
        }
    ]
};

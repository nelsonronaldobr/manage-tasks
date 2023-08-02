export interface EntriesState {
    entries: Entry[];
}

export interface Entry {
    _id: string;
    description: string;
    createdAt: number;
    updatedAt: number;
    status: EntryStatus;
}

export type EntryStatus = 'pending' | 'in-progress' | 'finished';

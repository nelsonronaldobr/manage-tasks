export interface EntriesState {
    entries: Entry[];
}

export interface Entry {
    _id: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    status: EntryStatus;
}

export type EntryStatus = 'pending' | 'in-progress' | 'finished';

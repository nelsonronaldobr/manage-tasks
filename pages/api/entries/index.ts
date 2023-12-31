import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../database';
import { Entry, IEntry } from '../../../models';

type Data = { message: string } | IEntry[] | IEntry;

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    switch (req.method) {
        case 'GET':
            return getEntries(res);
        case 'POST':
            return postEntry(req, res);
        default:
            return res.status(400).json({ message: 'Endpoint no existe' });
    }
}

const getEntries = async (res: NextApiResponse<Data>) => {
    await db.connect();
    const entries = await Entry.find().sort({ createdAt: 'ascending' });
    await db.disconnect();
    res.status(200).json(entries);
};

export const postEntry = async (
    req: NextApiRequest,
    res: NextApiResponse<Data>
) => {
    const { description = '' } = req.body;
    const createEntry = new Entry({ description, createdAt: Date.now() });

    try {
        await db.connect();
        await createEntry.save();
        //await db.disconnect();
        return res.status(201).json(createEntry);
    } catch (error) {
        return res.status(500).json({
            message: 'Alguien salio mal, revisar consola del servidor'
        });
    } finally {
        await db.disconnect();
    }
};

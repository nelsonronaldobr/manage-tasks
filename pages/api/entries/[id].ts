import { isValidObjectId } from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../database';
import { Entry, IEntry } from '../../../models';

type Data = { message: string } | IEntry;

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { id } = req.query;
    if (!isValidObjectId(id)) {
        return res.status(400).json({ message: 'El id no es válido ' + id });
    }

    switch (req.method) {
        case 'GET':
            return getEntry(req, res);
        case 'PUT':
            return updateEntry(req, res);
        case 'DELETE':
            return deleteEntry(req, res);
        default:
            return res.status(400).json({ message: 'Endpoint no existe' });
    }
}

const updateEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const { id } = req.query;

    try {
        await db.connect();
        const entryUpdate = await Entry.findById(id);

        if (!entryUpdate) {
            return res.status(400).json({
                message: 'No hay entrada con el id' + id
            });
        }
        const {
            description = entryUpdate.description,
            status = entryUpdate.status
        } = req.body;

        const updatedEntry = await Entry.findByIdAndUpdate(
            id,
            { description, status },
            { runValidators: true, new: true }
        );

        return res.status(200).json(updatedEntry!);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Alguien salio mal, revisar consola del servidor'
        });
    } finally {
        //console.log('finally');
        await db.disconnect();
    }
};

export const getEntry = async (
    req: NextApiRequest,
    res: NextApiResponse<Data>
) => {
    const { id } = req.query;

    try {
        await db.connect();
        const entry = await Entry.findById(id);
        if (!entry) {
            return res.status(400).json({
                message: 'No hay entrada con el id' + id
            });
        }
        return res.status(200).json(entry);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Alguien salio mal, revisar consola del servidor'
        });
    } finally {
        //console.log('finally');
        await db.disconnect();
    }
};

export const deleteEntry = async (
    req: NextApiRequest,
    res: NextApiResponse<Data>
) => {
    const { id } = req.query;
    try {
        await db.connect();
        const entry = await Entry.findByIdAndDelete(id);
        if (!entry) {
            return res.status(400).json({
                message: 'No hay entrada con el id' + id
            });
        }
        return res.status(200).json(entry);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Alguien salio mal, revisar consola del servidor'
        });
    } finally {
        //console.log('finally');
        await db.disconnect();
    }
};

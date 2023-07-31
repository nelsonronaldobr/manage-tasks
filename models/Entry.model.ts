import mongoose, { Model, Schema } from 'mongoose';
import { Entry } from '../context/entries';

export interface IEntry extends Entry {}

const entrySchema = new Schema(
    {
        description: {
            type: String,
            required: true
        },
        status: {
            type: String,
            enum: {
                values: ['pending', 'in-progress', 'finished'],
                message: '{VALUE} no es un estado permitido'
            },
            default: 'pending'
        }
    },
    {
        timestamps: true
    }
);

const EntryModel: Model<IEntry> =
    mongoose.models.Entry || mongoose.model('Entry', entrySchema);

export default EntryModel;

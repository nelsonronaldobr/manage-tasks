import { List, Paper } from '@mui/material';
import { EntryCard } from './EntryCard';
import { EntryStatus } from '../../context/entries';
import { DragEvent, FC, useMemo } from 'react';
import { useEntries, useUI } from '../../hooks';
import style from './EntryList.module.css';

interface Props {
    status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {
    const { entries, updateEntry } = useEntries();
    const { isDragging, endDragging } = useUI();
    const entriesByStatus = useMemo(
        () => entries.filter((entry) => entry.status === status),
        [entries, status]
    );

    const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
        const id = event.dataTransfer.getData('text');
        const entry = entries.find(({ _id }) => _id === id)!;
        entry.status = status;
        updateEntry(entry);
        endDragging();
    };
    const allowDrop = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    return (
        <div
            onDrop={onDropEntry}
            onDragOver={allowDrop}
            className={isDragging ? style.dragging : ''}>
            <Paper
                sx={{
                    height: 'calc(100vh - 210px)',
                    overflow: 'auto',
                    backgroundColor: 'transparent',
                    padding: '4px 12px'
                }}>
                <List
                    sx={{
                        opacity: isDragging ? 0.2 : 1,
                        transition: 'all .3s'
                    }}>
                    {entriesByStatus.map((entry) => (
                        <EntryCard key={entry._id} entry={entry} />
                    ))}
                </List>
            </Paper>
        </div>
    );
};

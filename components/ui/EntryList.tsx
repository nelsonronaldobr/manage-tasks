import { List, Paper } from '@mui/material';
import { EntryCard } from './EntryCard';
import { EntryStatus } from '../../context/entries';
import { FC, useMemo } from 'react';
import { useEntries } from '../../hooks';

interface Props {
    status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {
    const { entries } = useEntries();

    const entriesByStatus = useMemo(
        () => entries.filter((entry) => entry.status === status),
        [entries, status]
    );

    return (
        <div>
            <Paper
                sx={{
                    height: 'calc(100vh - 175px)',
                    overflow: 'auto',
                    backgroundColor: 'transparent',
                    padding: '4px 12px'
                }}>
                <List
                    sx={{
                        opacity: 1
                    }}>
                    {entriesByStatus.map((entry) => (
                        <EntryCard key={entry._id} entry={entry} />
                    ))}
                </List>
            </Paper>
        </div>
    );
};

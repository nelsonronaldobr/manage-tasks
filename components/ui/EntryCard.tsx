import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    Typography
} from '@mui/material';
import { Entry } from '../../context/entries';
import { FC } from 'react';

interface Props {
    entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {
    return (
        <Card
            draggable
            sx={{ marginBottom: 1 }}
            className='animate__animated animate__fadeIn'>
            <CardActionArea>
                <CardContent>
                    <Typography sx={{ whiteSpace: 'pre-line' }}>
                        {entry.description}
                    </Typography>
                </CardContent>
                <CardActions
                    sx={{
                        display: 'flex',
                        justifyContent: 'end',
                        paddingRight: 2
                    }}>
                    <Typography variant='body2'>hace 30 min</Typography>
                </CardActions>
            </CardActionArea>
        </Card>
    );
};

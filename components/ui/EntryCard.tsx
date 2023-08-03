import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    Typography
} from '@mui/material';
import { Entry } from '../../context/entries';
import { DragEvent, FC, MouseEvent } from 'react';
import { useUI } from '../../hooks';
import { useRouter } from 'next/router';
import { dateFunctions } from '../../helpers';

interface Props {
    entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {
    const { endDragging, startDragging, isDragging } = useUI();

    const router = useRouter();

    const onDragStart = (event: DragEvent<HTMLDivElement>) => {
        event.dataTransfer.setData('text', entry._id);
        startDragging();
    };

    const onDragEnd = (event: DragEvent<HTMLDivElement>) => {
        endDragging();
    };

    const handleOnClick = (event: MouseEvent<HTMLDivElement>) => {
        router.push(`/entries/${entry._id}`);
    };

    return (
        <Card
            onClick={handleOnClick}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
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
                    <Typography variant='body2'>
                        hace {''}
                        {dateFunctions.getFormatDistanceToNow(entry.createdAt)}
                    </Typography>
                </CardActions>
            </CardActionArea>
        </Card>
    );
};

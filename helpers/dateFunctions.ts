import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';

export const getFormatDistanceToNow = (dateString: string) => {
    // Convertir la cadena de fecha a un objeto Date
    const date = new Date(dateString);
    const formNow = formatDistanceToNow(date, {
        locale: es
    });
    return formNow;
};

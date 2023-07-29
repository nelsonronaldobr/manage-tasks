import { useContext } from 'react';
import { UIContext } from '../context/ui';

export const useUI = () => {
    return useContext(UIContext);
};

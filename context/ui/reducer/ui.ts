export interface UIstate {
    sideMenuOpen: boolean;
    isAdding: boolean;
    alert: Alert;
}
export interface Alert {
    type: AlertType;
    text: string;
    open?: boolean;
}
type AlertType = 'error' | 'warning' | 'info' | 'success';

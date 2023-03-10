export interface Usuario {
    emailVerified: boolean;
    email:         string;
    facturas:      string[];
    disabled:      boolean;
    id:            string;
}
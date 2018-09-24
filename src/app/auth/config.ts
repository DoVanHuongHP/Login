interface AuthConfig{
    clientID: string;
    domain: string;
    callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
    clientID: '4pGfc813UcQrIweXV8hH25RCNomfByno',
    domain:'dohuong.auth0.com',
    callbackURL:'http://localhost:4200/callback',
}
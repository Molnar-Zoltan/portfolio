export interface Certificate {
    name: string;
    issuedBy: string;
    platform: string;
    date: Date;
    href: string;
}

export interface Badge {
    id: string;
    name: string;
    imageUrl: string;
    verifyUrl: string;
}

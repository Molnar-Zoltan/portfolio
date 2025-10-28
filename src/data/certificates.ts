export interface Certificate {
    name: string;
    issuedBy: string;
    platform: string;
    date: Date;
    href: string;
}

export const certificates: Certificate[] = [
    { 
        name: 'Meta Front-End Developer Professional Certificate',
        issuedBy: 'Meta',
        platform: 'Coursera',
        date: new Date(2025, 4),
        href: 'https://www.coursera.org/account/accomplishments/professional-cert/2F08KTWPRR7K' 
    },
    { 
        name: 'IBM Back-End JavaScript Developer Professional Certificate', 
        issuedBy: 'IBM',
        platform: 'Coursera',
        date: new Date(2025, 5),
        href: 'https://www.coursera.org/account/accomplishments/professional-cert/VYPADOQE9I33' 
    },
    { 
        name: 'IBM Full-Stack JavaScript Developer Professional Certificate', 
        issuedBy: 'IBM',
        platform: 'Coursera',
        date: new Date(2025, 5),
        href: 'https://www.coursera.org/account/accomplishments/professional-cert/AIBFH43DRH7M' 

    },
    { 
        name: 'JavaScript Foundations Professional Certificate by Mozilla', 
        issuedBy: 'Mozilla',
        platform: 'LinkedIn Learning',
        date: new Date(2025, 9),
        href: 'https://www.linkedin.com/learning/certificates/6059c5323f96953b0c044c9b545524423c340c9b4f7051003961baf9ae090bba?u=106534538' 

    },
]
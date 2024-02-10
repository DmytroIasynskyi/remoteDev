export type TJobItem = {
    id: number;
    badgeLetters: string;
    title: string;
    company: string;
    date: string;
    relevanceScore: number;
    daysAgo: number;
};

export type TJobItemDetails = {
    id: number;
    title: string;
    qualifications: string[];
    reviews: string[];
    company: string;
    description: string;
    badgeLetters: string;
    duration: string;
    salary: string;
    location: string;
    relevanceScore: number;
    daysAgo: number;
    coverImgURL: string;
    companyURL: string;
};


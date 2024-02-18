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

export type TJobItemApiResponse = {
    public: boolean;
    jobItem: TJobItemDetails;
}

export type TJobItemsApiResponse = {
    public: boolean;
    sorted: boolean;
    jobItems: TJobItem[];
}

export type TSortBy = "relevant" | "recent";

export type TPageDirection = "next" | "prev";

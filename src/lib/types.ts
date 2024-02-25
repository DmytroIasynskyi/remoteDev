export type TJobItem = {
    id: number;
    badgeLetters: string;
    title: string;
    company: string;
    date: string;
    relevanceScore: number;
    daysAgo: number;
};

export type TJobItemDetails = TJobItem & {
    qualifications: string[];
    reviews: string[];
    description: string;
    duration: string;
    salary: string;
    location: string;
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

export interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
    page: number | null;
}

export interface Paginated<T> {
    data: T[];

    current_page: number;
    last_page: number;
    per_page: number;
    total: number;

    from: number | null;
    to: number | null;

    first_page_url: string;
    last_page_url: string;
    next_page_url: string | null;
    prev_page_url: string | null;

    links: PaginationLink[];
}

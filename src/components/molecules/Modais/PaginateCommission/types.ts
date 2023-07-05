
export interface IPaginateCommissionProps {
    setCurrent_page: (page: number) => void
    previousPage: () => void;
    nextPage: () => void;
    first_page: number;
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
}
import { useContext, useEffect, useState } from "react";
import { PaginateContext } from "../../Paginate";
import { Main, PagesNumber, Row } from "./style"

interface PaginateCommissionProps {
    itemsPerPage: number;
    totalItems: number;
    
}

const PaginateCommission: React.FC<PaginateCommissionProps> = ({ itemsPerPage, totalItems }) => {
    const {
        paginate: { current_page, setCurrent_page }
    } = useContext(PaginateContext);

    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        setTotalPages(Math.ceil(totalItems / itemsPerPage));
    }, [itemsPerPage, totalItems]);

    const PAGE_RANGE = 5;
    const start = Math.max(1, current_page - Math.floor(PAGE_RANGE / 2));
    const end = Math.min(totalPages, start + PAGE_RANGE - 1);

    const pages = new Array(end - start + 1).fill(null).map((_, index) => start + index);

    return (
        <Main>
            <Row>
                {start > 1 && <PagesNumber onClick={() => setCurrent_page(1)}>1</PagesNumber>}
                {pages.map((page, index) => (
                    <PagesNumber
                        key={index}
                        Active={page === current_page}
                        onClick={() => setCurrent_page(page)}
                    >
                        {page}
                    </PagesNumber>
                ))}
                {end < totalPages && (
                    <PagesNumber onClick={() => setCurrent_page(totalPages)}>{totalPages}</PagesNumber>
                )}
            </Row>
        </Main>
    );
};

export default PaginateCommission;
import {Pagination, PaginationItem, Typography} from "@mui/material";

type MyPaginationPropsType = {
    count: number,
    page: number,
    onChange: (e: React.MouseEvent<HTMLElement, MouseEvent>, page: number) => void,  // eslint-disable-line react/no-unused-prop-types  // for TypeScript usage only, no need for React.MouseEvent in this case.  // eslint-disable-next-line react/prop-types
}

const MyPagination = ({ count, page, onChange }: MyPaginationPropsType) => {
    return (
        <Pagination
            count={count}
            page={page}
            onChange={onChange}
            shape="rounded"
            boundaryCount={1}
            siblingCount={0}
            renderItem={(item) => (
                <PaginationItem
                    {...item}
                    sx={(theme) => {
                        const style =  {
                            ...theme.typography.bodyRegular,
                        }

                        if(item.type === 'page'){
                            return {
                                ...style,
                                width: '32px',
                                height: '32px',
                                backgroundColor: `${item.selected ? theme.palette.primary.main : theme.palette.cardColor.main } !important`,
                                borderRadius: '4px',
                            }
                        }else{
                            return style
                        }

                    }}

                    slots={{
                        previous: () => <Typography variant='bodyRegular'>Prev</Typography>,
                        next: () => <Typography variant='bodyRegular'>Next</Typography>,
                    }}
                />
            )}
        />
    );
};

export default MyPagination
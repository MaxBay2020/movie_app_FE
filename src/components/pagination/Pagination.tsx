import {Pagination, PaginationItem, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";
import {ChangeEvent} from "react";

type MyPaginationPropsType = {
    count: number,
    page: number,
    onChange: (event: ChangeEvent<unknown>, page: number) => void
}

const MyPagination = ({ count, page, onChange }: MyPaginationPropsType) => {
    const { t } = useTranslation()

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
                        previous: () => <Typography variant='bodyRegular'>{t('actions.prev')}</Typography>,
                        next: () => <Typography variant='bodyRegular'>{t('actions.next')}</Typography>,
                    }}
                />
            )}
        />
    );
};

export default MyPagination
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroller';
import { GetNextPageParamFunction, useInfiniteQuery } from 'react-query';
import { getJWTHeader } from '../../axiosInstance';
import { getUser } from '../../localStorage';

import { ISaleItem } from '../../types';
import ProductOnSaleItem from '../productOnSaleItem/ProductOnSaleItem';
import {
    ProductOnSaleHeader,
    ProductOnSaleList,
    Section,
    StyledInfiniteScroller,
} from './ProductOnSale.style';

interface IProductOnSale {
    productOnSaleItems?: ISaleItem[];
}

const user = getUser();
const initialUrl = 'https://openmarket.weniv.co.kr/seller/';

const getProductOnSaleItem = async (url: string) => {
    const { data } = await axios.get(url, {
        headers: getJWTHeader(user),
    });

    console.log('data : ', data);

    return data;
};

const ProductOnSale = (props: IProductOnSale) => {
    const { productOnSaleItems } = props;

    const {
        data,
        fetchNextPage,
        hasNextPage,
        isLoading,
        isError,
        error,
        isFetching,
    } = useInfiniteQuery(
        'productOnSale',
        ({ pageParam = initialUrl }) => getProductOnSaleItem(pageParam),
        {
            getNextPageParam: (lastPage) => {
                console.log('lastPage : ', lastPage);
                return lastPage.next || undefined;
            },
        },
    );

    if (isLoading) return <div className="loading">Loading ...</div>;

    return (
        <>
            {/* <Section> */}
            <ProductOnSaleHeader>
                <span>상품정보</span>
                <span>판매가격</span>
                <span>수정</span>
                <span>삭제</span>
            </ProductOnSaleHeader>
            {/* <ProductOnSaleList> */}
            <StyledInfiniteScroller
                loadMore={fetchNextPage}
                hasMore={hasNextPage}
            >
                {/* {productOnSaleItems.map((productOnSaleItem) => (
                        <ProductOnSaleItem
                            productOnSaleItem={productOnSaleItem}
                        />
                    ))} */}
                {isFetching && <div className="loading">Fetching ...</div>}
                {data &&
                    data.pages.map((page) => {
                        console.log('page : ', page);
                        return (
                            page &&
                            page.results.map((productOnSaleItem: ISaleItem) => {
                                return (
                                    <ProductOnSaleItem
                                        productOnSaleItem={productOnSaleItem}
                                    />
                                );
                            })
                        );
                    })}
            </StyledInfiniteScroller>
            {/* </ProductOnSaleList> */}
            {/* </Section> */}
        </>
    );
};

export default ProductOnSale;

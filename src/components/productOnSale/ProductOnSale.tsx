import InfiniteScroll from 'react-infinite-scroller';
import { useSellerProduct } from '../../hooks/useSellerProduct';

import { ISaleItem } from '../../types';
import Loading from '../loading/Loading';
import ProductOnSaleItem from '../productOnSaleItem/ProductOnSaleItem';
import { ProductOnSaleHeader, Section } from './ProductOnSale.style';

const ProductOnSale = () => {
    const { data, fetchNextPage, hasNextPage, isFetching } = useSellerProduct();

    return (
        <>
            <Section>
                <ProductOnSaleHeader>
                    <span>상품정보</span>
                    <span>판매가격</span>
                    <span>수정</span>
                    <span>삭제</span>
                </ProductOnSaleHeader>
                <ul>
                    <InfiniteScroll
                        loadMore={fetchNextPage}
                        hasMore={hasNextPage}
                    >
                        {data &&
                            data.pages.map((page) => {
                                return (
                                    page &&
                                    page.results.map(
                                        (productOnSaleItem: ISaleItem) => {
                                            return (
                                                <ProductOnSaleItem
                                                    productOnSaleItem={
                                                        productOnSaleItem
                                                    }
                                                />
                                            );
                                        },
                                    )
                                );
                            })}
                    </InfiniteScroll>
                </ul>
            </Section>
        </>
    );
};

export default ProductOnSale;

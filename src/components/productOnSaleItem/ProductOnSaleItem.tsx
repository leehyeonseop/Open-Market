import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProductDelete } from '../../hooks/useProductDelete';
import ModalPortal from '../../modalPortal';
import { IProductOnSaleItem } from '../../types';
import Modal from '../modal/Modal';
import { Wrapper } from './ProductOnSaleItem.style';

const ProductOnSaleItem = (props: IProductOnSaleItem) => {
    const { productOnSaleItem } = props;

    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const navigate = useNavigate();
    const deleteItem = useProductDelete();

    return (
        <Wrapper>
            <div>
                <figure
                    style={{
                        backgroundImage: `url(${productOnSaleItem.image})`,
                    }}
                >
                    <img src={productOnSaleItem.image} alt="" />
                </figure>
                <div>
                    <span>{productOnSaleItem.product_name}</span>
                    <span>재고 : {productOnSaleItem.stock}개</span>
                </div>
            </div>
            <strong>{productOnSaleItem.price.toLocaleString('ko-KR')}원</strong>
            <button
                type="button"
                onClick={() =>
                    navigate('/productRegistration', {
                        state: {
                            mode: 'modify',
                            productOnSaleItem: productOnSaleItem,
                        },
                    })
                }
            >
                수정
            </button>
            <button type="button" onClick={() => setDeleteModalOpen(true)}>
                삭제
            </button>
            {deleteModalOpen && (
                <ModalPortal>
                    <Modal
                        MainContent={<p>상품을 삭제하시겠습니까?</p>}
                        positiveOnClick={async () => {
                            deleteItem(String(productOnSaleItem.product_id));
                            setDeleteModalOpen(false);
                        }}
                        positiveText="확인"
                        negativeOnClick={() => {
                            setDeleteModalOpen(false);
                        }}
                        negativeText="취소"
                    />
                </ModalPortal>
            )}
        </Wrapper>
    );
};

export default ProductOnSaleItem;

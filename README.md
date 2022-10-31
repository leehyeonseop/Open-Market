<h1>🛒 오픈마켓</h1>

-   프로젝트 기간 : 2022.09 ~ current </br>
    ❗️ 현재 진행하고 있는 개인 프로젝트입니다. </br>
    반응형 구현 예정입니다.

-   배포 URL : https://open-market.netlify.app/
    -   구매자ID / 판매자ID  : buyer001 / seller001
    -   PassWord : test4146

<br>

<div align="center">
<img src="https://user-images.githubusercontent.com/94344796/198682548-5a284fd4-faa3-41ae-ad80-e9a4a998982e.png">
</div>
<br>

<div align="center">
<h1>📄 개요</h1>
</div>

```
오픈마켓은 누구나 물건을 사고 팔 수 있는 서비스입니다.
회원은 구매자 / 판매자로 나뉩니다.
구매자는 상품을 장바구니에 담거나, 수정, 삭제, 구매할 수 있습니다.
판매자는 상품을 등록, 수정, 삭제할 수 있습니다.
```

<br>

<div align="center">

<h1>⚙️ 개발 환경 및 배포 URL</h1>
  
</div>

### [기술]

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=black"> <img src="https://img.shields.io/badge/react query-FF4154?style=for-the-badge&logo=react query&logoColor=black"> <img src="https://img.shields.io/badge/recoil-C2A633?style=for-the-badge&logo=recoil query&logoColor=black"> <img src="https://img.shields.io/badge/react hook form-EC5990?style=for-the-badge&logo=react hook form&logoColor=black"> <img src="https://img.shields.io/badge/styled-components-DB7093?style=for-the-badge&logo=styled-components&logoColor=black">
<br/>

-   BackEnd: 제공된 API
    <br/>
-   Version:

```
    "axios": "^0.27.2",
    "react": "^18.2.0",
    "react-hook-form": "^7.34.2",
    "react-query": "^3.39.2",
    "react-router-dom": "^6.4.2",
    "recoil": "^0.7.5",
    "styled-components": "^5.3.5",
    "typescript": "^4.8.2",
```

❗️
`Internet Explorer` 에서는 제대로 동작하지 않습니다. 타 브라우저 사용을 권장합니다.

</br>

### [개발 환경]

<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=black"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

</br>

### [배포 URL]

-   URL: https://open-market.netlify.app/
-   계정
    -   🧑💻 `구매자ID / 판매자ID`  : buyer001 / seller001
    -   🔐 `PassWord` : test4146

</br>
</br>

<div align="center">
<h1>⚙️ 구현 기능</h1>
</div>

```
- 🔐 인증
    - 로그인 / 로그아웃
    - 구매자 / 판매자 회원가입
    - 유효성 검사
    - 계정 / 사업자등록번호 검증
- 🏠 홈
    - 전체 상품 목록
    - 페이지네이션
- 📚 상품
    - 상품 상세
    - 상품 수량 수정
    - 상품 주문 및 결제
    - 장바구니 담기
- 🛒 장바구니
    - 장바구니에 담긴 상품
    - 장바구니 상품 수량 수정
    - 장바구니 상품 삭제
    - 체크박스 개별 / 전체 선택
    - 선택된 상품 가격 정보
- 📝 주문하기
    - 상품상제 페이지에서 바로주문
    - 장바구니 페이지에서 개별주문
    - 장바구니 페이지에서 전체주문
- 🏢 판매자 센터
    - 판매중인 상품 목록
    - 무한스크롤
    - 상품 등록, 수정, 삭제

```

<br>

<br>

<br>

<div align="center">

<h1>🧑🏻‍💻 주요코드</h1>
  
</div>

👍 <strong>다음 페이지에 있는 데이터를 prefetch 하여 사용자 경험 향상</strong>
https://github.com/leehyeonseop/Open-Market/blob/47ab3e94fefd601d73fef9ffd3ce908edbe541ca/src/hooks/useProduct.ts#L1-L39

현재 페이지 데이터를 불러올 때마다 다음 페이지 데이터를 prefetch 합니다.<br />
페이지가 넘어갈 때마다 cached 된 데이터를 사용하여 사용자가 다음 페이지 데이터를 불러올 때까지 기다릴 필요가 없습니다.
<br /> <br />

👍 <strong>Promise.all을 사용한 병렬적 비동기 처리로 속도 향상</strong>
https://github.com/leehyeonseop/Open-Market/blob/7ca0c3f1c813c4e0527da27615d8857203d1ea29/src/pages/paymentPage/PaymentPage.tsx#L51-L64

주문하기는 세가지 방법으로 나뉩니다. </br>

1. 바로 주문하기(product detail 페이지에서 접근) </br>
2. 카트에서 주문하기(cart에서 is_active = True인 값만 주문) </br>
3. 카트에서 한가지만 주문하기(장바구니 페이지에서 주문하기 버튼 누를 경우) </br>

바로 주문하기의 경우가 아닌 경우 현재 주문하려는 상품들의 is_active를 모두 확인해줘야 합니다. </br>
이를 위해 orderItemCheck 함수를 사용해 Promise List를 얻어온 후 </br>
Promise.all 을 사용하여 비동기 처리 속도를 향상했습니다.
<br /> <br />


👍 <strong>useQueries를 사용한 동적 병렬 쿼리 작업</strong>
https://github.com/leehyeonseop/Open-Market/blob/7ca0c3f1c813c4e0527da27615d8857203d1ea29/src/pages/cartPage/CartPage.tsx#L27-L38

장바구니에 담긴 상품들 목록에는 product_id가 있습니다. <br />
장바구니 페이지에서 상품들 데이터를 불러오기 위해서는 product_id를 사용하여 상품 상세 정보를 불러와야 합니다. <br />
useQueries 훅을 사용하여 동적으로 병렬 쿼리 작업을 수행하고 해당 데이터들을 캐싱했습니다.
<br /> <br />

👍 <strong>useInfiniteQuery를 사용한 무한스크롤</strong>
https://github.com/leehyeonseop/Open-Market/blob/5b89d3057a2aa1edccd4689f8dbd46600597250c/src/hooks/useSellerProduct.ts#L8-L47
판매자 상품목록을 불러오는 과정에서 InfiniteScroll와 useInfiniteQuery를 사용하여 무한스크롤 형식으로 구현했습니다.

<div >

<br>

<div align="center">

<h1>🗂 폴더 트리</h1>
  
</div>

<br>

```
📦public
 ┣ 📜index.html
 ┗ 📜_redirects
📦src
 ┣ 📂app
 ┃ ┣ 📜App.tsx
 ┃ ┣ 📜GlobalStyle.ts
 ┃ ┗ 📜Router.tsx
 ┣ 📂assets
 ┃ ┣ 📂icons
 ┃ ┗ 📂images
 ┣ 📂auth
 ┣ 📂axiosInstance
 ┣ 📂components
 ┃ ┣ 📂button
 ┃ ┣ 📂carousel
 ┃ ┣ 📂cart
 ┃ ┃ ┣ 📂cartInfo
 ┃ ┃ ┣ 📂cartItem
 ┃ ┃ ┗ 📂cartList
 ┃ ┣ 📂dropDown
 ┃ ┣ 📂error
 ┃ ┣ 📂header
 ┃ ┃ ┣ 📂sellerHeader
 ┃ ┣ 📂join
 ┃ ┃ ┣ 📂sellor
 ┃ ┣ 📂loading
 ┃ ┣ 📂login
 ┃ ┣ 📂modal
 ┃ ┣ 📂nav
 ┃ ┣ 📂payment
 ┃ ┃ ┣ 📂deliveryInfo
 ┃ ┃ ┣ 📂finalPayment
 ┃ ┃ ┣ 📂paymentItem
 ┃ ┃ ┗ 📂paymentMethod
 ┃ ┣ 📂precaution
 ┃ ┣ 📂product
 ┃ ┃ ┣ 📂productDetail
 ┃ ┃ ┣ 📂productItem
 ┃ ┃ ┗ 📂productList
 ┃ ┣ 📂productOnSale
 ┃ ┣ 📂productOnSaleItem
 ┃ ┗ 📂success
 ┣ 📂hooks
 ┣ 📂localStorage
 ┣ 📂pages
 ┃ ┣ 📂cartPage
 ┃ ┣ 📂homePage
 ┃ ┣ 📂joinCompletePage
 ┃ ┣ 📂joinPage
 ┃ ┣ 📂loginPage
 ┃ ┣ 📂paymentPage
 ┃ ┣ 📂productDetailPage
 ┃ ┣ 📂productRegistrationPage
 ┃ ┗ 📂sellerCenterPage
 ┣ 📂react-query
 ┣ 📜atom.ts
 ┣ 📜custom.d.ts
 ┣ 📜index.tsx
 ┣ 📜modalPortal.ts
 ┗ 📜types.ts
```

<br>

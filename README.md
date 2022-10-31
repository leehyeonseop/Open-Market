<h1>🎬 오픈마켓</h1>

-   프로젝트 기간 : 2022.09 ~ current </br>
    ❗️ 현재 진행하고 있는 프로젝트입니다. </br>
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
구매자는 상품을 장바구니에 담거나, 구매할 수 있습니다.
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
    - 토큰 검증
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

<h1>🧑🏻‍💻 구현 UI</h1>
  
</div>

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

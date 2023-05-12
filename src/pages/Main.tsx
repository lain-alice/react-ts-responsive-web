import styled from "styled-components";
import Products from "../components/Products";
import "../App.css";

const BREAK_POINT_TABLET = 768;

const Main = () => {
  return (
    <MainContainer>
      <ProductsBox>
        <Products />
      </ProductsBox>
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
`;

const ProductsBox = styled.div`
  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
  }
`;

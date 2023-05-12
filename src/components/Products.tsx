import styled from "styled-components";

const Products = () => {
  return (
    <ProductsContainer>
      <img src="/image/products03.jpg" alt="tea" />
      <h3>햄퍼 Hamper</h3>
      <p>영국 선물문화의 아이콘</p>
    </ProductsContainer>
  );
};

export default Products;

const ProductsContainer = styled.div``;

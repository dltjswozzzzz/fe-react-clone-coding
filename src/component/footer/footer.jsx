import styled from "styled-components";

const FooterBox = styled.div`
  background-color: #f8f9fa !important;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const Footer = ({ children }) => {
  return (
    <>
      <FooterBox>{children}</FooterBox>
    </>
  );
};

export default Footer;

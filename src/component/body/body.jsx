import styled from "styled-components";

const BodyBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0px;
  padding: 96px 32px;
`;

const Title = styled.p`
  font-size: 35px;
  color: grey;
  margin: 0px;
`;

const Text = styled.p`
  font-size: 25px;
  color: grey;
  width: 60%;
`;

const ButtonBox = styled.div`
  display: flex;
`;

const MainButton = styled.button`
  width: 150px;
  height: 35px;
  background-color: skyblue;
  margin-right: 5px;
  border: none;
  border-radius: 0.2rem;
  &:hover {
    background-color: blue;
    transition-duration: 0.1s;
    transition-delay: 0.1s;
  }
`;

const MainButtonText = styled.a`
  font-size: 15px;
  margin: 0px;
  color: white;
  text-decoration: none;
`;

const SecondButton = styled.button`
  width: 150px;
  height: 35px;
  background-color: lightgrey;
  border: none;
  border-radius: 0.2rem;
  &:hover {
    background-color: rgb(0, 0, 0, 0.5);
    transition-duration: 0.1s;
    transition-delay: 0.1s;
  }
`;

const SecondButtonText = styled.a`
  text-decoration: none;
  font-size: 15px;
  margin: 0px;
  color: white;
`;

const Body = (props) => {
  return (
    <>
      <BodyBox>
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
        <ButtonBox>
          <MainButton>
            <MainButtonText href="https://getbootstrap.com/docs/4.3/examples/album/#">
              {props.mainbuttontext}
            </MainButtonText>
          </MainButton>
          <SecondButton>
            <SecondButtonText href="https://getbootstrap.com/docs/4.3/examples/album/#">
              {props.secondbuttontext}
            </SecondButtonText>
          </SecondButton>
        </ButtonBox>
      </BodyBox>
    </>
  );
};

export default Body;

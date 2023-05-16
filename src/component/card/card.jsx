import styled from "styled-components";

const CardEach = styled.div`
  width: 300px;
  height: 425px;
  margin: 50px;
  border-radius: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const CardImage = styled.img`
  height: 290px;
  margin: 10px 10px 0 10px;
  background-color: gray;
`;

const CardTitle = styled.p`
  font-size: 30px;
  margin: 20px 0 10px 20px;
  font-weight: bold;
`;

const CardBottom = styled.div`
  box-shadow: 0.01px 0.01px 0.01rem 0.02rem;
  /* background-color: grey; */
`;

const CardText = styled.p`
  font-size: 18px;
  color: grey;
  font-weight: 300;
  margin: 0 15px 15px 20px;
`;

const CardDisplay = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const CardButtonS = styled.div``;

const CardButton = styled.button`
  width: 50px;
  height: 30px;
  border-style: solid 1px;
  background-color: white;
  cursor: pointer;
  &:hover {
    background-color: rgb(0, 0, 0, 0.5);
    color: rgb(255, 255, 255, 100);
  }
  display: inline-block;
`;

const CardButtonText = styled.p`
  font-size: 15px;
  margin: 0px;
`;

const CardMinute = styled.p`
  font-size: 1rem;
  display: inline-block;
`;

const Card = (props) => {
  return (
    <>
      <CardEach>
        <CardImage alt={props.img} src={props.img}></CardImage>
        <CardBottom>
          <CardText>{props.text}</CardText>
          <CardDisplay>
            <CardButtonS>
              <CardButton>
                <CardButtonText>{props.cardbuttontext}</CardButtonText>
              </CardButton>
              <CardButton>
                <CardButtonText>{props.cardbuttontext2}</CardButtonText>
              </CardButton>
            </CardButtonS>
            <CardMinute>{props.cardminute}</CardMinute>
          </CardDisplay>
        </CardBottom>
      </CardEach>
    </>
  );
};

export default Card;

import styled from "styled-components";

const TailBox = styled.div`
  width: 100%;
  height: 200px;
  margin-top: 100px;
`;

const TailText = styled.div`
  display: flex;
  justify-content: space-around;
`;

const TailTextLeft = styled.p`
  color: black;
`;

const TailTextRight = styled.a`
  color: blue;
`;

const Tail = () => {
  return (
    <>
      <TailBox>
        <TailText>
          <TailTextLeft>
            Album example is © Bootstrap, but please download and customize it
            for yourself! <br></br> New to Bootstrap?
            <a href="https://getbootstrap.com/"> Visit the homepage</a> or read
            our{" "}
            <a href="https://getbootstrap.com/docs/4.3/getting-started/introduction/">
              getting started guide.
            </a>
          </TailTextLeft>
          <TailTextRight href="https://getbootstrap.com/docs/4.3/examples/album/#">
            Back to top
          </TailTextRight>
        </TailText>
      </TailBox>
    </>
  );
};

export default Tail;

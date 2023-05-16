// 해당 위치에 필요한 컴포넌트를 바탕으로 직접 Bootstrap Album 페이지를 개발하시면 됩니다.
import React from "react";
import Card from "./component/card/card";
import Body from "./component/body/body";
import Top from "./component/top/top";
import Footer from "./component/footer/footer";
import Tail from "./component/tail/tail";
import styled from "styled-components";

const ThreeCard = styled.div`
  display: flex;
`;

function App() {
  return (
    <>
      <Top></Top>
      <Body
        title="Album example"
        text="Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely."
        mainbuttontext="Main call to action"
        secondbuttontext="Secondary action"
      ></Body>
      <Footer>
        <ThreeCard>
          <Card
            img="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&w=1000&q=80"
            text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            cardbuttontext="View"
            cardbuttontext2="Edit"
            cardminute="9 mins"
          ></Card>
          <Card
            img="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&w=1000&q=80"
            text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            cardbuttontext="View"
            cardbuttontext2="Edit"
            cardminute="9 mins"
          ></Card>
          <Card
            img="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&w=1000&q=80"
            text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            cardbuttontext="View"
            cardbuttontext2="Edit"
            cardminute="9 mins"
          ></Card>
        </ThreeCard>
        <ThreeCard>
          <Card
            img="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&w=1000&q=80"
            text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            cardbuttontext="View"
            cardbuttontext2="Edit"
            cardminute="9 mins"
          ></Card>
          <Card
            img="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&w=1000&q=80"
            text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            cardbuttontext="View"
            cardbuttontext2="Edit"
            cardminute="9 mins"
          ></Card>
          <Card
            img="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&w=1000&q=80"
            text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            cardbuttontext="View"
            cardbuttontext2="Edit"
            cardminute="9 mins"
          ></Card>
        </ThreeCard>
        <ThreeCard>
          <Card
            img="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&w=1000&q=80"
            text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            cardbuttontext="View"
            cardbuttontext2="Edit"
            cardminute="9 mins"
          ></Card>
          <Card
            img="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&w=1000&q=80"
            text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            cardbuttontext="View"
            cardbuttontext2="Edit"
            cardminute="9 mins"
          ></Card>
          <Card
            img="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&w=1000&q=80"
            text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            cardbuttontext="View"
            cardbuttontext2="Edit"
            cardminute="9 mins"
          ></Card>
        </ThreeCard>
      </Footer>
      <Tail></Tail>
    </>
  );
}

export default App;

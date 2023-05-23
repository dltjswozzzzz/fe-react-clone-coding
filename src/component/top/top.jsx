import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import { AiOutlineCamera } from "react-icons/ai";
import React, { useState } from "react";

const TopBox = styled.div`
  width: 100%;
  /* height: 50px; */
  background-color: #343a40;
  display: flex;
  flex-direction: column;
  padding: 0px 150px 0px 150px;
  justify-content: space-around;
`;

const TopBlock = styled.div`
  width: 70%;
  height: 200px;
  display: none;
`;

const TopBlockText = styled.div`
  width: auto;
  display: flex;
`;

const TopBlockTextLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TopBlockTextLeftAbout = styled.p`
  font-size: larger;
  color: white;
`;

const TopBlockTextLeftAboutText = styled.p`
  font-size: small;
  color: grey;
`;

const TopBlockTextRight = styled.div`
  width: 40%;
  margin-left: 100px;
  margin-right: 100px;
  display: flex;
  flex-direction: column;
`;

const TopBlockTextRightContact = styled.p`
  font-size: larger;
  color: white;
`;

const TopBlockTextRightContactText = styled.p`
  font-size: small;
  color: white;
`;

const TopNoneBlock = styled.div`
  width: 70%;
  height: 50px;
  display: flex;
  color: white;
  justify-content: space-between;
  align-items: center;
`;

const TopNoneBlockAlbum = styled.a`
  color: white;
  text-decoration: none;
  display: flex;
`;

const TopNoneBlockHamberger = styled.div`
  cursor: pointer;
`;

// const AlbumText = styled.p`
//   color: white;
// `;

const Top = (props) => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  function handleClick() {
    setIsDisplayed(!isDisplayed);
  }
  return (
    <>
      <TopBox>
        <TopBlock
          style={{
            display: isDisplayed ? "block" : "none",
            transition: "opacity 0.5s ease-in-out",
            opacity: isDisplayed ? 1 : 0,
          }}
        >
          <TopBlockText>
            <TopBlockTextLeft>
              <TopBlockTextLeftAbout>About</TopBlockTextLeftAbout>
              <TopBlockTextLeftAboutText>
                Add some information about the album below, the author, or any
                other background context. Make it a few sentences long so folks
                can pick up some informative tidbits. Then, link them off to
                some social networking sites or contact information.
              </TopBlockTextLeftAboutText>
            </TopBlockTextLeft>
            <TopBlockTextRight>
              <TopBlockTextRightContact>Contact</TopBlockTextRightContact>
              <TopBlockTextRightContactText>
                <p>Follow on Twitter </p>
                <p>Like on Facebook</p> <p> Email me </p>
              </TopBlockTextRightContactText>
            </TopBlockTextRight>
          </TopBlockText>
        </TopBlock>
        <TopNoneBlock>
          <TopNoneBlockAlbum href="https://getbootstrap.com/docs/4.3/examples/album/#">
            <AiOutlineCamera size="25px"></AiOutlineCamera>
            {props.album}
          </TopNoneBlockAlbum>
          <TopNoneBlockHamberger>
            <FiMenu onClick={handleClick}></FiMenu>
          </TopNoneBlockHamberger>
        </TopNoneBlock>
      </TopBox>
    </>
  );
};

export default Top;

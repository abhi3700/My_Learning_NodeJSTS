import React, { Component } from "react";
import styled, { css } from "styled-components";
import CupertinoSearchBarBasic from "../components/CupertinoSearchBarBasic";
import MaterialCheckboxWithLabel from "../components/MaterialCheckboxWithLabel";

function App(props) {
  return (
    <>
      <Rect></Rect>
      <LoremIpsum>Lorem Ipsum</LoremIpsum>
      <CupertinoSearchBarBasic
        style={{
          height: 44,
          width: 375,
          marginTop: 200,
          marginLeft: 109,
        }}
      ></CupertinoSearchBarBasic>
      <LoremIpsum2Row>
        <LoremIpsum2></LoremIpsum2>
        <MaterialCheckboxWithLabel
          style={{
            height: 40,
            width: 188,
            marginLeft: 11,
          }}
        ></MaterialCheckboxWithLabel>
      </LoremIpsum2Row>
    </>
  );
}

const Rect = styled.div`
  width: 1105px;
  height: 359px;
  background-color: #e6e6e6;
  margin-top: -611px;
  margin-left: -1105px;
`;

const LoremIpsum = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 122px;
  margin-left: 520px;
`;

const LoremIpsum2 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 1px;
`;

const LoremIpsum2Row = styled.div`
  height: 40px;
  flex-direction: row;
  display: flex;
  margin-top: -85px;
  margin-left: 97px;
  margin-right: 1070px;
`;

export default App;

import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";

function MaterialCheckboxWithLabel(props) {
  return (
    <Container {...props}>
      <MaterialCommunityIconsIcon
        name={props.checked ? "checkbox-marked" : "checkbox-blank-outline"}
        style={{
          color: "#3F51B5",
          fontSize: 28,
          lineHeight: "28px",
          margin: 0
        }}
      ></MaterialCommunityIconsIcon>
      <CheckLabel>
        {props.label || "Only show products in search bar"}
      </CheckLabel>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 20px;
  background-color: transparent;
  flex-direction: row;
`;

const CheckLabel = styled.span`
  font-family: Arial;
  font-size: 9px;
  color: rgba(0,0,0,0.87);
  width: 162px;
  margin: 0px;
`;

export default MaterialCheckboxWithLabel;

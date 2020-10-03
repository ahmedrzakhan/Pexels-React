import React, { Component } from "react";
import styled from "styled-components";

const Div = styled.div`
  padding: 30px;
`;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Img = styled.img`
  border-radius: 3px;
  width: 400px;
  margin: 20px;
`;

const RenderPhotos = ({ data }) => {
  return (
    <Div>
      <Flex>
        {data.map((item) => (
          <div key={item.id}>
            <Img src={item.src.original} alt={item.id} />
          </div>
        ))}
      </Flex>
    </Div>
  );
};

export default RenderPhotos;

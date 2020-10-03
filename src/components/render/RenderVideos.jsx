import React from "react";
import styled from "styled-components";

const Div = styled.div`
  padding: 30px;
`;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Video = styled.video`
  border-radius: 3px;
  width: 430px;
  height: 265px;
  margin: 15px;
`;

const RenderVideos = ({ data }) => {
  return (
    <Div>
      <Flex>
        {data.map((item) => (
          <div key={item.id}>
            <Video controls alt={item.video_files[0].id}>
              <source
                src={item.video_files[0].link}
                type={item.video_files[0].file_type}
              />
            </Video>
          </div>
        ))}
      </Flex>
    </Div>
  );
};

export default RenderVideos;

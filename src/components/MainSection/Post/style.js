import styled from '@emotion/styled';

export const PostContainer = styled.div`
  height: 200px;
  padding: 20px;
  margin: 20px;
  display: flex;
  border-radius: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;
export const InfoContainer = styled.div`
  position: relative;
  width: calc(100% - 300px);
  height: 100%;
  padding: 10px;
  border-radius: 16px;
`;
export const InfoContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const TravelName = styled.h3`
  margin: 0;
  font-size: 18px;
`;
export const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  bottom: 30px;
`;

export const LikeAndCommentContainer = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  justify-content: space-around;
`;

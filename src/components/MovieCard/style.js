import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardStyled = styled(Link)`
  display: flex;
  background: #ebebeb;
  margin: 20px 0;
  text-decoration: none;
  color: #7a7a7a;

  @media ( max-width: 768px) {
    flex-direction: column;
  }
`;

export const PosterBox = styled.div`
  position: relative;
  height: 0;
  overflow: hidden;
  padding-bottom: 37.8%;
  width: 25%;
  margin:  auto;
  
  @media ( max-width: 768px) {
    width: 50%;
    padding-bottom: 75%;
  }
  
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;

  @media ( max-width: 768px) {
    width: 100%;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;

  h2 {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: #116193;
    height: 65px;
    font-size: 24px;
    color: #02d7da;
    font-family: "Abel";
    padding: 0 10px 0 85px;
    
    @media ( max-width: 768px) {
      height: auto;
    }
  }
`;

export const Punctuation = styled.div`
  position: absolute;
  bottom: -20px;
  background: #116193;
  left: 10px;
  height: 65px;
  width: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;

  span {
    border: 4px solid #00e8e4;
    border-radius: 100%;
    width: 93%;
    height: 93%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #00e8e4;
    font-size: 22px;
  }
`;

export const CardBody = styled.div`
  > span {
    padding-left: 85px;
    color: #a1a1a1;
    font-size: 14px;
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;  
    overflow: hidden;
  }
`;

export const CardContent = styled.div`
  padding: 20px;
`;

export const Categories = styled.div`
  padding: 20px 0;
  display: flex;
  flex-wrap: wrap;

  span{
    margin: 5px;
    border: #116193 solid 1px;
    padding: 0 5px;
    font-size: 12px;
    border-radius: 25px;
    background: #fff;
    height: 25px;
    display: flex;
    align-items: center;
  }
`;


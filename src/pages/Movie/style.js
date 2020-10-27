import styled from 'styled-components';

export const ArrowHome =  styled.img`
  width: 30px;  
  margin: 20px 0 10px;
`;

export const MovieStyled = styled.div`
  display: block;
  margin: 10px 0;
  background: #f2f2f2;
`;

export const MovieHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #e6e6e6;
  padding: 15px 20px 10px;

  h1 {
    color: #116193;
    font-size: 30px;
    font-family: "Abel";
  }

  span {
    color: #959595;
    font-size: 16px;
  }

  @media ( max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const MovieBody = styled.div`
  display: flex;

  @media ( max-width: 768px) {
    flex-direction: column;
  }
`;

export const MoviePoster = styled.div`
  width: 33%;
  height: 0;
  padding-bottom: 50%;
  position: relative;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media ( max-width: 768px) {
    width: 100%;
    padding-bottom: 150%;
  }
`;

export const MovieContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 67%;
  padding: 20px;

  h3 {
    color: #116193;
    font-size: 22px;
    font-family: "Abel";
    display: flex;
    border-bottom: 2px solid #79edeb;
    padding: 5px 0;
    margin-bottom: 10px;
  }

  p {
    margin: 5px 0 10px;
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;  
    overflow: hidden;
  }

  @media ( max-width: 768px) {
    width: 100%;
  }
`;

export const MovieInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;

  h4 {
    color: #116193;
    font-size: 18px;
    font-family: "Abel";
    display: flex;
  }

  span {
    font-size: 14px;
    color: #7c7c7c;
  }

  @media ( max-width: 768px) {
    width: 50%;
    text-align: left;
    align-items: flex-start;
    margin: 5px 0;
  }
`;

export const FrameBox = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  margin-bottom: 55px;
  z-index: 999;

  h2 {
    color: #116193;
    font-size: 22px;
    font-family: "Abel";
    display: flex;
    border-bottom: 2px solid #79edeb;
    padding: 5px 0;
    margin-bottom: 10px;
  }

  iframe {
    position: absolute;
    border: none;
    width: 100%;
    height: 100%;
  }
`;

export const MovieGener = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
`;

export const Genres = styled.div`
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

  @media ( max-width: 768px) {
    width: 55%;
  }
`; 

export const Punctuation = styled.div`
  background: #116193;
  height: 110px;
  width: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;

  span {
    border: 6px solid #00e8e4;
    border-radius: 100%;
    width: 93%;
    height: 93%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #00e8e4;
    font-size: 36px;
  }
`;
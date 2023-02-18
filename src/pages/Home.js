import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { primaryColor, secondaryColor } from '../styles/GlobalStyle';
import Logo from '../assets/images/loadingLogo.png';

const Wrapper = styled.section`
`

const Img = styled.img`
  width: auto;
`

const Title = styled.p`
  font-family: 'Noto Sans KR Black';
  font-style: italic;
  font-size: 1.5rem;
  color: ${primaryColor};
  text-align: center;
  margin-bottom: 0;
`;

const Bold = styled.span`
  font-family: 'Noto Sans KR Bold';
  font-weight: 900;
`

const SubTitle = styled.p`
  font-family: 'Noto Sans KR Bold';
  font-size: 0.8rem;
  font-weight: 900;
  color: ${secondaryColor};
  text-align: center;
`

const Bracket = styled.span`
  visibility: hidden;
`

const Home = () => {
  const navigate = useNavigate();
  const loading = () => {
    setTimeout(() => {
      navigate('/question');
    }, 3000);
  };

  useEffect(() => {
    loading();
    return () => {
      clearTimeout(loading);
    };
  }, []);

  return (
    <>
      <Wrapper>
        <Img src={Logo} />
        <Title>Call me by your <Bold>TEXT</Bold></Title>
        <SubTitle>나의 (<Bracket>빈칸</Bracket>), 당신의 ____</SubTitle>
      </Wrapper>
    </>
  );
};

export default Home;

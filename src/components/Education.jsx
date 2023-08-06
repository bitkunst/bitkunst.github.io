import { useEffect, useRef } from "react";
import styled from "styled-components";
import { SubTitle, Subject, Wrapper } from "./Common";

const TextBox = styled.div`
  padding: 30px 0px;
  opacity: 0.5;
  transform: translateY(-10px);
  transition: all 0.7s;
`;

const SummaryText = styled.p`
  font-size: 17px;
  font-weight: 300;
  padding: 15px 0px;
  line-height: 30px;

  @media (max-width: 1024px) {
    font-size: 15px;
  }

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

const SubTextBolder = styled.p`
  font-size: 18px;
  font-weight: 400;
  padding: 3px 0px;

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

const SubText = styled.p`
  font-size: 16px;
  font-weight: 300;
  padding: 3px 0px;

  @media (max-width: 767px) {
    font-size: 15px;
  }
`;

function Education() {
  const educationRef = useRef();
  useEffect(() => {
    let observer = new IntersectionObserver((e) => {
      e.forEach((v) => {
        if (v.isIntersecting) {
          v.target.style.transform = "translateY(0px)";
          v.target.style.opacity = 1;
        } else {
          v.target.style.transform = "translateY(-10px)";
          v.target.style.opacity = 0;
        }
      });
    });
    observer.observe(educationRef.current);
  }, []);
  return (
    <Wrapper>
      <SubTitle>Education.</SubTitle>
      <TextBox ref={educationRef}>
        <Subject>서울시립대학교</Subject>
        <SubTextBolder>
          자연과학대학 수학과 전공 / 통계학과 복수전공
        </SubTextBolder>
        <SubText>2016. 03 – 2022. 08</SubText>
        <br></br>
        <Subject>블록체인 기반 핀테크 및 응용 SW 개발자 양성과정 수료</Subject>
        <SubTextBolder>경일 게임 아카데미</SubTextBolder>
        <SubText>2021. 12 – 2022. 10</SubText>
        <SummaryText>
          비전공자를 대상으로 하는 전문 교육 과정으로 웹 프로그래밍에 관한
          전반적인 교육을 받았습니다. HTML, CSS, JavaScript와 같은 기초적인
          부분부터 시작하여 Node.js 기반의 백엔드, React를 활용한 프론트엔드,
          MySQL을 활용한 데이터베이스, AWS EC2 기반의 서버 배포 등을 배웠습니다.
          뿐만 아니라 TypeScript를 활용한 토이 비트코인 빌드, Web3를 활용한
          디앱(Dapp) 제작, Solidity를 활용한 스마트 컨트랙트 작성 및 배포 등을
          배우면서 블록체인 개발에 관한 지식을 쌓았습니다. 그리고 교육 과정을
          수료하는 동안 4번의 팀 프로젝트를 경험하였으며 이를 통해 팀 단위로
          협업하여 개발하는 방법에 대해 배우고 터득할 수 있었습니다.
        </SummaryText>
      </TextBox>
    </Wrapper>
  );
}

export default Education;

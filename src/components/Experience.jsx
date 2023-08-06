import { useEffect, useRef } from "react";
import styled from "styled-components";
import { MdTransitEnterexit } from "react-icons/md";
import { VscCircleSmall } from "react-icons/vsc";
import { SubTitle, Subject, DetailSubject, Wrapper } from "./Common";

const FlexBox = styled.div`
  padding: 40px 0px;
  box-sizing: border-box;
  display: flex;
  opacity: 0.5;
  transform: translateY(-10px);
  transition: all 0.7s;

  @media (max-width: 767px) {
    padding: 20px 0px;
    flex-direction: column;
  }
`;

const SummaryBox = styled.div`
  width: 27%;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

const TextBox = styled.div`
  width: 71%;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

const SummaryText = styled.p`
  font-size: 17px;
  font-weight: 300;
  padding: 15px 0px;

  @media (max-width: 1024px) {
    font-size: 15px;
    padding: 10px 0px;
  }
`;

const SubText = styled.p`
  color: #41424a;
  font-size: 16px;
  font-weight: 300;
  padding: 3px 0px;

  @media (max-width: 1024px) {
    font-size: 14px;
  }

  @media (max-width: 767px) {
    font-size: 12px;
    line-height: 18px;
  }
`;

const ListWrapper = styled.ul`
  padding: 10px 0px;

  @media (max-width: 1024px) {
    padding: 5px 0px;
  }
`;

const List = styled.li`
  font-size: 16px;
  font-weight: 300;
  padding: 6px 0px;
  display: flex;

  @media (max-width: 1024px) {
    font-size: 14px;
    padding: 5px 0px;
  }

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

const PillBox = styled.div`
  padding: 10px 0px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const Pill = styled.span`
  font-size: 16px;
  font-weight: 300;
  /* background-color: rgb(240 240 240); */
  color: #000;
  min-width: 70px;
  padding: 10px;
  box-sizing: border-box;
  /* border-radius: 5px; */
  margin: 5px 3px;
  text-align: center;
  /* border: 0.5px solid rgb(221, 221, 221); */

  @media (max-width: 1024px) {
    font-size: 14px;
    padding: 8px;
  }

  @media (max-width: 767px) {
    font-size: 12px;
    min-width: 60px;
    padding: 6px;
  }
`;

const workData = [
  {
    work: "glitch",
    details: [
      "Uniswap V3 SDK를 사용해 토큰 스왑 기능 구현",
      "ETH, USDT 입출금 처리 프로세스 작업",
      "Web3.js 사용해 이더리움 네트워크 관련 API 제작",
      "TronWeb을 사용해 트론 네트워크 관련 API 제작",
      "JSONRPC 통신으로 Bitcoin Core와 연동된 API 구현",
    ],
    stacks: [
      "Javascript",
      "Express",
      "MySQL",
      "Web3.js",
      "Solidity",
      "Truffle",
      "Github",
    ],
  },
  {
    work: "develrocket",
    details: [
      "NestJS를 활용한 백엔드 API 개발",
      "TypeORM 과 Repository 패턴을 사용하여 애플리케이션 개발",
      "AWS Cognito를 활용하여 Access Token 과 Refresh Token을 통한 세션 관리",
      "모든 API에 대해 Swagger를 활용하여 문서화 진행",
    ],
    stacks: ["Typescript", "NestJS", "MySQL", "TypeORM", "Github"],
  },
];

function Experience() {
  const exprienceRef = useRef([]);
  useEffect(() => {
    let observer = new IntersectionObserver((e) => {
      e.forEach((v) => {
        if (v.isIntersecting) {
          v.target.style.opacity = 1;
          v.target.style.transform = "translateY(0px)";
        } else {
          v.target.style.opacity = 0;
          v.target.style.transform = "translateY(-10px)";
        }
      });
    });
    exprienceRef.current.forEach((el) => observer.observe(el));
  }, []);
  return (
    <Wrapper>
      <SubTitle>Work Experience.</SubTitle>
      <FlexBox ref={(el) => (exprienceRef.current[0] = el)}>
        <SummaryBox>
          <Subject>
            {/* <a
              href="https://nft.bettingspoon.com/"
              target="_blank"
              rel="noreferrer"
            >
              Glitch Studio
              <MdTransitEnterexit />
            </a> */}
            Glitch Studio
          </Subject>
          <SubText>Blockchain Developer</SubText>
          <SubText>2022.11 - 2023.03</SubText>
        </SummaryBox>
        <TextBox>
          <Subject>
            {/* <a href="https://bettingspoon.com" target="_blank" rel="noreferrer">
              Bettingspoon.com 사이트
              <MdTransitEnterexit />
            </a> */}
            Web3 API 개발
          </Subject>
          <SummaryText>
            신입 블록체인 개발자로서 런칭 하려고 했던 플랫폼에서 사용될 블록체인
            및 Web3와 관련한 API 개발 업무를 맡았습니다. 투자사의 투자 중단으로
            인해 서비스 런칭에 실패하였고 사업이 중단 되었습니다.
          </SummaryText>
          <DetailSubject>Details</DetailSubject>
          <ListWrapper>
            {workData[0].details.map((v, i) => (
              <List key={`glitch_${i}`}>
                <VscCircleSmall />
                {v}
              </List>
            ))}
          </ListWrapper>
          <DetailSubject>Tech Stacks</DetailSubject>
          <PillBox>
            {workData[0].stacks.map((v) => (
              <>
                <Pill key={v}>
                  <img
                    src={`/stacks/${v}.svg`}
                    style={{ width: "40px", height: "40px" }}
                    alt=""
                  />
                  <br></br>
                  {v}
                </Pill>
              </>
            ))}
          </PillBox>
        </TextBox>
      </FlexBox>
      {/*****/}
      <FlexBox ref={(el) => (exprienceRef.current[1] = el)}>
        <SummaryBox>
          <Subject>
            {/* <a
              href="https://nft.bettingspoon.com/"
              target="_blank"
              rel="noreferrer"
            >
              Glitch Studio
              <MdTransitEnterexit />
            </a> */}
            Kyungil Game Academy
          </Subject>
          <SubText>Backend Developer</SubText>
          <SubText>2023.03 - 현재</SubText>
        </SummaryBox>
        <TextBox>
          <Subject>
            <a href="https://develrocket.com/" target="_blank" rel="noreferrer">
              DevelRocket.com 사이트 (현재 심사 진행중)
              <MdTransitEnterexit />
            </a>
          </Subject>
          <SummaryText>
            경일 게임 아카데미에서 추진하는 스마트 훈련 플랫폼 백엔드 개발
            업무를 맡았습니다. NestJS를 사용하여 개발하였으며, 6개월의 기간동안
            프로젝트 시작부터 끝까지의 모든 서비스를 개발하였으며 현재 정부 기관
            심사 진행중 입니다.
          </SummaryText>
          <DetailSubject>Details</DetailSubject>
          <ListWrapper>
            {workData[1].details.map((v, i) => (
              <List key={`develRocket_${i}`}>
                <VscCircleSmall />
                {v}
              </List>
            ))}
          </ListWrapper>
          <DetailSubject>Tech Stacks</DetailSubject>
          <PillBox>
            {workData[1].stacks.map((v) => (
              <>
                <Pill key={v}>
                  <img
                    src={`/stacks/${v}.svg`}
                    style={{ width: "40px", height: "40px" }}
                    alt=""
                  />
                  <br></br>
                  {v}
                </Pill>
              </>
            ))}
          </PillBox>
        </TextBox>
      </FlexBox>
    </Wrapper>
  );
}

export default Experience;

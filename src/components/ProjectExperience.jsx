import { useEffect, useRef } from "react";
import styled from "styled-components";
import { MdTransitEnterexit } from "react-icons/md";
import { VscCircleSmall } from "react-icons/vsc";
import { SubTitle, Subject, DetailSubject, Wrapper } from "./Common";
import { FaGithubSquare } from "react-icons/fa";

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

const workData = {
  swf2023: {
    details: [
      "거버넌스 토큰 발행 (Governance Token)",
      "Gorvernor 컨트랙트를 활용해 DAO 프로토콜 구현",
      "Hardhat 과 Ethers.js 사용",
      "프론트엔드 및 백엔드에서 Ethers.js를 사용한 트랜잭션 처리 보조",
    ],
    stacks: ["Solidity", "Typescript", "Hardhat", "Github"],
  },
};

function ProjectExperience() {
  const projectExprienceRef = useRef();
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
    observer.observe(projectExprienceRef.current);
  }, []);
  return (
    <Wrapper>
      <SubTitle>Project Experience.</SubTitle>
      <FlexBox ref={projectExprienceRef}>
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
            SEOUL WEB 3.0 FESTIVAL HACKATHON
          </Subject>
          <SubText>Blockchain Developer</SubText>
          <SubText>2023.07.31 - 2023.08.02</SubText>
        </SummaryBox>
        <TextBox>
          <Subject>
            DAO 프로토콜 구현 (Smart Contract) &nbsp;&nbsp;
            <a
              href="https://github.com/bitkunst/SWF2023_Contract"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithubSquare />
              <MdTransitEnterexit />
            </a>
          </Subject>
          <SummaryText>
            서울시, 서울디자인재단, 바오밥 파트너스가 주관하는 2023 서울 Web 3.0
            페스티벌 해커톤에 참가하였습니다. 주된 포지션은 스마트 컨트랙트
            제작을 맡았으며 DAO 프로토콜을 구현했습니다. Ethers.js 활용에 있어
            백엔드 및 프론트엔드를 보조하였습니다.
          </SummaryText>
          <DetailSubject>Details</DetailSubject>
          <ListWrapper>
            {workData.swf2023.details.map((v, i) => (
              <List key={`swf2023_${i}`}>
                <VscCircleSmall />
                {v}
              </List>
            ))}
          </ListWrapper>
          <DetailSubject>🏆 CONSOLATION AWARD 수상 🏆</DetailSubject>
          <DetailSubject>Tech Stacks</DetailSubject>
          <PillBox>
            {workData.swf2023.stacks.map((v) => (
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
    </Wrapper>
  );
}

export default ProjectExperience;

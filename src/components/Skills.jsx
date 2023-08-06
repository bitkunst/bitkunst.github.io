import { useEffect, useRef } from "react";
import styled from "styled-components";
import { DiJavascript1, DiNodejsSmall } from "react-icons/di";
import {
  SiAmazonaws,
  SiAmazonec2,
  SiAmazons3,
  SiGithub,
  SiNestjs,
  SiSlack,
  SiSolidity,
  SiSwagger,
  SiTypescript,
} from "react-icons/si";
import { BiGitBranch } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { SubTitle, Wrapper } from "./Common";
import { BsDot } from "react-icons/bs";

const Container = styled.div`
  margin: 40px 0px;
  opacity: 0;
  transform: translateX(30px);
  transition: all 0.7s linear;

  @media (max-width: 767px) {
    margin: 20px 0px;
  }
`;
const FlexBox = styled.div`
  padding: 20px 0px;
  box-sizing: border-box;
  display: flex;
  border-bottom: 0.5px solid rgb(221, 221, 221);

  .icon {
    font-size: 45px;
    margin-right: 40px;

    @media (max-width: 767px) {
      margin-right: 20px;
    }
  }
`;

const TextBox = styled.div`
  width: 90%;
`;

const SubTextBolder = styled.p`
  font-size: 18px;
  font-weight: 500;
  padding: 3px 0px;

  @media (max-width: 1024px) {
    font-size: 17px;
  }
`;

const SubText = styled.p`
  font-size: 16px;
  font-weight: 300;
  padding: 3px 0px;
  line-height: 25px;

  .bold {
    font-weight: 400;
  }

  @media (max-width: 1024px) {
    font-size: 15px;
  }

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

function Skills() {
  const containerRef = useRef();

  useEffect(() => {
    let observer = new IntersectionObserver((e) => {
      e.forEach((v) => {
        if (v.isIntersecting) {
          v.target.style.opacity = 1;
          v.target.style.transform = "translateX(0px)";
        } else {
          v.target.style.opacity = 0;
          v.target.style.transform = "translateX(30px)";
        }
      });
    });
    observer.observe(containerRef.current);
  }, []);
  return (
    <Wrapper>
      <SubTitle>Skills.</SubTitle>
      <Container ref={containerRef}>
        <FlexBox>
          <SiSolidity className="icon" />
          <TextBox>
            <SubTextBolder>Solidity + Smart Contract</SubTextBolder>
            <SubText>
              <BsDot /> Truffle/Hardhat을 활용하여 Smart Contract 작성 및
              mainnet/testnet 배포가 가능합니다.
              <br></br>
              <BsDot /> Smart Contract 개발 시 테스트 코드 작성이 가능합니다.
              (TDD)
              <br></br>
              <BsDot /> Web3.js를 사용하여 Dapp 제작 가능합니다.
              <br></br>
              <BsDot /> ERC-20 토큰 발행 / ERC-721 NFT 발행
              <br></br>
              <BsDot /> 민팅 컨트랙트 및 토큰 판매/구매 컨트랙트 작성
              <br></br>
              <BsDot /> DAO 프로토콜 구현
            </SubText>
          </TextBox>
        </FlexBox>
        <FlexBox>
          <DiJavascript1 className="icon" />
          <TextBox>
            <SubTextBolder>Javascript</SubTextBolder>
            <SubText>
              주 언어로서 기본적인 개념 및 문법을 숙지하고 있습니다. 코드를
              작성하는 데 그치지 않고 작동원리를 바탕으로 보다 효율적이고
              직관적인 코드를 작성하기 위해 고민하고 노력합니다.
            </SubText>
          </TextBox>
        </FlexBox>
        <FlexBox>
          <SiTypescript className="icon" />
          <TextBox>
            <SubTextBolder>Typescript</SubTextBolder>
            <SubText>
              타입스크립트의 개념 및 사용 목적에 대해 숙지하고 있습니다. 타입
              지정을 통해 타입 안정성을 확보하고 컴파일 과정에서 에러를 잡아내는
              등 타입스크립트를 사용해 보다 안정성 있는 코드를 작성하기 위해
              노력합니다.
            </SubText>
          </TextBox>
        </FlexBox>
        <FlexBox>
          <DiNodejsSmall className="icon" />
          <TextBox>
            <SubTextBolder>NodeJS + Express</SubTextBolder>
            <SubText>
              <BsDot /> Express를 활용하여 웹 서버 구축 및 DB 연동이 가능하며
              웹사이트의 기본 기능인 CRUD가 가능합니다.
              <br></br>
              <BsDot /> RESTful한 API에 대해 고민하며 그에 기반한 라우터 작성을
              하려고 노력합니다.
              <br></br>
              <BsDot /> Socket.io 나 WebSocket을 사용하여 소켓 통신 구현이
              가능합니다.
            </SubText>
          </TextBox>
        </FlexBox>
        <FlexBox>
          <SiNestjs className="icon" />
          <TextBox>
            <SubTextBolder>NestJS</SubTextBolder>
            <SubText>
              <BsDot /> NestJS의 모듈성과 유연성을 활용하여 필요한 기능을 갖춘
              API를 구축하는 능력을 보유하고 있습니다.
              <br></br>
              <BsDot /> 데이터 관리를 위해 TypeORM과 Repository 패턴을
              사용하였습니다.
              <br></br>
              <BsDot /> Request lifecycle을 이해하고 있으며, 이를 바탕으로
              효율적인 요청 처리 및 에러 핸들링을 수행할 수 있습니다.
            </SubText>
          </TextBox>
        </FlexBox>
        <FlexBox>
          <GrMysql className="icon" />
          <TextBox>
            <SubTextBolder>MySql</SubTextBolder>
            <SubText>
              <BsDot /> 효율적인 DB schema 설계 및 데이터 추가, 조회, 수정,
              삭제를 위한 기본적인 쿼리문 작성이 가능합니다.
              <br></br>
              <BsDot /> 조인, 서브쿼리, 그룹화, 집계함수 등을 활용하여 다양한
              데이터 요구사항을 충족시키고자 노력합니다.
            </SubText>
          </TextBox>
        </FlexBox>
        <FlexBox>
          <SiAmazonaws className="icon" />
          <TextBox>
            <SubTextBolder>AWS</SubTextBolder>
            <SubText>
              <SiAmazonec2 style={{ marginRight: "5px" }} />
              <span className="bold">EC2 : </span> AWS EC2를 활용하여 서버
              인스턴스를 세팅하고 관리하는 능력을 가지고 있습니다. 이를 통해
              효율적이고 확장 가능한 웹 서비스를 제공하였습니다.
            </SubText>
            <SubText>
              <SiAmazons3 style={{ marginRight: "5px" }} />
              <span className="bold">S3 : </span> AWS S3를 사용하여 대용량
              데이터를 안전하게 저장하고 관리하였습니다.
            </SubText>
          </TextBox>
        </FlexBox>
        <FlexBox>
          <BiGitBranch className="icon" />
          <TextBox>
            <SubTextBolder>Tools</SubTextBolder>
            <SubText>
              <SiGithub style={{ marginRight: "5px" }} />
              <span className="bold">Git : </span> Git을 활용한 소스 코드의 버전
              관리에 능숙합니다. 브랜치 전략을 이해하고, 이를 바탕으로 팀원들과
              원활하게 코드를 공유하며 작업하였습니다.
            </SubText>
            <SubText>
              <SiSwagger style={{ marginRight: "5px" }} />
              <span className="bold">Swagger : </span> Swagger를 활용하여 API
              문서를 작성하고 관리하였습니다. 이를 통해 API의 투명성을 높이고,
              팀원들이 API를 쉽게 이해하고 사용할 수 있도록 하였습니다.
            </SubText>
            <SubText>
              <SiSlack style={{ marginRight: "5px" }} />
              <span className="bold">Slack : </span> Slack을 활용하여 팀 내
              커뮤니케이션을 효과적으로 진행하였습니다. 적절한 채널 분리와
              효율적인 메시지 교환을 통해 작업의 효율성을 높였습니다.
            </SubText>
          </TextBox>
        </FlexBox>
      </Container>
    </Wrapper>
  );
}

export default Skills;

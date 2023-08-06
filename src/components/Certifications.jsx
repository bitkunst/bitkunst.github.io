import { useEffect, useRef } from "react";
import styled from "styled-components";
import { SubTitle, Subject, Wrapper } from "./Common";

const TextBox = styled.div`
  padding: 30px 0px;
  opacity: 0.5;
  transform: translateY(-10px);
  transition: all 0.7s;
`;

// const SummaryText = styled.p`
//   font-size: 17px;
//   font-weight: 300;
//   padding: 15px 0px;
//   line-height: 30px;

//   @media (max-width: 1024px) {
//     font-size: 15px;
//   }

//   @media (max-width: 767px) {
//     font-size: 14px;
//   }
// `;

const SubTextBolder = styled.p`
  font-size: 18px;
  font-weight: 400;
  padding: 3px 0px;

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

// const SubText = styled.p`
//   font-size: 16px;
//   font-weight: 300;
//   padding: 3px 0px;

//   @media (max-width: 767px) {
//     font-size: 15px;
//   }
// `;

function Certifications() {
  const certificationsRef = useRef();
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
    observer.observe(certificationsRef.current);
  }, []);
  return (
    <Wrapper>
      <SubTitle>Certifications.</SubTitle>
      <TextBox ref={certificationsRef}>
        <Subject>정보처리기사</Subject>
        <SubTextBolder>국가기술자격증) 정보처리기사 자격증 취득</SubTextBolder>
        <br></br>
        <Subject>SQLD</Subject>
        <SubTextBolder>
          한국데이터산업진흥원) SQL 개발자(SQLD) 자격증 취득
        </SubTextBolder>
      </TextBox>
    </Wrapper>
  );
}

export default Certifications;

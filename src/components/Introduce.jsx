import { useEffect, useRef } from "react";
import styled from "styled-components";
import { SubTitle, Wrapper } from "./Common";

const ParagraphText = styled.p`
  font-size: 17px;
  font-weight: 300;
  padding: 20px 0px;
  line-height: 28px;
  opacity: 0.5;
  transform: translateY(-10px);
  transition: all 0.7s;

  @media (max-width: 1024px) {
    font-size: 15px;
    padding: 15px 0px;
  }

  @media (max-width: 767px) {
    font-size: 14px;
    padding: 15px 0px;
  }
`;

function Profile() {
  const introduceRef = useRef();
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
    observer.observe(introduceRef.current);
  }, []);
  return (
    <Wrapper>
      <SubTitle>Introduce.</SubTitle>
      <ParagraphText ref={introduceRef}>
        블록체인과 백엔드를 좋아하는 주니어 개발자 장재원입니다 :)
        <br></br>
        학부 때는 수학과 통계학을 전공하였지만 비트코인이라는 가상화폐가 세간의
        주목을 받기 시작했을 무렵 블록체인과 스마트 컨트랙트에 매료되어
        개발자로서의 새로운 도전을 시작하게 되었습니다. 새로운 기술에 대한
        호기심과 배움을 향한 열정은 저를 성장하게 만드는 원동력이 되는 것
        같습니다. 끊임없는 자기 계발을 통해 조금씩, 하지만 쉬지 않고 나아가고자
        합니다. 새로운 기술을 습득하고, 그것들을 실제 프로젝트에 적용함으로써 그
        가치를 검증하는 개발자로 거듭나고 싶습니다.
      </ParagraphText>
    </Wrapper>
  );
}

export default Profile;

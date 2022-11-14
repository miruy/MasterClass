// styled-component를 이용해 애니메이션 효과를 주기 위해 keyframes(helper function) 추가
// !! styled는 여기서 사용할 변수의 의미이기 때문에 {}안에 넣으면 안됨
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

// 애니메이션 효과를 위한 css 정의 : 페이지 실행 시 360회전, 테두리 변환 네모 - 원 - 네모
const rotationAnimation = keyframes`
  0% {
    transform:rotate(0deg);
    border-radius: 0px;
  }
  50% {
    transform:rotate(360deg);
    border-radius: 100px;
  }
  100% {
    transform:rotate(0deg);
    border-radius: 0px;
  }
`;

const Emoji = styled.span`
  font-size: 50px;    
`;

// 1. 위에 정의한 애니메이션 효과를 적용하고자 하는 Box에 정의 : 2초에 360도 회전, 무한대로 실행
// 2. styled-component로 정의하지 않은 태그(span)를 수정할 수 있음
// 3. &:hover / &:active : selector, span태그 데이터의 반응형 기능 추가할 수 있음
// 4. ${Emoji} : 어떠한 html태그에 의존하고 싶지 않을 경우 또 다른 컴포넌트를 생성하여 ${}안에 써주면 3번 기능과 같은 기능을 구현할 수 있음 (<span> -> <Emoji>)
const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 2s linear infinite;
  ${Emoji} {
    &:hover{  // 마우스 올렸을 때 사이즈 커짐
      font-size: 100px;
    }
    &:active{ // 클릭하고 있을 때 이모티콘 사라짐
      opacity: 0; 
    }
  }
  // span:hover {
  //   font-size: 100px;
  // }
  // span.active {
  //   opacity: 0;
  // }
`;



function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji>😎</Emoji>
      </Box>
    </Wrapper>
  );
}

export default App;
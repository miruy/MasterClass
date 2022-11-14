import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

// // 인자 props로 받은 bgColor를 css에 정의
// const Box = styled.div`
//   background-color: ${props => props.bgColor};
//   width: 100px;
//   height: 100px;
// `;

// // styled(Box): Box의 css 속성 + 추가하고자 하는 css 적용
// const Circle = styled(Box)`
//   border-radius: 50px;
// `;


// const Btn = styled.button`
//   color: white;
//   background-color: tomato;
//   border: 0;
//   border-radius: 15px;
// `;


// styled.input.attrs({ required: true }): 여러개의 input태그에 한번의 정의로 동일한 input속성 추가
const Input = styled.input.attrs({ required: true, placeholder: "작성은 한번, 적용은 여러개에" })`
  background-color: tomato;
`;

function App() {
  return (
    <Father>
      {/* bgColor 라는 props를 해당 태그에 인자로 보냄
      <Box bgColor="teal" />
      <Circle bgColor="tomato" /> */}


      {/* 해당 css속성을 사용하고 싶지만, 다른 html태그를 사용하고 싶을 때 */}
      {/* <Btn>Login</Btn> */}
      {/* as라는 제공 props를 사용해 바꾸고자하는 html태그 정의(모든 태그에 가능) */}
      {/* <Btn as="a" href="/">Logout</Btn> */}


      <Input />
      <Input />
      <Input />
      <Input />
      <Input />


    </Father>
  );
}

export default App;
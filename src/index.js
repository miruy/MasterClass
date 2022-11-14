import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// styled-components 의 theme 사용을 위해 import
import { ThemeProvider } from 'styled-components';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// 다크 & 라이트 테마에서 어떤 색을 사용할지 구체적으로! 컴포넌트로 생성
const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111"
}

const ligthTheme = {
  textColor: "#111",
  backgroundColor: "whitesmoke"
}

root.render(
  <StrictMode>
    <ThemeProvider theme={darkTheme}> {/* <App> 감싸주기, props로 theme 전달 */}
      <App />
    </ThemeProvider>
  </StrictMode>,
); 
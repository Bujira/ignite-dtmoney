import styled from "styled-components";

const Title = styled.h1`
font-size: 64px;
color: #8257e6;

button {
  background-color: #666;
  border-radius: 7px;
}
`

export function App() {
  return (
    <div className="App">
      <Title>Hello World!
        <button>Click Me</button>
      </Title>
    </div>
  );
}

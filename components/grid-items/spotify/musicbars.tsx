import styled, { keyframes } from "styled-components";

const BarAnimation = (scaleY: number) => keyframes`
0% {
  opacity: 1;
  transform: scaleY(0.25);
}
100% {
    transform: scaleY(${scaleY});
    opacity: 1;
}
    `;



const SoundContainer = styled.div`
display: flex;
height: 16px;
gap: 2px;
`;

interface BarProps {
  width: string;
  bpm: number;
  color: string;
  delayInSeconds: number;
  durationInSeconds: number;
  scaleY: number;
  verticalAlignment: "top" | "center" | "bottom";
}

const Bar = styled.div`
background-color: white;
width: 3px;
height: 100%;
border-radius: 0;
animation: ${BarAnimation(Math.random() * 0.75 + 0.25)};
animation-duration: ${0.25 + 0.2 * Math.random()}s;
animation-iteration-count: infinite;
animation-direction: alternate;
animation-timing-function: linear;
animation-delay: ${Math.random() * 1}s;
transform: scaleY(0);
transition: transform 0.5s ease-out;
transform-origin: bottom center;
`;

export const SoundVisualizer = () => {
  // generate mappable items from bar count
  const items = Array.from(Array(4), (_, i) => i);
  return (
    <SoundContainer>
      {items.map((_, index) => (
        <Bar key={`bar-${index}`}/>
      ))}
    </SoundContainer>
  );
};




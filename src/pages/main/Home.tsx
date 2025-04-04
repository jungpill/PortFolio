import 싸이월드 from '../../source/webp/싸이월드.webp'
import styled from 'styled-components'
import { motion } from "framer-motion";

const HOME = () => {

    const text = "유저의 입장에서 생각하며 최선의 방향을 고민하는 개발자 이정필입니다.";

    const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.05 }, // 0.1초 간격으로 하나씩 등장
    },
    };

    const letterVariants = {
    hidden: { opacity: 0, y: 10 }, // 처음에는 아래에 있고 투명함
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // 부드럽게 올라오면서 나타남
    };

    return(
        <BodyContainer>
            <Img src = {싸이월드}/>
            <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            >
                <Balloon>
                {text.split("").map((char, index) => (
                    <motion.span key={index} variants={letterVariants}>
                    {char}
                    </motion.span>
                ))}
                </Balloon>
            </motion.div>
        </BodyContainer>
    )
}

export default HOME

const BodyContainer = styled.div`
    display: flex;
    margin-top: 1%;
    width: 100%;
    height: 100%;
    border-radius: 20px;
`

const Img = styled.img`
    width: 100%;
    height: 96%;
    margin-top: 2%; 
    border-radius: 10px;
`

const Balloon = styled.div`
  position: absolute;
  background: white;
  color: black;
  padding: 30px;
  border-radius: 12px;
  max-width: 450px;
  height: 50px;
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  top: 37%;
  left: 50%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15), 
              0px -4px 10px rgba(0, 0, 0, 0.10), 
              4px 0px 10px rgba(0, 0, 0, 0.10), 
              -4px 0px 10px rgba(0, 0, 0, 0.10);

  /* 말풍선 위쪽 삼각형 */
  &::after {
   content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-top-color: white;
    border-bottom: 0;
    border-left: 0;
    margin-left: -10px;
    margin-bottom: -20px;
  }
`;

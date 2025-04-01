import 싸이월드 from '../../source/싸이월드.jpg'
import styled from 'styled-components'
import {useState, useEffect} from 'react'

const HOME = () => {

    const [visitor, setVisitor] = useState({
        today: '',
        total: ''
    })

    const Getvisitor = async () => {
        try {
          const response = await fetch('http://localhost:7001/visitor/increment/today', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            mode: 'cors',
          });
      
          const data = await response.json();
          
          setVisitor(data)
        } catch (error) {
          console.error('Error:', error);
        }
    };

    useEffect(() => {
        Getvisitor()
    },[])

    return(
        <BodyContainer>
            <Img src = {싸이월드}/>
            <Balloon>유저의 입장에서 생각하며 최선의 방향을 고민하는 개발자 이정필입니다.</Balloon>
        </BodyContainer>
    )
}

export default HOME

const BodyContainer = styled.div`
    margin-top: 1%;
    width: 100%;
    height: 100%;
`

const Img = styled.img`
    width: 100%;
    height: 100%;
`

const Balloon = styled.div`
  position: absolute;
  background: #553DF2;
  color: white;
  padding: 30px;
  border-radius: 12px;
  max-width: 450px;
  height: 50px;
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  top: 37%;
  left: 50%;

  /* 말풍선 위쪽 삼각형 */
  &::after {
   content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-top-color: #553DF2;
    border-bottom: 0;
    border-left: 0;
    margin-left: -10px;
    margin-bottom: -20px;
  }
`;

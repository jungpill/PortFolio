import styled from "styled-components";
import FramerMotion from '../../source/webp/framer-motion.webp'
import React from '../../source/webp/React.webp'
import Zustand from '../../source/webp/Zustand.webp'
import styledComponent from '../../source/webp/styledcomponents.webp'
import CustomTooltip from "../../component/CustomTooltip";
import TpyeScript from '../../source/webp/TypeScript.webp'
import PortFolioImg from '../../source/webp/PortFoilo.webp'

const PortFolio = () => {

    return(
        <JaychisContainer>
            <img src = {PortFolioImg} width='100%' height='50%' style = {{marginTop: '1rem'}} alt = '이미지 로드중'/>
            <Title>
                프로젝트명
            </Title>
            <Content>
                이정필 포트폴리오
            </Content>
            <Wrapper>
                <Wrapper>
                    <Column>
                        <Title>
                            개발인원
                        </Title>
                        <Content>
                            1명
                        </Content>
                    </Column>

                    <Column>
                        <Title>
                            개발기간
                        </Title>
                        <Content>
                            25.04 ~ 25.04
                        </Content>
                    </Column>

                    <Column>
                        <Title>
                            깃허브 링크
                        </Title>
                        <Content >
                            <a href = 'https://github.com/jungpill/PortFolio' target='_blank' rel="noreferrer">
                            https://github.com/jungpill/PortFolio
                            </a>
                        </Content>
                    </Column>
                </Wrapper>
            </Wrapper>
            <Title>
                기술 스택
            </Title>
            <Wrapper>
            <Content>
                <CustomTooltip title="React" position="bottom"><Icon src = {React} alt = '이미지 로드중'/></CustomTooltip>
            </Content>
            <Content>
                <CustomTooltip title="TypeScript" position="bottom"><Icon src = {TpyeScript} alt = '이미지 로드중'/></CustomTooltip>
            </Content>
            <Content>
                <CustomTooltip title="Zustand" position="bottom"><Icon src = {Zustand} alt = '이미지 로드중'/></CustomTooltip>
            </Content>
            <Content>
                <CustomTooltip title="styled-component" position="bottom"><Icon src = {styledComponent} alt = '이미지 로드중'/></CustomTooltip>
            </Content>
            <Content>
                <CustomTooltip title="Framer-Motion" position="bottom"><Icon src = {FramerMotion} alt = '이미지 로드중'/></CustomTooltip>
            </Content>
            
            </Wrapper>
            <Hr/>
            <Title style = {{marginBottom:'1rem'}}>
                상세내용
            </Title>
            <Content>
                1.프로젝트 내 이미지 webp로 자동 변환환<br/>
            </Content>
            <Li>
            모든 이미지를 webp로 변환 후 사용하는 과정으로 개발 효율성이 저하되는 것을 인지하였습니다.
            </Li>
            <Li>
            sharp 활용하여 빌드시 자동으로 이미지를 webp로 변환하여 사용할 수 있도록 변경하였습니다.
            </Li>
            <br/>

            <Content>
                2.애니메이션 적용 
            </Content>
            <Li>
            더 좋은 UI와 사용자 경험을 위해 Framer-Motion을 이용하여 애니메이션을 적용하였습니다.
            </Li>
            <br/>

            <Content>
                3.깃허브 액션을 통한 CI / CD 파이프라인
            </Content>
            <Li>
            매번 수동으로 배포를 하는것 보다는 배포 자동화를 통해 개발 효율성을 향상 시킬 필요가 있다고 생각 하였습니다
            </Li>
            <Li>
            GitHub Actions을 통한 CI/CD 파이프라인 구축으로 배포 자동화와 개발 효율성을 향상 시켰습니다
            </Li>
            <br/>

        </JaychisContainer>
    )
}

export default PortFolio;

const JaychisContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
     &::-webkit-scrollbar {
    width: 0px;
  }
`

const Title = styled.div`
    font-weight: 600;
    font-size: 1rem;
    line-height: 1rem;
    margin-top: 1rem;
    color: #22222280;
    margin-right: 3rem;
`

const Content = styled.div`
    font-weight: 700;
    font-size: .9rem;
    color: black
`

const Wrapper = styled.div`
    display: flex;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
`

const Icon = styled.img`
    width: 60%;
    height: 60%;
    border-radius: 10px;
    --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), 
                var(--tw-ring-shadow, 0 0 #0000), 
                var(--tw-shadow);
    margin-top: .5rem;
`

const Hr = styled.hr`
    width: 100%;
    height: 0.1px;
    background-color: rgba(34,34,34)
`

const Li = styled.li`
    font-weight: 700;
    font-size: .8rem;
    line-height: 1.5rem;
    margin-left: .5rem;
    color: #22222280;
    margin-right: 3rem;
`

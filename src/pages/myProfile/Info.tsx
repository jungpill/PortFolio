import styled from "styled-components";
import call from '../../source/icons8-전화-30.png'
import email from '../../source/icons8-gmail-logo-30.png'
import home from '../../source/icons8-집-50.png'
import github from '../../source/icons8-github의-30.png'

const Info = () => {

    return(
        <InfoContainer>
            <InfoUl>
                <InfoLi><Image src = {call}/> 010-5628-7623</InfoLi>
                <InfoLi><Image src = {email}/> wjdvlf99@naver.com</InfoLi>
                <InfoLi><Image src = {home}/> 경기도 안양시 석수동</InfoLi>
                <a href = 'https://github.com/jungpill'><InfoLi><Image src = {github}/> https://github.com/jungpill</InfoLi></a>
            </InfoUl>
        </InfoContainer>
    )
}

export default Info

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

`

const InfoUl = styled.ul`
    padding: 0;
`

const InfoLi = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 2%;
    list-style-type: none;
    font-weight: 600;
`

const Image = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 1%;
`
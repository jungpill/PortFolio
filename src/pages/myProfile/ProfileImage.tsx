import styled from "styled-components";
import image from '../../source/사진 푸른배경.jpg'

const ProfileImage = () => {

    return(
        <ProfileImageWrapper>
            <Image src = {image}/>
        </ProfileImageWrapper>
    )
}

export default ProfileImage

const ProfileImageWrapper = styled.div`
    width: 100%;
    height: 70%;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 20px;
`
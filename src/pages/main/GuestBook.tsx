import styled from "styled-components";
import { motion } from "framer-motion";
import 사진푸른배경 from '../../source/webp/사진 푸른배경.webp'
import CommentField from "../../component/CommentField";
import { useState, useEffect } from "react";
import { axiosInstance } from "../../api/axios";
import InputModal from "../../component/InputModal";
import Alert from "../../component/Alert";
interface GuestbookEntry {
    id: number;
    userId: string;
    password: string;
    content: string;
    date: string; 
  }

const GuestBook = () => {

    const [GuestBookData, setGuestBookData] = useState<GuestbookEntry[]>([]);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [showAlert, setShowAlert] = useState<boolean>(false)

    useEffect(() => {
        const getGuestBookData = async () => {
            try{
                const response = await axiosInstance.get('guestbook')
                setGuestBookData(response.data)
                console.log(response.data)
            }catch(err){
                console.error(err)
            }
        }
        getGuestBookData()
    },[])

    const handleDelete = async (index: number, password: string) => {
        try{
            const response = await axiosInstance.patch(`/guestbook/${index}`, {password: password})
            setGuestBookData(GuestBookData.filter((item) => item.id !== index))
        }catch(err){
            setShowAlert(true)
            console.log(err)
        }
        finally{setIsOpen(false)}
    }

    const handleIsOpen = (e:any) => {
        sessionStorage.setItem('deleteKey', e)
        setIsOpen(true)
    }

    return(
        <GuestBookContainer>
            {isOpen ? 
            <InputModal title={'삭제하시겠습니까?'} 
            eventHandler={(password:any) => {
            const index = Number(sessionStorage.getItem("deleteKey"));
            handleDelete(index, password);
            }} 
            setIsOpen={setIsOpen}/> : 
            null}
            {showAlert ? <Alert onClose={setShowAlert}/> : null}
            <GuestWrapper>
                {GuestBookData ? GuestBookData.map((GuestBook,index) => {
                    return(
                        <>
                        <Header key = {index}>
                        <MarginSpan>NO.{GuestBook.id}</MarginSpan> 
                        <MarginSpan>{GuestBook.userId}</MarginSpan> 
                        ({GuestBook.date}) 
                        <span style = {{
                            marginLeft: 'auto', 
                            marginRight: '5px', 
                            cursor: 'pointer'
                            }} 
                            onClick={() => {handleIsOpen(GuestBook.id)}}>
                            삭제
                        </span>
                        </Header>
                        <RowWrapper>
                            <ProfileImage src = {사진푸른배경}/>
                            <Text>{GuestBook.content}</Text>
                        </RowWrapper>
                </>
                    )
                }) : '아직 등록된 방명록이 없습니다.'}
                <CommentField
                setGuestBookData={setGuestBookData}
                guestBookData={GuestBookData}
                />
            </GuestWrapper>
        </GuestBookContainer>
    )
}

export default GuestBook;

const GuestBookContainer = styled(motion.div)`
    position: relative;
    top: -10%;
    display: flex;
    margin-top: 3%;
    height: 70%;
    width: 100%;
    background-color: white;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    padding-bottom: 2rem;
    border-radius: 10px;

    &::-webkit-scrollbar {
    width: 0px;
  }
`

const GuestWrapper = styled.div`
    display: flex;
    margin-left: 8%;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

const Header = styled.div`
    display: flex;
    align-items: center;
    padding: 5px;
    margin-top: 5%;
    font-size: .8rem;
    background-color: #F2F2F2;
    width: 85%;
    height: 30px;
`

const RowWrapper =styled.div`
    display: flex;
`

const ProfileImage = styled.img`
    width: 130px;
    height: 130px;
    margin-top: 2%;
`

const Text = styled.div`
    font-weight: 600;
    line-height: 2rem;
    font-size: 1rem;
    width: 95%;
    word-wrap: break-word;
    word-break: keep-all; /* 한글 줄바꿈을 더 자연스럽게 */
    white-space: normal; /* 공백을 정리하면서 줄바꿈 적용 */
    text-align: justify;
    margin: 5% 0 0 2%;
`

const MarginSpan = styled.span`
    margin-right: .5rem;
`


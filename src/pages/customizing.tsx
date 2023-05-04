import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { CusCard } from "../components/CusCard/CusCard"
import { useNavigate } from "react-router-dom";
import { getCard, createCusNFT } from "../actions/card.action";
import { BASENFT_PROPS } from "../config/config";
import { PUBLIC_URLS } from "../config/config";
import { counterWord } from "../utils/couterWords";
import { StateContext } from "../services/state.service";

export const Customizing = () => {
  const StateValues = useContext(StateContext);
  const { id } = useParams();
  const [ nftData, setNftData ] = useState<BASENFT_PROPS>({} as BASENFT_PROPS)
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const result = await getCard(id);
        debugger;
        setNftData(result.nft);
      }
    }

    fetchData();
  }, []);


  const handleCancel = () => {
    if (window.confirm('You really want to cancel it?')) navigate(PUBLIC_URLS.LANDING);
  }

  const handleSave = async () => {
    if (window.confirm('You really want to create a new your custom nft?')) {
      if (!StateValues?.username) {
        alert('Underfined USERNAME');
        return;
      }
      const result = await createCusNFT({
        bId: nftData._id,
        name: nftData.name,
        value: nftData.value,
        info: nftData.info,
      }, StateValues.username)

      if (result.ok) {
        alert('Successed!');
        navigate(PUBLIC_URLS.EXPLORE_MY_NFTS);
      } else {
        alert('Server Error!')
      }
    }
  }

  return (
    <CusWrapper>
      <CusContainer>
        <CustomDiv>
          <div className="input-div">
            <CusLabel>Name</CusLabel>
            <CustomInput placeholder="name" value={nftData.name} onChange={(e) => setNftData({...nftData, name: e.target.value})}></CustomInput>
          </div>

          <div className="input-div">
            <CusLabel>Value</CusLabel>
            <CustomInput placeholder="name" type="number" value={nftData.value} onChange={(e) => setNftData({...nftData, value: Number(e.target.value)})}></CustomInput>
          </div>

          <div className="input-div">
            <CusLabel>info</CusLabel>
            <CustomInput placeholder="name" value={nftData.info} onChange={(e) => { if (counterWord(e.target.value) <= 10) setNftData({...nftData, info: e.target.value}) }}></CustomInput>
          </div>
          <div className="button-div">
            <CusButton onClick={handleSave}>
              Save
            </CusButton>

            <CusButton onClick={handleCancel}>
              Cancel
            </CusButton>
          </div>
        </CustomDiv>
        <PreviewDiv>
          <CusLabel>Preview</CusLabel>
          <CusCard data={nftData}></CusCard>
        </PreviewDiv>
      </CusContainer>
    </CusWrapper>
  )
}

const CusWrapper = styled.div`
  background-color: ${p => p.theme.back};
  min-height: 100vh;
  
`

const CusContainer = styled.div`
  display: flex;
  margin: auto;
  max-width: 1440px;
  padding: 20px 30px;
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`

const CustomDiv = styled.div`
  flex: 1;
  padding: 20px 30px;
  .input-div {
    padding: 20px 0;
    input {
      width: 100%;
    }
  }

  .button-div {
    padding: 20px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
const PreviewDiv = styled.div`
  width: min-content;
  margin: auto;
`

const CustomInput = styled.input`
  padding: 14px 20px;
  background-color: transparent;
  outline: 0;
  border: 0.5px solid #EEEEEE;
  border-radius: 8px;

  color: ${p => p.theme.txtClr1};
  font-family: 'Abel-Regular';
  font-size: 16px;
`
const CusLabel = styled.p`
  color: ${p => p.theme.txtClr1};
  font-family: 'Abel-Regular';
  font-size: 18px;
`
const CusButton = styled.button`
  background-color: ${p => p.theme.theme};
  padding: 14px 20px;
  font-size: 16px;
  color: ${p => p.theme.txtClr1};
  outline: 0;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
`
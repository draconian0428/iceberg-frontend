import { useState, useEffect } from "react";
import styled from "styled-components";
import { BASENFT_PROPS } from "../../config/config";
import { counterWord } from "../../utils/couterWords";
import { getValue } from "../../utils/getValue";


export const CusCard = ({ data }: { data: BASENFT_PROPS }) => {  

  return (
    <CusCardWrapper>
      <CardContainer>

      <ImgContainer>
        <img src={data.image}/>
      </ImgContainer>

      <div className="info">
        <p className="card-name">
          {
            data.name
          }
        </p>

        <p className="card-value">
          {
            data.value
          }
        </p>
      </div>
      <div className="info">
        <p className="card-name">
          {
            getValue(counterWord(data.info))
          }
        </p>
      </div>
      </CardContainer>
    </CusCardWrapper>
  )
}

const CusCardWrapper = styled.div`
  width: 280px;
`

const CardContainer = styled.div`
  background: rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  border-radius: 22px;
  padding: 30px 21px;
  

  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 10px 0 10px;

    font-family: 'Abel-Bold';

    .card-name {
      color: ${p => p.theme.txtClr1};
    }

    .card-value {
      color: ${p =>p.theme.theme};
    }
  }
`

const ImgContainer = styled.div`
  position: relative;
  img {
    width: 100%;
    border-radius: 10px;
  }
`

const CustomBtn = styled.button`
  position: absolute;
  display: none;
  width: 200px;
  padding: 5px 0;
  top: 40%;
  left: calc(50% - 100px);

  outline: 0;
  background-color: transparent;
  border: 0.5px solid rgba(238, 238, 238, 0.5);
  border-radius: 2px;

  color: ${p => p.theme.theme};
  font-family: 'Abel-Bold';
  font-size: 18px;

  cursor: pointer;
`
import { useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { BASENFT_PROPS } from '../../types';
import { PUBLIC_URLS } from 'src/config/config';
import { StateContext } from '../../context/state';

export const Card = (props: BASENFT_PROPS) => {
  const stateVal = useContext(StateContext);
  const navigate = useNavigate();

  const handleCustomBtn = (id: string) => {
    navigate(PUBLIC_URLS.CUSTOM_NFT + '/' + props._id);
  };

  return (
    <CardWrapper>
      <CardContainer>
        <ImgContainer>
          <img src={props.image} />
          <CustomBtn onClick={() => handleCustomBtn(props._id)}>Customize</CustomBtn>
        </ImgContainer>

        <div className="info">
          <p className="card-name">{props.name}</p>

          <p className="card-value">{props.value}</p>
        </div>
      </CardContainer>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  width: 280px;
`;

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
      color: ${(p) => p.theme.txtClr1};
    }

    .card-value {
      color: ${(p) => p.theme.theme};
    }
  }
`;

const ImgContainer = styled.div`
  position: relative;
  &:hover {
    img {
      transition: all 0.3s;
      filter: blur(5px);
    }

    button {
      transition: all 0.3s;
      display: block;
    }
  }
  img {
    width: 100%;
    border-radius: 10px;
  }
`;

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

  color: ${(p) => p.theme.theme};
  font-family: 'Abel-Bold';
  font-size: 18px;

  cursor: pointer;
`;

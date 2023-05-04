import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Card } from '../components/Card/Card';
import { getCards } from '../actions/action';
import { PUBLIC_URLS } from '../config/config';

export const Landing = () => {
  const [arts, setArts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getCards();
      if (result.ok) {
        setArts(result.nfts);
        console.log(result.nfts);
      }
    };
    fetchData();
  }, []);

  // useEffect(() => {
  // 	const fetchData = async () => {
  // 		const result = await axios.get('http://localhost8080/api/test', {
  // 			params: {
  // 				data: "HelloWorld"
  // 			}
  // 		})
  // 		console.log(result)
  // 	}
  // 	fetchData()
  // }, [])

  return (
    <LandingWrapper>
      <LandingContainer>
        <Title>
          <p>
            The arts availble for auction (<Link to={PUBLIC_URLS.EXPLORE_MY_NFTS}>my nfts</Link>)
          </p>
        </Title>
        <Cards>
          {arts.map((item: any, index: number) => (
            <Card
              key={index}
              _id={item._id}
              name={item.name}
              image={item.image}
              value={item.value}
              info={item.info}
            ></Card>
          ))}
        </Cards>
      </LandingContainer>
    </LandingWrapper>
  );
};

const LandingWrapper = styled.div`
  background-color: ${(p) => p.theme.back};
  min-height: 100vh;
`;

const LandingContainer = styled.div`
  margin: auto;
  max-width: 1440px;
  padding: 20px 30px;
`;

const Title = styled.div`
  color: ${(p) => p.theme.theme};
  font-family: 'Abel-Bold';
  font-size: 48px;
  text-align: center;
  margin: 50px 0;

  p {
    a {
      text-decoration: none;
      color: ${(p) => p.theme.txtClr1};
    }
  }
`;

const Cards = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  align-items: center;
  flex-wrap: wrap;
`;

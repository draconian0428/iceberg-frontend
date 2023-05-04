import { useContext } from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CusCard } from "../components/CusCard/CusCard";
import { getMyNfts } from "../actions/card.action";

import { BASENFT_PROPS, CUSNFT_PROPS, PUBLIC_URLS } from "../config/config";
import { StateContext } from "../services/state.service";
import { NFTChart } from "../components/chart/chart";

export interface CHART_NFT_DATA {
	_id: string,
	name: string,
	value: number,
	oldValue: number
	info: string,
	image: string,
}

export const MyNFTs = () => {

	const stateVal = useContext(StateContext);

	const [arts, setArts] = useState<CHART_NFT_DATA[]>([]);

	useEffect(() => {
		if (!stateVal?.username) {
			return;
		}
		const fetchData = async () => {
			const result = await getMyNfts(stateVal.username);
			if (result.ok) {
				console.log(result.nfts.length);
				for (let i = 0; i < result.nfts.length; i++) {
					setArts((old: any) => [...old, {
						_id: result.nfts[i]._id,
						name: result.nfts[i].name,
						value: result.nfts[i].value,
						info: result.nfts[i].info,
						image: result.nfts[i].bId.image,
						oldValue: result.nfts[i].bId.value,
					}]);
				}
			}
		}
		fetchData();
	}, [])

	return (
		<LandingWrapper>
			<LandingContainer>
				<Title>
					<p>
						My NFTs ({arts.length}) (<Link to={PUBLIC_URLS.LANDING}>Landing</Link>)
					</p>
				</Title>

				<NFTChart nfts={arts}></NFTChart>
				<Cards>
					{
						arts.map((item: any, index: number) => (
							<CusCard key={index} data={item}></CusCard>
						))
					}
				</Cards>
			</LandingContainer>
		</LandingWrapper>
	)
}

const LandingWrapper = styled.div`
	background-color: ${p => p.theme.back};
	min-height: 100vh;
`

const LandingContainer = styled.div`
	margin: auto;
  max-width: 1440px;
	padding: 20px 30px;
`

const Title = styled.div`
	color: ${p => p.theme.theme};
	font-family: 'Abel-Bold';
	font-size: 48px;
	text-align: center;
	margin: 50px 0;

	a {
		text-decoration: none;
		color: ${p => p.theme.txtClr1};
		font-family: 'Abel-Bold';
	}
`

const Cards = styled.div`
	display: flex;
	justify-content: center;
	gap: 30px;
	align-items: center;
	flex-wrap: wrap;
`
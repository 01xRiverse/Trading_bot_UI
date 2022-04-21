import React from 'react'
import { DashboardContainer, DetailContainer, Detail, Graph, Status, DetailWrapper } from './DashboardStyle'

function Dashboard() {
    return (
        <DashboardContainer>
            <Status>
                <DetailContainer>

                    <DetailWrapper>
                    <Detail size="2rem" FW="600">Balance</Detail>
                    <Detail size="1.3rem" FW="200">$100</Detail>
                    </DetailWrapper>
                </DetailContainer>
                <DetailContainer>

                    <DetailWrapper>
                    <Detail size="2rem" FW="600">Margin</Detail>
                    <Detail size="1.3rem" FW="200">$56</Detail>
                    </DetailWrapper>

                    <DetailWrapper>
                    <Detail size="2rem" FW="600">Profit N loss</Detail>
                    <Detail size="1.3rem" FW="200">$12</Detail>
                    </DetailWrapper>

                </DetailContainer>
                <DetailContainer>

                    <DetailWrapper>
                    <Detail size="2rem" FW="600">Stratergies</Detail>
                    <Detail size="1.3rem" FW="200">1</Detail>
                    </DetailWrapper>

                    <DetailWrapper>
                    <Detail size="2rem" FW="600">Active Trades</Detail>
                    <Detail size="1.3rem" FW="200">7</Detail>
                    </DetailWrapper>
                    
                </DetailContainer>
            </Status>
            <Graph></Graph>
        </DashboardContainer>    
    )

}

export default Dashboard
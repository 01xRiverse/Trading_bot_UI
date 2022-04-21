import  styled from 'styled-components';




export const DashboardContainer=styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin:40px;
    width: 100%;
    height: 600px;

    `


export const Status=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:space-between;
    height:600px;
    width:500px;`
    

export const DetailContainer=styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;`


export const DetailWrapper=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;`

export const Detail=styled.div`
    font-size:${props =>props.size};
    font-family:neptune;
    font-weight:${props =>props.FW};
    `

    


export const Graph=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    `
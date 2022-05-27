import styled from 'styled-components/native';

const Container = styled.View`
    display:flex;
    flex:1;
    flex-flow: column;

`;
const StyledText = styled.Text`
    font-size:20px;
    margin-bottom:10px;
`;
const Header = styled.View`
    flex: 1;
    background-color:#f9eb6c;
    `;
    
const Contents = styled.View`
    flex: 5;
    background-color:#e6e6e6;
    `;
    
const Footer = styled.View`
    flex: 1;
    background-color:#de1b1b;
`;


const SharingInfoList = ( ) => {
    return (
        <Container>
            <Header><StyledText>header</StyledText></Header>
            <Contents><StyledText>Contents</StyledText></Contents>
            <Footer><StyledText>footer</StyledText></Footer>
        </Container>

      )
}

export default SharingInfoList;
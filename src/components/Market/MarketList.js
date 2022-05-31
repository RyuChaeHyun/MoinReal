import { View, Text } from 'react-native';

<<<<<<< Updated upstream
const MarketList = ( ) => {
=======

const StyledView = styled.View`
    background-color:#ffffff;
    height:vh(100);
`;

const MarketList = ({route} ) => {
    console.log(route.params);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [detail, setDetail] = useState('');
    const [photoUrl, setPhotoUrl] = useState({preimage});
>>>>>>> Stashed changes
    return (
        <View>
            <Text>MarketList</Text>
        </View>
    )
}

export default MarketList;

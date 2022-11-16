import { View, Text, StyleSheet } from "react-native"

import Icon from 'react-native-vector-icons/FontAwesome5'

const CardJogos = (props) => {

    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                <Icon name='gamepad' size={28} color='#2471A3' />
                {" " + props.data.nome}
            </Text>

            <Text style={styles.title}>
                <Icon name='star' size={28} color='#2471A3' />
                {" " + props.data.pontos}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#fefffe',
        borderWidth: 2,
        borderColor: '#918282',
        padding: 10,
        margin: 20,
    },
    title: {
        color: '#1b1a1a',
        fontSize: 20

    },
    btnReseva: {
        marginTop: 10,
    }
});

export default CardJogos;
import { View, Text, StyleSheet } from "react-native"

import Icon from 'react-native-vector-icons/FontAwesome5'

const CardAtividades = (props) => {

    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                <Icon name='chart-line' size={28} color='#2471A3' />
                {" " + props.data.materia}
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

export default CardAtividades;
import { View, Text, StyleSheet } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome5'

const Alunos = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                olá aluno
            </Text>
            <View style={styles.iconsContainer}>
                <Icon style={styles.icon} name="gamepad" size={28} color='#9A7D0A' />
                <Icon style={styles.icon} name="chart-pie" size={28} color='#9A7D0A' />
                <Icon style={styles.icon} name="chart-line" size={28} color='#9A7D0A' />
                <Icon style={styles.icon} name="star" size={28} color='#9A7D0A' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#cfe0f0d8',
        paddingVertical:16
    },
    title: {
        fontSize: 20,
        marginBottom:16,
        marginLeft: 26,
        textAlign:'left',
        width: '100%',
        fontWeight:'bold'

    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        alignItems: 'center',

    },
    icon: {
        borderWidth: 8,
        borderColor: '#f87058',
        padding: 6,
        backgroundColor: '#e8eb32',
        borderRadius: '50%',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13,

    }

});

export default Alunos;
import { View, Text, StyleSheet } from "react-native"


const Pais = () => {
    return(
        <View style={styles.container}>
            <Text>
                Ola responsavel
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#cfe0f0d8',
        paddingVertical:16
    },
});

export default Pais;
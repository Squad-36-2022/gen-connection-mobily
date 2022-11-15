import { View, Text, StyleSheet } from "react-native"


const Professor = () => {
    return(
        <View style={styles.container}>
            <Text>
                Ola professor
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

export default Professor;
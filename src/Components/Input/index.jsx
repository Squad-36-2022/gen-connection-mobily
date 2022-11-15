import React from "react"
import { StyleSheet } from "react-native";

const Input = ({ onChange, value }) => {
    return (
        <input style={styles.container}
            onChange={onChange}
            value={value}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: '#7c7878',
        borderWidth: 2,
        width: '80%',
        padding: 16,
        marginBottom: 16,
        fontSize: 20
    },
});

export default Input;
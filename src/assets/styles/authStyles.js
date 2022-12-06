import { StyleSheet } from 'react-native';

export default StyleSheet.createstyle = StyleSheet.create({
    container: {
        padding: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    input: {
        height: '30px',
        borderWidth: 2,
        borderColor: 'blue',
        borderRadius: 10,
        placeholderTextColor: 'grey',
        textIndent: 10,
        marginBottom: 10,
    },
    button: {
        borderWidth: 2,
        borderColor: 'blue',
        borderRadius: 5,
        backgroundColor: 'cyan',
        padding: 5,
    },
    errorMessage: {
        textAlign: 'center',
        color: 'red',
        marginBottom: 10,
    },
    title: {
        fontSize: 30,
        marginBottom: 10,
    },
    link: {
        color: 'purple',
        textDecorationLine: 'underline',
        marginBottom: 10,
    },
});

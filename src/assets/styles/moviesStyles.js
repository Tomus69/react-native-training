import { StyleSheet } from 'react-native';

export default StyleSheet.createstyle = StyleSheet.create({
    container: {
        padding: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    title: {
        fontSize: 30,
        marginBottom: 10,
    },
    input: {
        height: '50px',
        borderWidth: 2,
        borderColor: 'blue',
        borderRadius: 10,
        placeholderTextColor: 'grey',
        textIndent: 10,
        marginBottom: 10,
    },
    list: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
    },
});

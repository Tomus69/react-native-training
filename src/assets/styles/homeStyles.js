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
    link: {
        color: 'purple',
        textDecorationLine: 'underline',
        marginBottom: 10,
    },
    list: {
        flex: 1,
        height: '100px',
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
    },
});

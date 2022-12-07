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
    loading: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        height: '460px',
        width: '300px',
    },
});

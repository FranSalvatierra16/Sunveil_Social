import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "./color";

export const width = Dimensions.get('screen').width
export const height = Dimensions.get('screen').height

export default StyleSheet.create({
    area: {
        flex: 1,

    },
    main: {
        flex: 1,
        marginHorizontal: 20,
        marginTop: '10%'
    },
    title: {
        fontSize: 30,
        color: Colors.secondary,
        fontFamily: 'Poppins-Bold'
    },

    subtitle: {
        fontSize: 20,
        color: Colors.secondary,
        fontFamily: 'Poppins-Bold'
    },
    r20: {
        fontSize: 20,
        color: Colors.secondary,
        fontFamily: 'Poppins-Regular'
    },
    r24: {
        fontSize: 24,
        color: Colors.secondary,
        fontFamily: 'Poppins-Regular'
    },
    apptitle: {
        fontSize: 24,
        fontFamily: 'Poppins-Bold',
        color: Colors.secondary,
    },
    l6: {
        fontSize: 6,
        color: Colors.secondary,
        fontFamily: 'Poppins-Light'

    }, m6: {
        fontSize: 6,
        color: Colors.secondary,
        fontFamily: 'Poppins-Medium',
    },
    r8: {
        fontSize: 8,
        color: Colors.secondary,
        fontFamily: 'Poppins-Regular',
    },
    m10: {
        fontSize: 10,
        color: Colors.secondary,
        fontFamily: 'Poppins-Medium',
    },
    b10: {
        fontSize: 10,
        color: Colors.secondary,
        fontFamily: 'Poppins-Bold',
    },
    r10: {
        fontSize: 10,
        color: Colors.secondary,
        fontFamily: 'Poppins-Regular',
    },
    r12: {
        fontSize: 12,
        color: Colors.secondary,
        fontFamily: 'Poppins-Regular',
    },
    r13: {
        fontSize: 13,
        color: Colors.secondary,
        fontFamily: 'Poppins-Regular',
    },
    m12: {
        fontSize: 12,
        color: Colors.secondary,
        fontFamily: 'Poppins-Medium',
    },
    s12: {
        fontSize: 12,
        color: Colors.secondary,
        fontFamily: 'Poppins-SemiBold'

    },
    s13: {
        fontSize: 13,
        color: Colors.secondary,
        fontFamily: 'Poppins-SemiBold'

    },
    i13: {
        fontSize: 13,
        color: Colors.secondary,
        fontFamily: 'Inter-Light'

    },
    b12: {
        fontSize: 12,
        color: Colors.secondary,
        fontFamily: 'Poppins-Bold',
    },
    i14: {
        fontSize: 14,
        color: Colors.secondary,
        fontFamily: 'Inter-Light'

    },
    r14: {
        fontSize: 14,
        color: Colors.secondary,
        fontFamily: 'Poppins-Regular',
    },
    m14: {
        fontSize: 14,
        color: Colors.secondary,
        fontFamily: 'Poppins-Medium',
    },
    b14: {
        fontSize: 14,
        color: Colors.secondary,
        fontFamily: 'Poppins-Bold',
    },
    s14: {
        fontSize: 14,
        color: Colors.secondary,
        fontFamily: 'Poppins-SemiBold',
    },
    r16: {
        fontSize: 16,
        color: Colors.secondary,
        fontFamily: 'Poppins-Regular'

    },
    i16: {
        fontSize: 16,
        color: Colors.secondary,
        fontFamily: 'Inter-Light'

    },
    l17: {
        fontSize: 17,
        color: Colors.secondary,
        fontFamily: 'Poppins-Light'

    },
    m16: {
        fontSize: 16,
        color: Colors.secondary,
        fontFamily: 'Poppins-Medium'

    },
    b16: {
        fontSize: 16,
        color: Colors.secondary,
        fontFamily: 'Poppins-Bold'

    },
    s16: {
        fontSize: 16,
        color: Colors.secondary,
        fontFamily: 'Poppins-SemiBold'
    },
    r18: {
        fontSize: 18,
        color: Colors.secondary,
        fontFamily: 'Poppins-Regular'

    },
    m18: {
        fontSize: 18,
        color: Colors.secondary,
        fontFamily: 'Poppins-Medium'

    },
    b18: {
        fontSize: 18,
        color: Colors.secondary,
        fontFamily: 'Poppins-Bold'

    },
    r20: {
        fontSize: 18,
        color: Colors.secondary,
        fontFamily: 'Poppins-Regular'

    },
    s18: {
        fontSize: 18,
        color: Colors.secondary,
        fontFamily: 'Poppins-SemiBold'

    },
    u18: {
        fontSize: 18,
        color: Colors.secondary,
        fontFamily: 'Ubuntu-Bold'

    },
    s20: {
        fontSize: 20,
        color: Colors.secondary,
        fontFamily: 'Poppins-SemiBold'

    },
    s22: {
        fontSize: 22,
        color: Colors.secondary,
        fontFamily: 'Poppins-SemiBold'

    },
    b24: {
        fontSize: 24,
        color: '#000000',
        fontFamily: 'Poppins-Bold'

    },
    s24: {
        fontSize: 24,
        color: '#000000',
        fontFamily: 'Poppins-SemiBold'

    },
    s32: {
        fontSize: 32,
        color: Colors.secondary,
        fontFamily: 'Poppins-SemiBold'

    },
    b32: {
        fontSize: 32,
        color: '#000000',
        fontFamily: 'Poppins-Bold'

    },
    b34: {
        fontSize: 34,
        color: '#000000',
        fontFamily: 'Poppins-Bold'

    },
    man14: {
        fontSize: 14,
        color: Colors.secondary,
        fontFamily: 'Manrope-Regular'

    },
    man16: {
        fontSize: 16,
        color: Colors.secondary,
        fontFamily: 'Manrope-Regular'

    },
    r56: {
        fontSize: 56,
        color: Colors.secondary,
        fontFamily: 'Poppins-Regular'

    },
    b56: {
        fontSize: 56,
        color: '#000000',
        fontFamily: 'Poppins-Bold'

    },




    btn: {
        backgroundColor: Colors.primary,
        alignItems: 'center',
        height: 46,
        borderRadius: 10,
        justifyContent: 'center'
    },
    btntxt: {
        fontSize: 16,
        color: Colors.secondary,
        fontFamily: 'Poppins-Bold'
    },
    indicator: {
        borderColor: '#E0E0E0',
        borderWidth: 1,
        padding: 4,
        borderRadius: 20,
        backgroundColor: '#E0E0E0',
        marginHorizontal: 5
    },


    shadow: {
        shadowColor: Colors.active,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 10,
        backgroundColor: Colors.bg,

    },

    txtinput: {
        height: 46,
        // borderWidth:1,
        borderRadius: 25,
        backgroundColor: Colors.input,
        paddingLeft: 10,
        marginHorizontal: 15
    },

    radio: {
        borderWidth: 1,
        borderRadius: 30,
        paddingHorizontal: 10,
        borderColor: Colors.bord,
        color: Colors.disable,
    },

    divider: {
        height: 1,
        backgroundColor: Colors.border,
    },

    divider1: {
        height: 1.5,
        backgroundColor: Colors.border,
        marginTop: 20,
        marginBottom: 20,
        flex: 1
    },

    dividertxt: {
        color: Colors.disable,
        fontFamily: 'Poppins-Regular'
    },

    btn1: {

        alignItems: 'center',
        // paddingVertical:15,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        height: 55


    },

    btn2: {
        backgroundColor: Colors.primary,
        alignItems: 'center',
        height: 24,
        borderRadius: 25,
        justifyContent: 'center',
        paddingHorizontal: 15
    },

    btntxt1: {
        fontSize: 16,
        color: Colors.active,
        paddingLeft: 15,
        fontFamily: 'Poppins-Regular'
    },

    inputContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
        marginTop: 10,
        height: 50,
        // flex: 1
    },

    verticaldivider: {
        height: '60%',
        width: 1,
    },

    modalcontainer: {
        flex: 1,
        borderRadius: 20,
        paddingHorizontal: 10,
        marginVertical: 140,
        paddingTop: 20,
        marginHorizontal: -10,
        alignSelf: 'center',
    },
    btnoutline: {
        borderColor: Colors.bord,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        height: 55,
        width: width / 4.5,
    },

    b3: {
        backgroundColor: Colors.secondary,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 30,
        alignItems: 'center',
        borderColor: '#E5E7EB',
        borderWidth: 1
    },
    follow: {
        paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20, backgroundColor: Colors.primary
    },
    following: {
        paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20, borderColor: Colors.primary, borderWidth: 2
    },
    categoryTextSelected: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: Colors.primary,
        borderColor: Colors.primary,
        color: Colors.secondary,
        fontFamily: 'Poppins-Regular'
    },
    categoryText: {
        fontSize: 14,
        color: Colors.active,
        borderWidth: 1,
        borderColor: Colors.active,
        borderRadius: 10,
        paddingBottom: 5,
        paddingTop: 7,
        paddingHorizontal: 15,
        marginHorizontal: 5,
        fontFamily: 'Poppins-Regular'
    },
    categorycontainer: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 30,
        justifyContent: 'space-between',

    },

}
);
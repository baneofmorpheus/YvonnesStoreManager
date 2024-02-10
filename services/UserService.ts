import firestore from '@react-native-firebase/firestore';

const usersCollectionRef = firestore().collection('users');


export const initiateUserLogin = async (userId: string) => {
    const users = [];



    const userDataSnapshot = await usersCollectionRef.doc(userId).get()


    if (!userDataSnapshot.exists) {
        throw new Error()
    }
    const userData = userDataSnapshot.data()!;

    const loginHistory = userData.loginHistory

    // keep track of last 10 logins

    if (loginHistory.length >= 10) {
        delete loginHistory[0]
    }

    loginHistory.push({ ipAddress: 'xxxx', timestamp: firestore.FieldValue.serverTimestamp() })

    await usersCollectionRef.doc(userId).update({ loginHistory })
}
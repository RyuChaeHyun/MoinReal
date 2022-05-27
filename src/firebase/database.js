import { getDatabase, ref, set, onValue,get, child } from 'firebase/database';

export const setExampleData = () =>{
    const db = getDatabase();
    set(ref(db, 'memo/' + 'testmemoID'), {
        username: 'name',
        email: 'emailTEST',
        profile_picture : 'imageUrl',
        date: new Date().toString()
    });
}
export const getExampleAllData = () =>{
    const dbRef = ref(getDatabase());
    get(child(dbRef, `memo/testmemoID`)).then((snapshot) => {
        if (snapshot.exists()) {
        const val = snapshot.val();
        console.log(typeof val);
        setMemo(Object.entries(val));
        } else {
        console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
}
export const getExampleData = () => {
    const db = getDatabase();
    const starCountRef = ref(db, 'memo/testmemoID');
    onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        setMemo(Object.values(data));
    });
}
import { getDatabase, ref, onValue,get, child, push, set, update } from 'firebase/database';
import { getAuth, updateProfile} from 'firebase/auth';
import { Alert } from 'react-native';

// 자동으로 id생성 해준대용
export const createDataWithId = (table, column, data) =>{
    const db = getDatabase();
    push(ref(db, table + column), data);
}

// 자동으로 id생성 안해용 (column이 id가 됩니당)
export const updateData = (table, column, data) =>{
    const db = getDatabase();
    set(ref(db, table + column), data);
}

export const getData = (table, column, setData) =>{
    const dbRef = ref(getDatabase());
    get(child(dbRef, `${table}/${column}`)).then((snapshot) => {
        if (snapshot.exists()) {
            const val = snapshot.val();
            const data = {data: val};
            console.log(data)
            setData(data.data);
        } else {
            console.log("No data available");
            setData({});
        }
    }).catch((error) => {
        console.error(error);
        alert('데이터를 불러올 수 없습니다. 다시 시도해주세요.');
        Alert.alert('데이터를 불러올 수 없습니다. 다시 시도해주세요.');
    });
}

export const getExampleData = (table) => {
    const db = getDatabase();
    const starCountRef = ref(db, 'memo/testmemoID');
    onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        setMemo(Object.values(data));
    });
}

//User가 작성한 정보 가져오기 SharingInfo Update에 필요
export const getSharingInfo = () => {
    const{displaytitle, category, photoURL, displaydetail} = Auth.currentUser;
    return {
        title:displaytitle, category, photoUrl : photoURL, detail:displaydetail};
};

import { getDatabase, ref, onValue,get, child, push } from 'firebase/database';

// 자동으로 id생성해준대용
export const createData = (table, column, data) =>{
    const db = getDatabase();
    push(ref(db, table + column), data);
}

export const getData = (table, column) =>{
    const dbRef = ref(getDatabase());
    const data = null;
    get(child(dbRef, `${table}/${column}`)).then((snapshot) => {
        if (snapshot.exists()) {
        const val = snapshot.val();
        console.log(typeof val);
        data = Object.entries(val);
        } else {
        console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
    return data;
}
export const getExampleData = () => {
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


//  export const updateInfoPhoto = async photoUrl =>{
//      const user = Auth.currentUser;
//      const storageUrl = photoUrl. startsWith('https')
//      ? photoUrl
//      :await uploadImage(photoUrl);
//      await user.updateProfile({photoUrl :storageUrl});

//      return{
//          title:user.displaytitle, category:user.category, photoUrl:user.photoURL, detail:user.detail
//      };
//  };
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

//User가 작성한 정보 가져오기 SharingInfo Update에 필요
export const getSharingInfo = () => {
    const{displaytitle, category, photoURL, displaydetail} = Auth.currentUser;
    return {
        title:displaytitle, category, photoUrl : photoURL, detail:displaydetail};
 };

 
 export const updateInfoPhoto = async photoUrl =>{
     const user = Auth.currentUser;
     const storageUrl = photoUrl. startsWith('https')
     ? photoUrl
     :await uploadImage(photoUrl);
     await user.updateProfile({photoUrl :storageUrl});

     return{
         title:user.displaytitle, category:user.category, photoUrl:user.photoURL, detail:user.detail
     };
 };
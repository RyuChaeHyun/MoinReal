import { ref, getStorage, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

// constants
const filePath='images/';

// Function - Put image
// ** 있으면 필수
// ** uri = result.uri
// ** imgName = images/테이블(서비스명 ex. sharingInfo, auth, market...)/시간
// ** setImage = 화면에 보여줄 이미지 설정하는 함수 (image useState)
// setLoading = 로딩화면 보여주기 위함. (react-spinners와 함께 사용)
const putImage = async (uri, imgName, setImage, setProgressStatus) => {
  // set Image Input Info
  const reference = ref(getStorage(), `${filePath}${imgName}.jpg`);
  const img = await fetch(uri);
  const bytes = await img.blob();

  // image upload start
  const uploadTask = uploadBytesResumable(reference, bytes);
    uploadTask.on('state_changed', (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      setProgressStatus(progress);
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
      }
    },
    (error) => {
        // Handle fail uploads on complete
      switch (error.code) {
         case 'storage/unauthorized':
            console.log("User doesn't have permission to access the object");
         break;
         case 'storage/canceled':
            console.log("User canceled the upload");
         break;
         case 'storage/unknown':
            console.log("Unknown error occurred, inspect error.serverResponse");
         break;
      }
    },
    () => {
      // Handle successful uploads on complete
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
        setImage(downloadURL);
      });
    }
  );
}

// Function - get Image
export const getImage = (imgName) => {
  const func = () => {
    const reference = ref(getStorage(), `${filePath}${imgName}.jpg`);
    getDownloadURL(reference).then((downloadURL) => {
      return downloadURL;
    });
  };
  if (imgName == undefined) {
    func();
  }
}

export default Storage = {
  putImage,
  getImage,
}
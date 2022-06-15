// import React, { useState } from "react";
// import Input from '../../components/common/Input/Input';
// import InputDropBox from '../../components/sharingInfo/InputDropBox';
// import { createData } from './../../firebase/database';
// import FormScrollView from './../../components/common/FormScrollView/FormScrollView';

// //inputDropBox 해서 올려주신다고하셨음!
// const JobOpeningPostCreate = ({navigation}) => {
//     const [title, setTitle] = useState('');
//     const [time, setTime] = useState('');
//     const [salary, setSalary] = useState('');
//     const [detail, setDetail] = useState('');
//     const [companyname, setCompanyname ] = useState("");
//     const [category, setCompanysize] = useState('');
//     const [welfare, setWelfare] = useState('');
    

//     const _setClearData= () => {
//         setTitle('');
//         setTime('');
//         setSalary('');
//         setDetail('');
//         setCompanyname('');
//         setCompanysize('');
//         setWelfare('');
//     }

//     const submitting = () => {
//         const data = {
//             title: title,
//             time : time,
//             salary : salary,
//             detail : detail,
//             companyname : companyname, 
//             companysize : companysize,
//             welfare : welfare,
//         }
//         console.log('submitting : ', data);
//         createData('jobOpening/', "", data);
//         _setClearData();
//     }
//     return (
//         <FormScrollView buttonTitle={'작성'} buttonType="Square" onPress={submitting}>
//             <Input 
//                 title="제목" 
//                 name="title" 
//                 placeholder="제목을 입력하세요"
//                 onChangeText={text =>setTitle(text)}/>
//             <Input 
//                 title="근무시간" 
//                 name="time" 
//                 placeholder="근무시간을 입력하세요"
//                 onChangeText={text =>setTime(text)}/>
//             <Input 
//                 title="급여" 
//                 name="salary" 
//                 placeholder="급여를 입력하세요"
//                 onChangeText={text =>setSalary(text)}/>        
//             <Input 
//                 title="상세내용" 
//                 inputHeight="150" 
//                 name="detail" 
//                 placeholder="상품에 관한 정보를 자유롭게 기입하여 주세요."
//                 rows={10}
//                 onChangeText={text =>setDetail(text)}/>
//             <Input 
//                 title="기업명" 
//                 name="companyname" 
//                 placeholder="기업명을 입력하세요"
//                 onChangeText={text =>setCompanyname(text)}/>   
//             <InputDropBox label="회사규모" companysize={companysize} setCompanysize={setCompanysize} />
//             <Input 
//                 title="복리후생" 
//                 name="welfare" 
//                 placeholder="복리후생을 입력하세요"
//                 onChangeText={text =>setWelfare(text)}/>     
//         </FormScrollView>
//     );
// };

// export default JobOpeningPostCreate;

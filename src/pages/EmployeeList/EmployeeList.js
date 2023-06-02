import React from "react";
import style from "./EmployeeList.module.css"
import Header from "../../components/Admin_Header";
import SearchBox from "../../components/SearchBox";
import Footer from "../../components/Footer";
import EditUserInfo from "../../components/EditUserInfo"

const columns=['userList','تلفن همراه','سمت','دانشکده','ایمیل','نام و نام خانوادگی',' نام کاربری','ردیف'];
const values=['phone','position','faculty','email','name','username'];

const UserList=()=>{
    return(
        <>
        <div className={style.userList} >
         <Header/>
         <SearchBox  text="جست‌و‌جو در کارمندان..." columns={columns} values={values} addemp="true" apilink="http://localhost:8000/accounts/get-emp/" />
         <Footer/>   
         
      </div>
      
      </>
      
    );
};

export default UserList;
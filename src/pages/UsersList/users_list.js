import React from "react";
import style from "./users_list.module.css"
import Header from "../../components/Admin_Header";
import SearchBox from "../../components/SearchBox";
import Table from "../../components/Table";
import Footer from "../../components/Footer";
import EditUserInfo from "../../components/EditUserInfo"

const columns=['userList','تلفن همراه','سمت','دانشکده','ایمیل','نام و نام خانوادگی',' نام کاربری','ردیف'];
const values=['phone','position','faculty','email','name','username'];

const UserList=()=>{
    return(
        <>
        <div className={style.userList} >
         <Header/>
         <SearchBox  text="جست‌و‌جو در کابران..." columns={columns} values={values} apilink="http://localhost:8000/accounts/get-stu/" />
{/*          
         <div className={style.table_body}>
          <Table columns={columns} values={values} apiLink={"https://localhost:8000/accounts/get-stu/"} />
         </div> */}

         <Footer/>   
         
      </div>
      
      </>
      
    );
};

export default UserList;
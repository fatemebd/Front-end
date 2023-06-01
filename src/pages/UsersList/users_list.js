import React from "react";
import style from "./users_list.module.css"
import Header from "../../components/Admin_Header";
import SearchBox from "../../components/SearchBox";
import Table from "../../components/Table";
import Footer from "../../components/Footer";
import EditUserInfo from "../../components/EditUserInfo"

const columns=['userList',,'تلفن همراه','ایمیل','سمت','دانشکده',' نام خانوادگی','نام' ,'ردیف'];
const values=['phone','email','position','faculty','last_name','first_name'];

const UserList=()=>{
    return(
        <>
        <div className={style.userList} >
         <Header/>
         <SearchBox text="جست و جو در کاربران" />
         
         <div className={style.table_body}>
          <Table columns={columns} values={values} apiLink={"https://localhost:8000/accounts/get-stu/"} />
         </div>

         <Footer/>   
         
      </div>
      
      </>
      
    );
};

export default UserList;
import React from "react";
import style from "./users_list.module.css"
import Header from "../../components/Admin_Header";
import SearchBox from "../../components/SearchBox";
import Table from "../../components/Table";
import Footer from "../../components/Footer";

const columns=['userList','ایمیل','سمت','دانشکده','نام و نام خانوادگی','نام کاربری','ردیف'];
const values=['email','position','faculty','name','username'];

const UserList=()=>{
    return(
        <div className={style.userList}>
         <Header/>
         <SearchBox text="جست و جو در کاربران" />
         
         <div className={style.table_body}>
          <Table columns={columns} values={values} apiLink={"https://localhost:8000/accounts/get-stu/"} />
         </div>
         <Footer/>
      </div>
    );
};

export default UserList;
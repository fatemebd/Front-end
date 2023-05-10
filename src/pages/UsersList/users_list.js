import React from "react";
import style from "./users_list.module.css"
import Header from "../../components/Admin_Header";
import SearchBox from "../../components/SearchBox";
import Table from "../../components/Table";
import Footer from "../../components/Footer";
import userdata from "../../data/Users-1.json"
const columns=['userList','ایمیل','سمت','دانشکده','نام و نام خانوادگی','نام کاربری','ردیف'];
const values=['email','position','faculty','name','username'];

const UserList=()=>{
    return(
        <div className={style.userList}>
         <Header/>
         <SearchBox />
         
         <div className={style.table_body}>
          <Table columns={columns} values={values} data={userdata} />
         </div>
         <Footer/>
      </div>
    );
};

export default UserList;
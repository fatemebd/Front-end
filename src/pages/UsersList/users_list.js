import React from "react";
import "./users_list.css"
import "./global.css"
import Header from "../../components/Admin_Header";
import SearchBox from "../../components/SearchBox";
import Table from "../../components/Table";
import Footer from "../../components/Footer";

const columns=['userList','ایمیل','سمت','دانشکده','نام و نام خانوادگی','نام کاربری','ردیف'];
const values=['email','position','faculty','name','username'];

const UserList=()=>{
    return(
        <div className="userList">
         <Header/>
         <SearchBox />
         
         <div className="table-body">
          <Table columns={columns} values={values} apiLink={"https://localhost:8000/accounts/get-stu/"} />
         </div>
         <Footer/>
      </div>
    );
};

export default UserList;
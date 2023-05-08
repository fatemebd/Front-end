import React from "react";
import "./users_list.css"
import "./global.css"
import "../../components/Admin_Header"
import "../../components/SearchBox"
import "../../components/Table"
import "../../components/Footer"
const columns=['userList','ایمیل','سمت','نام و نام خانوادگی','نام کاربری','ردیف'];
const values=[]

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
    )
}
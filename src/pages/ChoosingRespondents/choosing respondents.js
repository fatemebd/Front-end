import React from "react";
import "./choosing respondents.css"
import Dropdown from "../../components/Dropdown";
import Table from "../../components/Table";
import SearchBox from "../../components/SearchBox"
import Footer  from   "../../components/Footer"
import Header from "../../components/User_Header";


const ChoosingRespondentsPage = () => {
    return (
        <>
      <div className="ChoosingRespondentsPage">
         <Header/>
         <div className="body">
         <Table />
         <div className="search">
         <SearchBox text="" />
         <div className="dd">
         <Dropdown name="job" options={[['assistant','معاون گروه'],['teacher','استاد'],['expert','کارشناس آموزش']]} label="سمت"/>
         <Dropdown name="group" options={[['sw','نرم افزار'],['IT','فناوری ارتباطات'],['AI','هوش مصنوعی']]} label="گروه آموزشی"/>
         <Dropdown name="section" options={[['1','کارشناشی'],['2','کارشناسی ارشد'],['3','دکترا']]} label="مقطع تحصیلی"/>
         </div>
         
         </div>
         
         </div>
         
         <Footer/>
      </div>
     
     </> 
     );
  };
  
  export default ChoosingRespondentsPage;

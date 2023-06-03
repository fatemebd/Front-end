import React,{useState} from "react"
import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import styles from "../styles/calendar.module.css"
import "react-multi-date-picker/styles/colors/mycolor.css"

//this function shuold put input value into survey.deadline in string format
export default function Example() {
    const[selectedDate,setSelectedDate]=useState(null);
    const handle=(data)=>{
      let date="";
      date=data.day+"/"+data.month+"/"+data.year;
      setSelectedDate(data)
      let newObject = window.localStorage.getItem("survey");
        let survey = JSON.parse(newObject);
        survey.deadline=date;
        console.log(survey.deadline)
        window.localStorage.setItem("survey", JSON.stringify(survey));
        console.log(survey)
    }
  return (
    <DatePicker
    selected={selectedDate}
    onChange={handle}
    className="green"
    inputClass={styles.input}
      calendar={persian}
      locale={persian_fa}
    />
  )
}
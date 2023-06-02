import React,{useState} from "react"
import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import styles from "../styles/calendar.module.css"
import "react-multi-date-picker/styles/colors/mycolor.css"


export default function Example() {
    const[selectedDate,setSelectedDate]=useState(null);
  return (
    <DatePicker
    selected={selectedDate}
    onChange={date=>setSelectedDate(date)}
    className="green"
    inputClass={styles.input}
      calendar={persian}
      locale={persian_fa}
    />
  )
}
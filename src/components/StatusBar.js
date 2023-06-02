import React from 'react';
import styles from "../styles/StatusBar.module.css"

function StatusBar(props) {
    const state = props.status;
    if (state == "1") {
        return(
            <div className={styles.main}>
                <span className={styles.dot_blue} />
    
                <label className={styles.txt_blue}>کارمندان</label>
                <div className={styles.line_gray} ></div>
                
                <span className={styles.dot_gray} />
    
                <label className={styles.txt_gray}>پرسشنامه</label>
                <div className={styles.line_gray} ></div>
    
                <span className={styles.dot_gray} />
    
                <label className={styles.txt_gray}>پاسخ‌دهندگان</label>
                <div className={styles.line_gray} ></div>
    
                <span className={styles.dot_gray} />
    
                <label className={styles.txt_gray}>تنظیمات</label>
            </div>
        )
    }
    else if (state == "2") {
        return(
            <div className={styles.main}>
                <span className={styles.dot_green} />
    
                <label className={styles.txt_green}>کارمندان</label>
                <div className={styles.line_green} ></div>
                
                <span className={styles.dot_blue} />
    
                <label className={styles.txt_blue}>پرسشنامه</label>
                <div className={styles.line_gray} ></div>
    
                <span className={styles.dot_gray} />
    
                <label className={styles.txt_gray}>پاسخ‌دهندگان</label>
                <div className={styles.line_gray} ></div>
    
                <span className={styles.dot_gray} />
    
                <label className={styles.txt_gray}>تنظیمات</label>
            </div>
        )
    }
    else if (state == "3") {
        return(
            <div className={styles.main}>
                <span className={styles.dot_green} />
    
                <label className={styles.txt_green}>کارمندان</label>
                <div className={styles.line_green} ></div>
                
                <span className={styles.dot_green} />
    
                <label className={styles.txt_green}>پرسشنامه</label>
                <div className={styles.line_green} ></div>
    
                <span className={styles.dot_blue} />
    
                <label className={styles.txt_blue}>پاسخ‌دهندگان</label>
                <div className={styles.line_gray} ></div>
    
                <span className={styles.dot_gray} />
    
                <label className={styles.txt_gray}>تنظیمات</label>
            </div>
        )
    }
    else if (state == "4") {
        return(
            <div className={styles.main}>
                <span className={styles.dot_green} />
    
                <label className={styles.txt_green}>کارمندان</label>
                <div className={styles.line_green} ></div>
                
                <span className={styles.dot_green} />
    
                <label className={styles.txt_green}>پرسشنامه</label>
                <div className={styles.line_green} ></div>
    
                <span className={styles.dot_green} />
    
                <label className={styles.txt_green}>پاسخ‌دهندگان</label>
                <div className={styles.line_green} ></div>
    
                <span className={styles.dot_blue} />
    
                <label className={styles.txt_blue}>تنظیمات</label>
            </div>
        )
    }

    
}

export default StatusBar;
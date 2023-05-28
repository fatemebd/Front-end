import React from 'react';
import styles from "../styles/StatusBar.module.css"

function StatusBar(props) {
    const state = props.status;
    if (state == "1") {
        return(
            <div className={styles.main}>
                <span className={styles.dot_blue} />
    
                <label class={styles.txt_blue}>کارمندان</label>
                <div class={styles.line_gray} ></div>
                
                <span class={styles.dot_gray} />
    
                <label class={styles.txt_gray}>پرسشنامه</label>
                <div class={styles.line_gray} ></div>
    
                <span class={styles.dot_gray} />
    
                <label class={styles.txt_gray}>پاسخ‌دهندگان</label>
                <div class={styles.line_gray} ></div>
    
                <span class={styles.dot_gray} />
    
                <label class={styles.txt_gray}>تنظیمات</label>
            </div>
        )
    }
    else if (state == "2") {
        return(
            <div className={styles.main}>
                <span className={styles.dot_green} />
    
                <label class={styles.txt_green}>کارمندان</label>
                <div class={styles.line_green} ></div>
                
                <span class={styles.dot_blue} />
    
                <label class={styles.txt_blue}>پرسشنامه</label>
                <div class={styles.line_gray} ></div>
    
                <span class={styles.dot_gray} />
    
                <label class={styles.txt_gray}>پاسخ‌دهندگان</label>
                <div class={styles.line_gray} ></div>
    
                <span class={styles.dot_gray} />
    
                <label class={styles.txt_gray}>تنظیمات</label>
            </div>
        )
    }
    else if (state == "3") {
        return(
            <div className={styles.main}>
                <span className={styles.dot_green} />
    
                <label class={styles.txt_green}>کارمندان</label>
                <div class={styles.line_green} ></div>
                
                <span class={styles.dot_green} />
    
                <label class={styles.txt_green}>پرسشنامه</label>
                <div class={styles.line_green} ></div>
    
                <span class={styles.dot_blue} />
    
                <label class={styles.txt_blue}>پاسخ‌دهندگان</label>
                <div class={styles.line_gray} ></div>
    
                <span class={styles.dot_gray} />
    
                <label class={styles.txt_gray}>تنظیمات</label>
            </div>
        )
    }
    else if (state == "4") {
        return(
            <div className={styles.main}>
                <span className={styles.dot_green} />
    
                <label class={styles.txt_green}>کارمندان</label>
                <div class={styles.line_green} ></div>
                
                <span class={styles.dot_green} />
    
                <label class={styles.txt_green}>پرسشنامه</label>
                <div class={styles.line_green} ></div>
    
                <span class={styles.dot_green} />
    
                <label class={styles.txt_green}>پاسخ‌دهندگان</label>
                <div class={styles.line_green} ></div>
    
                <span class={styles.dot_blue} />
    
                <label class={styles.txt_blue}>تنظیمات</label>
            </div>
        )
    }

    
}

export default StatusBar;
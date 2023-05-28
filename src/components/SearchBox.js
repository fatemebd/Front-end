import style from "../styles/search_box.module.css";

const SearchBox=(props) =>{
    return(
        <div className={style.search_box}>
          <input className={style.input_search} type="text" placeholder={props.text}
          // onKeyDown={(e) => {if(e.key === "Enter") {
          //   let tbl=document.getElementById('tbl');
          //   tbl.remove();
          // }}} 
          >
          </input>
          <button className={style.search_icon}>
          <img
            className={style.ssearch_rounde_icon}
            alt=""
            src="assets/img/materialsymbolssearchrounded.svg"
          />
          </button>
      </div>
    );
};
export default SearchBox;
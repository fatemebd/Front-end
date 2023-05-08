import "../styles/search_box.css";
const SearchBox=() =>{
    return(
        <div className="search-box">
          <input className="input-search" type="text" placeholder="جست‌وجو در نظرسنجی‌ها" 
          onKeyDown={(e) => {if(e.key === "Enter") {
            let tbl=document.getElementById('tbl');
            tbl.remove();
          }}} >
          </input>
          <button className="search-icon">
          <img
            className="ssearch-rounde-icon"
            alt=""
            src="assets/img/materialsymbolssearchrounded.svg"
          />
          </button>
      </div>
    );
};
export default SearchBox;
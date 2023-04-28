import "../styles/search_box.css";
const SearchBox=() =>{
    return(
        <div class="search-box">
          <input class="input-search" type="text" placeholder="جست‌وجو در نظرسنجی‌ها"></input>
          <button class="search-icon">
          <img
            class="ssearch-rounde-icon"
            alt=""
            src="assets/img/materialsymbolssearchrounded.svg"
          />
          </button>
      </div>
    );
};
export default SearchBox;
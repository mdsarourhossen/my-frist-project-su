function handleSearch(){
const SearchInputElement = document.getElementById("search-input-field");
const SearchInputValue = SearchInputElement.Value;
console.log(SearchInputValue);

loadPhone(SearchInputValue);

}

const loadPhone =(searchText)=>{
console.log("Inside the loadPhone function:",searchText);


}
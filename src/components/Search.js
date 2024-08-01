const Search = (props) => {
    const {searchStr, lisData, filData} = props;
    return (
    <div className="search-container">
        <input type="text" value={searchStr[0]} onChange={(e)=> {
                if(!e.target.value.length) {
                    filData[1](lisData[0]);
                }
                searchStr[1](e.target.value)
            }
        }/>
          {<button onClick={() => {
            const result = lisData[0].filter(res => res.info.name.toLowerCase().includes(searchStr[0].toLowerCase()))
            filData[1](result);
        }}>Search</button>}
        
      
    </div>
    
    )
}

export default Search;
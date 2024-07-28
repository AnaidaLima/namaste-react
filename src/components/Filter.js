
const Filter = (props) => {
    const {filData, resData} = props;
    return (
        <div className="filter">
            <button onClick={() => {
                if(resData[0].length !== filData[0].length) {
                    filData[1](resData[0])
                    return;
                }
                let resss = resData[0].filter(res=>res.info.avgRating > 4.2);
                filData[1](resss);
            }}>
                Top Res - sending useState as props
            </button>
        </div>  
    )
}

export default Filter;

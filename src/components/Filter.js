
const Filter = (props) => {
    const {resData} = props;
    return (
        <div className="filter">
            <button onClick={() => {
                let resss = resData[0].filter(res=>res.info.avgRating > 4.5);
                resData[1](resss);
            }}>
                Top Res - sending useState as props
            </button>
        </div>  
    )
}

export default Filter;

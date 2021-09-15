function AppHeader(props){
    
    var seconds = props.data.current.dt;
    var date = new Date(seconds * 1000);
    var timeStr = date.toString().split(' ', 4).join(' ');
     
    
    return(
        <div>
            <h1>{ props.city }</h1>
            <h5>{ timeStr }</h5>
        </div>
    )
}

export default AppHeader;
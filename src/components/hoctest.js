export const styles ={
    default : {
        color : '#eae8e8',
        backgroundColor : "#737373",
        padding : "10px"
    },disable : {
        backgroundColor : "#9c9c9c",
        color : "#c7c6c6"
    }
}


export const ButtonOne = (props) =>{
    let styles_ = {...styles.default}
    if(props.disable){
            styles_ = {...styles_, ...styles.disable};
        }
    return (
        <button style={styles_}>I am Button </button>
    );
}
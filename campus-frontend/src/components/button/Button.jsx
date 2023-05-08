export const Button = () =>{
    return(
        <>
            <button
                style={
                    {width:"280px",
                    height:"50px",
                    borderRadius:"16px", 
                    border:"none",
                    backgroundColor:"#F42E30",
                    fontFamily:"Inter",
                    fontSize:"18px",
                    color:"#FFFFFF",
                    boxShadow:" 0px 20px 40px rgba(0, 0, 0, 0.11)",
                    fontWeight:"500",
                    fontStyle:"normal",
                    cursor:"pointer"                 
                    }
                }>Выйти из учетной записи</button>
        </>
    )
}
import { createTheme } from "@mui/material";
import { red, lime, deepOrange, yellow, purple, cyan, indigo, green } from '@mui/material/colors';
import zIndex from "@mui/material/styles/zIndex";

const theme = createTheme({
    palette: {
      primary: {
        main: "#4B4BDD", // Replace with your desired color code
      },
      secondary: {
        main: "#00e5ff", // Replace with your desired color code
        // You can also add an A400 property if needed
        // A400: '#0077C2',
      },
    },
    typography:{
        fontFamily:"Ubuntu, Helvetica,Arial, sans-serif",
h1:{
    fontSize:"3rem",
    fontWeight:"600",
    marginBottom:"30px",
    
    '@media (max-width:1367px)': {
      fontSize: "2.2rem", // Adjust the font size for small screens
      marginBottom: "20px", // Adjust the margin for small screens
    },
    
    
},
h2:{
    fontSize:"1.25rem",
    fontWeight:"600",
    marginBottom:"30px",
    
},
body1:{
    fontSize:"1.17rem",
    lineHeight:"36px",
    fontWeight:"500",
    marginBottom: '30px',
    fontFamily:"Ubuntu, Helvetica,Arial, sans-serif",
}
    },
    components:{
      MuiButton:{
        styleOverrides:{
          root:{
            
            marginTop: '10px',
            marginBottom:"15px",
            border:"0px",
            borderRadius:'3px',
            fontSize: '.8em',
            fontWeight: '900',
            lineHeight: '17px',
            textDecoration: 'none',
            textTransform: 'uppercase',
            padding: '16px 22px',
           
            border:"none",
            outline:"none",
            fontFamily: "Ubuntu, Helvetica,Arial, sans-serif",
            "&:hover": {
              //you want this to be the same as the backgroundColor above
              
              color:"#00e5ff"
          },
          MuiButtonBase: {
            defaultProps: {
              // The props to change the default for.
              disableRipple: true, // No more ripple, on the whole application 💣!
            },
          },
         
          },
          }
        }
      },
});
  export default theme;

 
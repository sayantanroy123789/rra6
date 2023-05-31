import { SiThunderbird} from 'react-icons/si';
function Header(){
  return ( 
    <div>
        <div style={{display
        :"flex",justifyContent:"space-evenly",flexDirection:"row",backgroundColor:"#EEE7E7",height:"60px",alignItems:"center",color:"#492860"}}>
            <div style={{display:"flex",marginLeft:"-50px"}}>
            <h1><SiThunderbird/> 
                Hootsuite</h1></div>
                <div style={{width:"40%",display:"flex",justifyContent:"space-evenly",cursor:"pointer",fontSize:"16px"}}>
                    <a>Plateform</a>
                    <a>plan</a>
                    <a>Enterprise</a>
                    <a>Resource</a>
                    <a>Education</a>
                </div>
                <div style={{width:"20%",display:"flex", justifyContent:"space-between"}}>
                    <a>Contact us</a>
                    <a>Login</a>
                    <button style={{height:
                    "30px",width:"80px",backgroundColor:"green",color:"white",fonts
                    :"16px",border:"none",borderRadius:"8px",cursor:"pointer"}}>Sign up</button>
                </div>
        </div>
    </div>
  )
}
export default Header
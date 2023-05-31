import { BsRocketTakeoffFill} from 'react-icons/bs';
import { MdContactPage} from 'react-icons/md';
import { FaPeopleArrows} from 'react-icons/fa';
function Footer(){
    return(
        <div>
            <div style={{height:"250px",width:"100%",textAlign:"center" }}>
                <div  >
                   <div style={{fontSize:"60px", display:"flex",justifyContent:"space-evenly",padding:"30px",color:"#08608B" }}>
                   <BsRocketTakeoffFill/>
                    <MdContactPage/>
                    <FaPeopleArrows/>
                   </div>
                  
                    <div style={{display:"flex",justifyContent:"space-evenly"}}>
                        <h2 style={{marginLeft:"40px"}}>2,500</h2>
                        <h2>45,000</h2>
                        <h2 style={{marginLeft:"-10px"}}>200,00+</h2>
                    </div>
                    

                </div>
            </div>
        </div>
    )
}
export default Footer
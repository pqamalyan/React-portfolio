import "./Contact.css"
import { Form,InputGroup } from "react-bootstrap";
import emailjs from "emailjs-com"
const Email = () =>{
      function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm('service_0vpe8pg','template_62g8k6t',e.target,'W99KWkq5N2Y_r3IN2').then(res=>{
            console.log(res);
        }).catch(err=> console.log(err))
      }
    

    return (<div className="container " style={{backgroundPosition:"center",backgroundSize:"cover",width:"100%",height:"400px"}}>

           <form className="row"  onSubmit={sendEmail} style={{height:"400px",background:"none"}}>
              <label>Name</label>
              <input  type="text" name="name" placeholder="name" className="aas form-control "/>

              <labell >Email</labell>
              <input type="email" className="form-control" placeholder="email"   name="user-email"/>

              <label>Message</label>
              <textarea  placeholder="message" className="form-control" style={{minHeight:"150px",maxHeight:"200px"}}></textarea>
              <input  type="submit" className="form-control" value="Send"/>

           </form>
    </div>)
}

export default Email   
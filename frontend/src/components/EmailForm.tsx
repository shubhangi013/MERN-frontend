import axios from "axios";
import {FunctionComponent, useState} from "react";

const EmailForm : FunctionComponent <{
  id: string
}> = ({id}) => {

  const [emailFrom, setEmailFrom] = useState(null)
  const [emailTo, setEmailTo] = useState(null)
  const [message, setMessage] = useState(null)

const handleEmail= async (e)=>{
  e.preventDefault();
  try {
    const {data}= await axios({
      method: "post",
      url : "/api/files/email",
      data :{
        id,
        emailFrom,
        emailTo
      },
    })
    setMessage(data.message)
  } catch (error) {
    setMessage(error.data.response.message)
  }
}


  return (
    <div className="flex flex-col items-center justify-center w-full p-2 space-y-3">
      <h3>Wanna save time? send your file directly via email!</h3>
      <form className="flex flex-col items-center justify-center w-full p-2 space-y-3" onSubmit={handleEmail} >
        <input type="email" className="p-1 text-white bg-gray-800 border-2 focus:outline-none" placeholder="Email from" required onChange={e=>setEmailFrom(e.target.value)} value= {emailFrom}/>
        <input type="email" className="p-1 text-white bg-gray-800 border-2 focus:outline-none" placeholder="Email to" required onChange={e=>setEmailTo(e.target.value)} value={emailTo} />
        <button className="p-2 my-5 bg-gray-900 rounded-md w-44 focus:outline-none">Send Email</button>
        </form>
        {
          message && <p className="font-medium text-red-400">{message}</p>
        }
    </div>
  )
}

export default EmailForm

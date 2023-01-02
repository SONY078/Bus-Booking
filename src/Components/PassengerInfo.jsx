import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function PassengerInfo() 
{
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [mail, setMAil] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate()
  const ChangeName = (event) => { 
    setName(event.target.value)
  }
  const ChangePhone=(e)=>{
    setPhone(e.target.value)
  }
  const ChangeMail=(e)=>{
    setMAil(e.target.value)
  }
  const ChangeMessage = (e)=>{
    setMessage(e.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate("/payment");
  }
  const Reset = () => {
    setName("")
    setPhone("")
    setMAil("")
    setMessage("")
  }
  // const reset = (e)=>
  // {
  //   e.preventDefault();
  //   ref.current.reset();
  // }
  return(
    <div>
      <h1>Enter your details to get the ticket to your mail</h1>
       <form enctype="text/plain" onSubmit={handleSubmit} id='form-container'>
                        <br/>
                        <label for="" class="ast">Name:</label>&emsp;&emsp;&emsp;&emsp;
                        <input type="text" name="name" placeholder="enter name" required value={name} 
        onChange={ChangeName} id='inname'/><br/><br/>
                        <label for="" class="ast">Phone No.:</label>&emsp;&emsp;&emsp;&emsp;
                        <input type="tel" name="phone" placeholder="enter number" required value={phone} 
        onChange={ChangePhone}/><br/><br/>
                        <label for="" class="ast">E-mail:</label>&emsp;&emsp;&emsp;&emsp;
                        <input type="text" name="mail" placeholder="enter email" required value={mail} 
        onChange={ChangeMail} id='inmail'/><br/><br/>
                        <label for="">message:</label>&emsp;&emsp;&emsp;
                        <textarea type="text" name="comment" placeholder="write the message" value={message} 
        onChange={ChangeMessage}></textarea><br/><br/>
                        <input type="submit" value="Send" id="submit" />
                        <input type="reset" value="Reset" id="reset" onClick={()=>Reset()}/>
          </form>
    </div>
  );
}


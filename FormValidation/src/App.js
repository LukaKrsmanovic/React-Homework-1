import './App.css';
import FormInput from './components/FormInput';
import {useState} from "react";

function App() {
  const [values,setValues]= useState({
    username:"",
    firstname:"",
    lastname:"",
    email:"",
    password:"",
    confirmPassword:"",
    
  })

  const [show, setShow] = useState(true);
  const inputs= [
    {
      id:1,
      name:"username",
      type:"text",
      placeholder:"Username",
      errorMessage:"Username should be 6-12 characters!",
      pattern:"^[A-Za-z0-9]{6,12}$",
      label:"Username"

    },
    {
      id:2,
      name:"firstname",
      type:"text",
      placeholder:"First Name",
      errorMessage:"First name is required. ",
      required:true,
      label:"First Name" 
      

    },
    {
      id:3,
      name:"lastname",
      type:"text",
      placeholder:"Last name",
      errorMessage:"Last name is required.",
      required:true,
      label:"Last name"

    },
    {
      id:4,
      name:"email",
      type:"email",
      placeholder:"Email",
      errorMessage:"It should be valid email adress!",
      required:true,
      label:"Email"

    },
    {
      id:5,
      name:"password",
      type:"password",
      placeholder:"Password",
      errorMessage:"Pssword should be minimum 8 characters long and contain at least 1 uppercase letter, 1 lowercase letter, 1 number and one special character!",
      pattern:"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,}$",
      label:"Password"

    },
    {
      id:6,
      name:"confirmPassword",
      type:"password",
      placeholder:"Confirm Password",
      errorMessage:"Passwords don't match!",
      pattern: values.password,
      label:"Confirm Password"

    }
  ]

  const handleSubmit = (e)=>{
    e.preventDefault();
    //console.log(values);
    fetch("https://jsonblob.com/api/jsonBlob", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        redirect: "follow"
      },
      body: JSON.stringify(values)
    })
      .then(function (response) {
        let blobUrl = response.headers.get(
          "Location"
        );
        console.log(blobUrl, "BLOB URL");
      })
      .then(function(){
        setShow(false);
        return (
          <p>Validna registracija!</p>

        )
      })
      .catch(function (error) {
        console.log(error);
      });

  };
  const onChange=(e)=>{
    setValues({...values,[e.target.name]:e.target.value});
  }
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
      <h1 style={{ display: show ? "block" : "none" }}>Sign Up</h1>
      <h1 style={{ display: show ? "none" : "block" }}>Your account has been created and verified.</h1>
      <div style={{ display: show ? "block" : "none" }}>
        {inputs.map((input)=>
        ( 
        <FormInput  key={input.id} {...input} value={values[input.name]} onChange={onChange}/>


        ))}
        </div>
        
        
        <button style={{ display: show ? "block" : "none" }}>Submit</button>

      </form>
    </div>
  );
}

export default App;

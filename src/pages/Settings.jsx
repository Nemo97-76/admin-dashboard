import {useState} from "react";
import "./settings.css"
 const Settings = () => {
    const [username, setUsername] = useState('Admin User');
  const [email, setEmail] = useState('tasneemyoussef61@gmail.com');
   
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("settings updated :", { username, email })
  }
  return (
        <>
<h3>settings</h3>
<div className="card">
<h4>
          User Preferences
        </h4>
        <div>
          <div className="setting-form-holder">
            <label
              htmlFor="username"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="email-holder">
            <label
              htmlFor="email"
              
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
          className="settingBTN"
            onClick={handleSubmit}
          >
            Save Settings
          </button>
        </div>
      </div>
         </>
        )
 }
 export default Settings;
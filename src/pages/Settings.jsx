import {useState} from "react";
import "./settings.css"
 const Settings = ({theme,toggleTheme}) => {
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
         <div style={{ marginBottom: '1.5rem' }}>
            <label
              htmlFor="theme-toggle"
              style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.25rem' }}
            >
              Theme
            </label>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '0.5rem', color: 'var(--text-secondary)' }}>
                {theme === 'light' ? 'Light' : 'Dark'}
              </span>
              <label
                htmlFor="theme-toggle"
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  width: '2.5rem',
                  height: '1.25rem',
                }}
              >
                <input
                  id="theme-toggle"
                  type="checkbox"
                  checked={theme === 'dark'}
                  onChange={toggleTheme}
                  style={{ opacity: 0, width: 0, height: 0 }}
                />
                <span style={{
                  position: 'absolute',
                  cursor: 'pointer',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: theme === 'light' ? '#e5e7eb' : '#3b82f6',
                  borderRadius: '1rem',
                  transition: 'background-color 0.3s',
                }}>
                  <span style={{
                    position: 'absolute',
                    height: '1rem',
                    width: '1rem',
                    left: theme === 'light' ? '0.125rem' : '1.375rem',
                    bottom: '0.125rem',
                    backgroundColor: '#ffffff',
                    borderRadius: '50%',
                    transition: 'left 0.3s',
                  }} />
                </span>
              </label>
            </div>
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
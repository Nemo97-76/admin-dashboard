import React ,{useState} from "react";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import InsertChartRoundedIcon from '@mui/icons-material/InsertChartRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from "react-router-dom";
import "../App.css"
const navItems = [
    {name: "Dashboard", icon: <HomeRoundedIcon />, path : "/"},
    {name :"users", icon: <PersonRoundedIcon />, path : "/users"},
    {name :"Analytics", icon: <InsertChartRoundedIcon />, path : "/analytics"},
    {name :"Settings", icon: <SettingsRoundedIcon />, path : "/settings"},
]
const Sidebar = ({isOpen , setIsAuthenticated}) => {
    const [activeItem, setActiveItem] = useState("Dashboard")    
    const navigate=useNavigate()
    const handleLogout = async () => {
      setIsAuthenticated(false);
    navigate('/login');
 };
return (
    <aside /*  style={{
      backgroundColor: '#ffffff',
      width: isOpen ? '16rem' : '4rem',
      minHeight: '100vh',
      padding: '1rem',
      borderRight: '1px solid #e5e7eb',
      transition: 'width 0.3s ease',
    }} */>
        <div className="sidebarContent" style={{  justifyContent: isOpen ? 'space-between' : 'center' }}>
 {isOpen && (
 <h1>
            Admin Dashboard
          </h1>
)}
         </div>

        <nav style={{flex:1}}>
            <ul>
                {navItems.map((item)=>(
                        <li key={item.name}>
                            <Link className="sidebarLink"
                            to={item.path}
                            onClick={() => setActiveItem(item.name)}
                            style={{
                                backgroundColor: activeItem === item.name ? '#3b82f6' : 'transparent',
                                color: activeItem === item.name ? '#ffffff' : '#4b5563',
                            }}
                            title={item.name}
                            >
                            <div className="sidebar-link-icon" style={{marginRight: isOpen ? '0.75rem' : '0'}}>
                                {item.icon}
                            </div>
                            {isOpen && (
                                <span>
                                    {item.name}
                                </span>
                            )}
                            </Link>
                        </li>
                ))}
            </ul>
        </nav>
        <div className="logoutBTNcontent">
            <button
            onClick={handleLogout}
            >
<LogoutIcon className="logoutIcon" style={{marginRight:isOpen? "0.75rem":"0"}}/>
{isOpen && <span>Logout</span>}
            </button>
        </div>
    </aside>
)}
export default Sidebar;
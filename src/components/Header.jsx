import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import "../App.css"
const Header=({toggleSidebar})=>{
  return (
    <header>
      <div className="headerContent">
        <button
          onClick={toggleSidebar}
        >
          <MenuRoundedIcon className='menu-icon'/>
        </button>
        <h2>
          Dashboard
        </h2>
      </div>
      <div className='admin-header-data'>
        <AccountCircleRoundedIcon className='account-icon'/>
        <span>Admin User</span>
      </div>
    </header>
    )
}
export default Header
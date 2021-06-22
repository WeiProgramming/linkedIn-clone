import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import './Header.css';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch } from 'react-redux';
import {auth} from '../../firebase';
import {logout} from '../../features/userSlice';

const Header = () => {
    const dispatch = useDispatch();
    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    }

    return (
        <div className="header">
            <div className="header__left">
                <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="" />
                <div className="header__search">
                    <SearchIcon/>
                    <input type="text" />
                </div>

            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Messaging" />
                <HeaderOption Icon={ChatIcon} title="My Notifications" />
                <HeaderOption Icon={NotificationsIcon} title="My Notifications" />
                <HeaderOption avatar={true} onClick={logoutOfApp} title="me" avatar="https://image.flaticon.com/icons/png/128/1077/1077063.png" />
            </div>
        </div>
    )
}

export default Header;
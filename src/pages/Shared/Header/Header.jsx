import moment from 'moment';
import logo from '../../../assets/logo.png';

const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto pt-12 pb-5' src={logo} alt="" />
            <p className='pb-2'>Journalism Without Fear or Favour</p>
            <p className='text-xl'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;
import { Outlet, useLocation } from 'react-router';
import { customLog } from '../utils/CustomConsole';

const Hoc = () => {

    let location = useLocation();
    customLog('hoc is active');

    return <Outlet />;
}

export default Hoc
import { Outlet, useLocation } from 'react-router';

const Hoc = () => {

    let location = useLocation();
    console.log('hoc is active');

    return <Outlet />;
}

export default Hoc
import { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { customLog } from '../utils/CustomConsole';

//npm i react-pro-sidebar
const SideBar1 = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <MenuIcon onClick={() => setOpen(!open)}>test</MenuIcon>
            <Sidebar
                className='bg-slate-500 h-screen'
                rootStyles={{

                }}
                collapsed={open}
                toggled={false}
                width='270px'
                collapsedWidth='100px'
                rtl={false}
                breakPoint="sm"
                backgroundColor='rgb(249, 249, 249, 0.7)'
                // image='https://arashaltafi.ir/arash.jpg'
                onBackdropClick={() => { customLog('onBackdropClick') }}
            >

                <Menu
                    menuItemStyles={{
                        button: {
                            // the active class will be added automatically by react router
                            // so we can use it to style the active menu item
                            [`&.active`]: {
                                backgroundColor: '#13395e',
                                color: '#b6c8d9',
                            },
                        },
                    }}
                    closeOnClick={true}
                    transitionDuration={300}
                >
                    <MenuItem active> Documentation</MenuItem>
                    <SubMenu active>Documentation SubMenu</SubMenu>
                    <MenuItem component={<Link to="/" />}> Calendar</MenuItem>
                    <MenuItem disabled component={<Link to="/" />}> E-commerce</MenuItem>
                </Menu>
            </Sidebar>
        </>
    );
}

export default SideBar1
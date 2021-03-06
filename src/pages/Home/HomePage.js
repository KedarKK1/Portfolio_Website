// import React, {useState} from 'react';
import React from 'react';
// import {Card, Button, Row, Col, Container} from 'react-bootstrap';
// import Pagination from 'react-bootstrap/Pagination';
import NavbarHeader from "../../components/Layout/NavbarHeader";
import FooterHeader from "../../components/Layout/FooterHeader";
// import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
// import { Menu, Switch, Layout, Affix, Button } from 'antd';
// import { Layout} from 'antd';
import MyLayout from "../../components/Home Page/MyLayout";
import MySkills from "../../components/Home Page/MySkills"
import MyProjects from "../../components/Home Page/MyProjects";
import ContactMe from "../../components/Home Page/ContactMe";
import { Helmet } from 'react-helmet';
// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;
/*this is for importing dark theme of antd  */
// {
//     label: (
//     <Switch
//         checked={theme === 'dark'}
//         onChange={changeTheme}
//         checkedChildren="Dark"
//         unCheckedChildren="Light"
//     />

//     ),
//     key: 'theme',
// },

const HomePage = () => {
    // const [container, setContainer] = useState(null);
    // const [theme, setTheme] = useState('light');
    // const [current, setCurrent] = useState('mail');

    // const onClick = (e) => {
    //   console.log('click ', e);
    //   setCurrent(e.key);
    // };

    // const changeTheme = (value) => {
    //     setTheme(value ? 'light' : 'dark');
    // };

    // const { Header, Footer, Sider, Content } = Layout;

    // const items = [
    // {
    //     label: 'Navigation One',
    //     key: 'mail',
    //     icon: <MailOutlined />,
    // },
    // {
    //     label: 'Navigation Two',
    //     key: 'app',
    //     icon: <AppstoreOutlined />,
    //     disabled: true,
    // },
    // {
    //     label: 'Navigation Three - Submenu',
    //     key: 'SubMenu',
    //     icon: <SettingOutlined />,
    //     style: {marginLeft: 'auto' },
    //     children: [
    //     {
    //         type: 'group',
    //         label: 'Item 1',
    //         children: [
    //         {
    //             label: 'Option 1',
    //             key: 'setting:1',
    //         },
    //         {
    //             label: 'Option 2',
    //             key: 'setting:2',
    //         },
    //         ],
    //     },
    //     {
    //         type: 'group',
    //         label: 'Item 2',
    //         children: [
    //         {
    //             label: 'Option 3',
    //             key: 'setting:3',
    //         },
    //         {
    //             label: 'Option 4',
    //             key: 'setting:4',
    //         },
    //         ],
    //     },
    //     ],
    // },
    // {
    //     label: (
    //     <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
    //         Navigation Four - Link
    //     </a>
    //     ),
    //     key: 'alipay',
    // },
    // {
    //     label: (
    //     <Switch
    //         checked={theme === 'dark'}
    //         onChange={changeTheme}
    //         checkedChildren="Dark"
    //         unCheckedChildren="Light"
    //     />
    
    //     ),
    //     key: 'theme',
    // },
    // ];
  
  return (
    <div>
        <Helmet>
            <title>Portfolio Website</title>
            <meta name="Portfolio" content="Fortfolio page website skills projects contact me about me fun page "  />
        </Helmet>
        {/* <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" theme={theme} items={items} >

           <SubMenu style={{float: 'right'}} title={<span>Navigation Three - Submenu</span>}>
                <MenuItemGroup title="Item 1">
                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup title="Item 2">
                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                    <Menu.Item key="setting:4">Option 4</Menu.Item>
                </MenuItemGroup>
            </SubMenu>

        
        </Menu> */}

        <NavbarHeader />
        
        {/* <div className="container-fluid text-white">
            Hello
        </div> */}
        {/* <Layout  style={{backgroundColor: "#111d2c"}} > */}
        {/* <Layout >
            <Content align={'end'}>
                Light theme/Dark Theme
                <Switch
                    checkedChildren={'Dark'}
                    unCheckedChildren={'Light'}
                    defaultChecked
                />
            </Content>
        </Layout> */}
        <div className="random_div">
            <MyLayout />
            {/* Note giving id here will not make it work, give ID's to divs inside components */}
            <MySkills id="skills" />
            <MyProjects />
            <ContactMe />
        </div>


        
        <FooterHeader />
    </div>
  )
}

export default HomePage
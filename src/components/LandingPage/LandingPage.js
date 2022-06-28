import { Button, Col, Layout, Row } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import React from 'react'
import FooterHeader from '../Layout/FooterHeader'
import NavbarHeader from '../Layout/NavbarHeader'
import './LandingPage.css'
import myGif from '../../images/myGif.gif'
// import { ExportOutlined } from '@ant-design/icons'
import Aos from 'aos';
import { Link } from 'react-router-dom';


const LandingPage = () => {

    const myInterest = [
        "Student",
        "Full Stack Developer",
        "Blockchain enthusiast",
    ]

    Aos.init({
        duration: 3000,
    });

  return (
    <div >
        <Layout style={{ minHeight: "100vh" }} >

            <NavbarHeader />

            <div className="main-content">
                <Layout >
                    <Content>
                        <Row className="myRow2" style={{justifyContent: 'center'}}>
                            <Col xxl={1} xl={1} lg={1} xs={1} md={1} sm={1} />

                            <Col xxl={9} xl={9} lg={9} xs={22} md={22} sm={22} >
                                <img src={myGif} alt="myGif" className='myGif' />
                            </Col>

                            <Col xxl={1} xl={1} lg={1} xs={1} md={1} sm={1} />

                            <Col xxl={0} xl={0} lg={0} xs={1} md={1} sm={1} />

                            <Col xxl={12} xl={12} lg={12} xs={22} md={22} sm={22} >
                                <div style={{marginTop: 15}} >
                                    <h3>Welcome guys,</h3>
                                    <div><h1>I'm <b> Kedar Koshti</b></h1> </div>
                                    <h5>I'm a <b>{myInterest.map((interest) => interest + " | ")}</b> </h5>
                            </div>

                            <div>
                                    
                                    {/* <Button type="primary" shape="round" size="large" ><a href="https://kedarkk1.github.io/Portfolio_Website/"  > Go to my Portfolio Website</a></Button> */}
                                    <Button type="primary" shape="round" size="large" ><Link to="Home_Page"  > Go to my Portfolio Website</Link></Button>
                            </div>

                            </Col>

                            <Col xxl={1} xl={1} lg={1} xs={1} md={1} sm={1} />

                        </Row>
                    </Content>
                </Layout>
            </div>

            <FooterHeader className="mFooter" />

        </Layout>
    </div>
  )
}

export default LandingPage
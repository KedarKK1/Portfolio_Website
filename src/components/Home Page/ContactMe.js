// import { Layout, Row, Col, Button, Form, Input, InputNumber } from 'antd';
import { Layout, Row, Col, Button, Form, Input } from 'antd';
import { Content } from 'antd/lib/layout/layout'
import React, { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";

const ContactMe = () => {

    const handleSubmit = () => {
        alert("Submting 'Contact Me' is not done yet. Please try Gmail link or LinkedIn link on left/up.")
    }

    useEffect(() => {
        Aos.init({
            duration: 500,
        });
    
    }, [])

  return (
    <>
    <Layout id="contact">
        <Content  style={{ marginTop: 15}} data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <h1> <b><u>Contact Me</u></b> </h1>
            <Row style={{ marginTop: 15}}>
                <Col xxl={2} xl={2} lg={2} xs={2} md={2} sm={2} />

                <Col xxl={9} xl={9} lg={9} xs={9} md={9} sm={9} >
                    <a href="mailto:officialkedark1@gmail.com" className="px-3"><img style={{ marginTop: 15}} src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="badge" /></a>
                    <a target="_href" href="https://www.linkedin.com/in/kedar-koshti-700804218/"><img style={{ marginTop: 15}} src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="badge" /></a>
                </Col>

                <Col xxl={2} xl={2} lg={2} xs={2} md={2} sm={2} />

                <Col xxl={9} xl={9} lg={9} xs={9} md={9} sm={9} >
                    <Form style={{ marginTop: 15}}>
                        <Form.Item
                            name={['user', 'name']}
                            label="Name"
                            rules={[
                            {
                                required: true,
                            },
                            ]}
                        >
                            <Input />
                        </Form.Item>   
                        <Form.Item
                            name={['email']}
                            label="Email"
                            rules={[
                            {
                                type: 'email',
                                error: 'Please enter valid email address'
                            },
                            {
                                required: true,
                                error: 'Please enter email'
                            },
                            ]}
                        >
                            <Input />
                        </Form.Item>      
                        <Form.Item 
                            name={['user', 'description']} 
                            label="Description"
                            rules={[
                                {
                                    required: true,
                                },
                                ]}
                        >
                            <Input.TextArea />
                        </Form.Item>    
                        <Form.Item >
                            <Button type="primary" htmlType="submit" onClick={handleSubmit} >
                                Submit
                            </Button>
                        </Form.Item>   
                    </Form>
                </Col>

                <Col xxl={2} xl={2} lg={2} xs={2} md={2} sm={2} />
            </Row>
        </Content>
    </Layout>
    </>
  )
}

export default ContactMe
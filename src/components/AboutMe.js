import { React } from 'react';
import { Col, Space, Row, Divider, Tag, Timeline, Typography } from 'antd';
import { MailOutlined, LaptopOutlined, CalendarOutlined, FormOutlined, PhoneOutlined, LinkedinOutlined, GithubOutlined, SkypeOutlined } from '@ant-design/icons';
import dp from '../image/dpppp.jpg';
import './style.css';

const { Text, Link } = Typography;

const imageStyle = {
    marginTop: '30px',
    textAlign: 'center'
}

const aboutMeStyle = {
    background: '#fff',
    marginTop: '10px',
    padding: '10px',
    fontSize: '18px',
    color: '#838383',
    lineHeight: '2em',
    textAlign: 'justify'
};
const aboutProject = {
    fontSize: '14px',
    color: '#838383',
    lineHeight: '2em',
    textAlign: 'justify'
}

function AboutMe() {
    return (
        <div className="container">
            <Row gutter={16}>
                <Col className="gutter-row" xl={8} lg={8} md={24} sm={24} xs={24}>
                    <div style={imageStyle}>
                        <img style={{ borderRadius: '50%' }} src={dp} width="200" height="200" alt='Music' />
                    </div>
                </Col>
                <Col className="gutter-row" xl={16} lg={16} md={24} sm={24} xs={24}>
                <div style={{ marginBottom: '20px', fontSize: '20px', paddingLeft: '10px', paddingTop: '10px', marginTop: '20px' }}>
                                About me
                            </div>
                    <div style={aboutMeStyle}>
                        4+ years experienced React developer with hands-on experience in identifying web-based user interactons along with designing and implementing
                        highly responsive user interface components by deploying React concepts. Proficient in translating designs and wireframes into high quality code, and writing
                        application interfaces code via Javascript and ReactJS workflows.
                    </div>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col className="gutter-row" xl={24} lg={24} md={24} sm={24} xs={24}>
                    <div className='skillTitle'>
                        <Divider orientation="left">SKILL SET</Divider>
                    </div>
                    <div style={{ padding: '2em' }}>
                        <Tag color="magenta">JavaScript</Tag>
                        <Tag color="red">ReactJS</Tag>
                        <Tag color="volcano">Redux</Tag>
                        <Tag color="geekblue">HTML</Tag>
                        <Tag color="gold">CSS</Tag>
                        <Tag color="cyan">MaterialUI</Tag>
                        <Tag color="magenta">SemanticUI</Tag>
                        <Tag color="purple">ExpressJS</Tag>
                        <Tag color="geekblue">NodeJS</Tag>
                        <Tag color="volcano">JQuery</Tag>
                    </div>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col className="gutter-row" xl={24} lg={24} md={24} sm={24} xs={24}>
                    <div className='skillTitle'>
                        <Divider orientation="left">WORK EXPERIENCE</Divider>
                    </div>
                    <Row gutter={16}>
                        <Col className="gutter-row" xl={6} lg={6} md={6} sm={24} xs={24}>
                            <Divider orientation="left"><CalendarOutlined /> August 2019 to Current</Divider>
                        </Col>
                        <Col className="gutter-row" xl={18} lg={18} md={18} sm={24} xs={24}>
                            <Typography style={{ marginTop: '15px', marginBottom: '5px', fontSize: '16px' }}>Reverie Language Technologies Ltd. Bengaluru, <LaptopOutlined /> Sr. Software Engineer</Typography>
                            <div style={{ marginBottom: '20px' }}>
                                Role and Responsibilities
                            </div>
                            <Timeline>
                                <Timeline.Item color="#08979c">Coordinate with a team of UX and UI developers to build quality web applications with cross-browser compatibility</Timeline.Item>
                                <Timeline.Item color="#08979c">Analyze existing web applications and identify opportunities to enhance functionality and improve the user experience</Timeline.Item>
                                <Timeline.Item color="#08979c">Support the development of front-end systems using HTML, JavaScript, and React</Timeline.Item>
                                <Timeline.Item color="#08979c">Attend meetings with UI development teams, project managers, and customers to ensure alignment with project specifications</Timeline.Item>
                            </Timeline>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col className="gutter-row" xl={6} lg={6} md={6} sm={24} xs={24}>
                            <Divider orientation="left"><FormOutlined /> Projects</Divider>
                        </Col>
                        <Col className="gutter-row" xl={18} lg={18} md={18} sm={24} xs={24}>
                            <Divider orientation="left" orientationMargin="0">Prabandhak—  AI Translation Management System</Divider>
                            <div style={{ marginBottom: '20px' }}>
                                About
                            </div>
                            <div style={aboutProject}>
                                Prabandhak AI Translation Management Tool where any application based file can be translated with the prabandhak cat-tool or with the help of Neural machine
                                translation and with the Natural language prabandhak input tool (such as keyboard, phonetic suggestion).
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Divider dashed />
                <Col className="gutter-row" xl={24} lg={24} md={24} sm={24} xs={24}>
                    <Row gutter={16}>
                        <Col className="gutter-row" xl={6} lg={6} md={6} sm={24} xs={24}>
                            <Divider orientation="left"><CalendarOutlined /> May 2017 to June 2019</Divider>
                        </Col>
                        <Col className="gutter-row" xl={18} lg={18} md={18} sm={24} xs={24}>
                            <Typography style={{ marginTop: '15px', marginBottom: '5px', fontSize: '16px' }}>Tripborn (Sun-Alpha Green Technologies), Bengaluru — <LaptopOutlined /> Software Engineer</Typography>
                            <div style={{ marginBottom: '20px' }}>
                                Role and Responsibilities
                            </div>
                            <Timeline>
                                <Timeline.Item color="#08979c">Responsible for coding of the functional specification and project design</Timeline.Item>
                                <Timeline.Item color="#08979c">Analyze existing web applications and identify opportunities to enhance functionality and improve the user experience</Timeline.Item>
                                <Timeline.Item color="#08979c">Support the development of front-end systems using HTML, JavaScript, and React</Timeline.Item>
                                <Timeline.Item color="#08979c">Attend meetings with UI development teams, project managers, and customers to ensure alignment with project specifications</Timeline.Item>
                            </Timeline>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col className="gutter-row" xl={6} lg={6} md={6} sm={24} xs={24}>
                            <Divider orientation="left"><FormOutlined /> Projects</Divider>
                        </Col>
                        <Col className="gutter-row" xl={18} lg={18} md={18} sm={24} xs={24}>
                            <Divider orientation="left" orientationMargin="0">Holiday Packages (a B2C Application)</Divider>
                            <div style={{ marginBottom: '20px' }}>
                                About
                            </div>
                            <div style={aboutProject}>
                                This application facilitates suppliers to create their holiday packages. The newly created packages will be in pending state in
                                the admin portal. Once the admin approves the packages, it will be visible to the end users.
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Divider dashed />
                <Col className="gutter-row" xl={24} lg={24} md={24} sm={24} xs={24}>
                    <div className='skillTitle'>
                        <Divider orientation="left">PERSONAL DETAILS</Divider>
                    </div>
                    <Row gutter={16}>
                        <Col className="gutter-row" xl={12} lg={12} md={12} sm={24} xs={24}>
                            <Divider orientation="left" orientationMargin="0">Education Details</Divider>
                            <Timeline>
                                <Timeline.Item color="#08979c">MCA 2015 passedout (Tezpur Central University, Sonitpur, Assam, India )</Timeline.Item>
                                <Timeline.Item color="#08979c">BSc 2011 passedout (Gauhati Unversity, Guwahati, Assam, India)</Timeline.Item>
                                <Timeline.Item color="#08979c">12th CBSE BOARD 2008 passedout (JNV Morigaon, Assam)</Timeline.Item>
                                <Timeline.Item color="#08979c">10th CBSE BOARD 2006 passedout (JNV Morigaon, Assam)</Timeline.Item>
                            </Timeline>
                        </Col>
                        <Col className="gutter-row" xl={12} lg={12} md={12} sm={24} xs={24}>
                            <Divider orientation="left" orientationMargin="0">Contact Details</Divider>
                            <Space direction="vertical">
                                <Text><MailOutlined /> khanmushfikur@gmail.com</Text>
                                <Text type="secondary"><PhoneOutlined /> +91 7348825987</Text>
                                <Text type="success"><LinkedinOutlined /> https://www.linkedin.com/in/mushfikur-khan-901418120</Text>
                                <Text type="primary"><SkypeOutlined /> https://join.skype.com/invite/pgZBzCZSs1zp</Text>
                                <Text><GithubOutlined /> https://github.com/mushfikur310</Text>
                            </Space>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
};

export default AboutMe;
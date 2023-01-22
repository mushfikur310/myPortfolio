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
                        <Tag style={{ marginBottom: '6px' }} color="magenta">JavaScript</Tag>
                        <Tag style={{ marginBottom: '6px' }} color="red">ReactJS</Tag>
                        <Tag style={{ marginBottom: '6px' }} color="volcano">Redux</Tag>
                        <Tag style={{ marginBottom: '6px' }} color="geekblue">HTML</Tag>
                        <Tag style={{ marginBottom: '6px' }} color="gold">CSS</Tag>
                        <Tag style={{ marginBottom: '6px' }} color="cyan">MaterialUI</Tag>
                        <Tag style={{ marginBottom: '6px' }} color="magenta">SemanticUI</Tag>
                        <Tag style={{ marginBottom: '6px' }} color="purple">ExpressJS</Tag>
                        <Tag style={{ marginBottom: '6px' }} color="geekblue">NodeJS</Tag>
                        <Tag style={{ marginBottom: '6px' }} color="volcano">JQuery</Tag>
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
                            <Divider orientation="left"><CalendarOutlined /> August 2019 to Present</Divider>
                        </Col>
                        <Col className="gutter-row" xl={18} lg={18} md={18} sm={24} xs={24}>
                            <Typography style={{ marginTop: '15px', marginBottom: '5px', fontSize: '16px' }}>Reverie Language Technologies Ltd. Bengaluru, <LaptopOutlined /> Sr. Software Engineer</Typography>
                            <div style={{ marginBottom: '20px' }}>
                                Role and Responsibilities
                            </div>
                            <Timeline>
                                <Timeline.Item color="grey">Working as React lead developer to the end to end design of the application functionality</Timeline.Item>
                                <Timeline.Item color="grey">Coordinate with lead to design the application based on the client requirements and delegate work to meet deadlines</Timeline.Item>
                                <Timeline.Item color="grey">Support the development of front-end systems using CSS, HTML, JavaScript, React and Redux</Timeline.Item>
                                <Timeline.Item color="grey">Attend meetings with development teams, project managers, and customers to ensure alignment with project specifications</Timeline.Item>
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
                                <Timeline.Item color="grey">Integrating designs and wireframes within the application code.</Timeline.Item>
                                <Timeline.Item color="grey">Leverage the inbuilt React toolkit for creating frontend features.</Timeline.Item>
                                <Timeline.Item color="grey">Enhance application performance with constant monitoring.</Timeline.Item>
                                <Timeline.Item color="grey">Monitor interaction of users and convert them into insightful information.</Timeline.Item>
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
                                <Timeline.Item color="grey">MCA 2015 passedout (Tezpur Central University, Sonitpur, Assam, India )</Timeline.Item>
                                <Timeline.Item color="grey">BSc 2011 passedout (Gauhati Unversity, Guwahati, Assam, India)</Timeline.Item>
                                <Timeline.Item color="grey">12th CBSE BOARD 2008 passedout (JNV Morigaon, Assam)</Timeline.Item>
                                <Timeline.Item color="grey">10th CBSE BOARD 2006 passedout (JNV Morigaon, Assam)</Timeline.Item>
                            </Timeline>
                        </Col>
                        <Col className="gutter-row" xl={12} lg={12} md={12} sm={24} xs={24}>
                            <Divider orientation="left" orientationMargin="0">Contact Details</Divider>
                            <Space direction="vertical">
                                <Text><MailOutlined style={{ color: '#74b9ff' }} /> khanmushfikur@gmail.com</Text>
                                <Text><PhoneOutlined style={{ color: '#74b9ff' }} /> +91 7348825987</Text>
                                <Text color='warning'><LinkedinOutlined style={{ color: '#74b9ff' }} /> https://www.linkedin.com/in/mushfikur-khan-901418120</Text>
                                <Text type="primary"><SkypeOutlined style={{ color: '#74b9ff' }} /> https://join.skype.com/invite/pgZBzCZSs1zp</Text>
                                <Text><GithubOutlined style={{ color: '#74b9ff' }} /> https://github.com/mushfikur310</Text>
                            </Space>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
};

export default AboutMe;
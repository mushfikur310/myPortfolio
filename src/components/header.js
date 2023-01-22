import { React } from 'react';
import { Typography } from 'antd';
import './style.css';

const headerStyle = {
    height: '300px',
    margin: 'auto',
    width: '100%',
    padding: '105px 0',
    textAlign: 'center'
};
const textStyle = {
    color: '#fff'
};
const profileText = {
    color: '#fff'
}

function PortfolioHeader() {
    return (
        <div className='header' style={headerStyle}>
            <Typography.Title level={1} style={textStyle}>
                MUSHFIKUR RAHMAN KHAN
            </Typography.Title>
            <p className="line-1 anim-typewriter">Senior Software Engineer</p>
        </div>
    )
};
export default PortfolioHeader;
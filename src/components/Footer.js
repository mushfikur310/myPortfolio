import { React } from 'react';
import { Typography } from 'antd';
import { LinkedinOutlined, GithubOutlined, SkypeOutlined } from '@ant-design/icons';
const { Link } = Typography;

const footerElements = {
    textAlign: 'center',
    padding: '1em',
    backgroundColor: '#2f3640'
}

function Footer() {
    return (
        <div style={footerElements}>
            <div style={{ textAlign: 'center' }}>
                <Link href="https://www.linkedin.com/in/mushfikur-khan-901418120" target="_blank">
                    <LinkedinOutlined style={{ fontSize: '20px', color: '#FFF', margin: '6px' }} />
                </Link>
                <Link href="https://github.com/mushfikur310" target="_blank">
                    <GithubOutlined style={{ fontSize: '20px', color: '#FFF', margin: '6px' }} />
                </Link>
                <Link href="https://join.skype.com/invite/pgZBzCZSs1zp" target="_blank">
                    <SkypeOutlined style={{ fontSize: '20px', color: '#FFF', margin: '6px' }} />
                </Link>
            </div>
            <span style={{ color: '#FFF', fontSize: '14px' }}>No © copyright issues, feel free to copy 😀</span>
        </div>
    );
};

export default Footer;
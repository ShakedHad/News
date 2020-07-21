import React, { useState, useEffect, Fragment, use } from 'react';
import { Layout, Menu, Button } from 'antd';
import 'antd/dist/antd.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faCloudSun } from '@fortawesome/free-solid-svg-icons';
import Axios from 'axios';
import Text from 'antd/lib/typography/Text';
import './index.css';
import Posts from './Components/Posts';
import LoginModal from './Components/LoginModal';
import UserProvider from './Providers/UserProvide';

const { Header, Content, Footer } = Layout;

export default function App() {
    const [loginModalVisibility, setLoginModalVisibility] = useState(false);
    const [authenticatedUser, setAuthenticatedUser] = useState({ userId: null, username: null });
    const [weatherInfo, setWeatherInfo] = useState({});

    const login = async (credentials) => {
        try {
            const admin = (await Axios.post('/api/admins/authenticate', credentials)).data;
            console.log(admin);
            setAuthenticatedUser(admin);
            setLoginModalVisibility(false);
        } catch (e) {
            console.log('wrong password');
        }
    };

    useEffect(() => {
        (async () => {
            console.log('bla');
            const weatherInfoResponse = JSON.parse((await Axios('https://gk9gzyvd0a.execute-api.us-east-1.amazonaws.com/prod/weather')).data.body);
            console.log('weather', weatherInfoResponse);
            setWeatherInfo({ text: weatherInfoResponse.current.condition.text, temp: weatherInfoResponse.current .temp_c });
        })();
    },[]);
    // (async () => {
    //     const weatherInfoResponse = JSON.parse((await Axios('https://gk9gzyvd0a.execute-api.us-east-1.amazonaws.com/prod/weather')).data.body)[0];
    //     console.log(weatherInfoResponse);
    //     setWeatherInfo({ text: weatherInfoResponse.WeatherText, temp: weatherInfoResponse.Temperature.Metric.Value });
    // })()
    // ), []);

    return (
        <>
            <UserProvider.Provider value={authenticatedUser}>
                <Layout className="layout">
                    <Header>
                        <div className="logo">
                            <div>
                                <FontAwesomeIcon icon={faNewspaper} size="lg" color="#ffffff88" />
                            News Flash
                            </div>
                        </div>
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} className="menu">
                            <Menu.Item key="1">Home</Menu.Item>
                            {
                                authenticatedUser.userId !== null
                                    ? (
                                        <div className="login-button">
                                            {' '}
Hello
                                            {authenticatedUser.username}
                                            {' '}

                                        </div>
                                    )
                                    : <Button className="login-button" type="primary" onClick={() => setLoginModalVisibility(true)}>Login</Button>
                            }
                        </Menu>
                    </Header>
                    <Content style={{ padding: '0 50px' }}>
                        <div className="site-layout-content">
                            <Posts />
                        </div>
                    </Content>
                    <Footer>
                        <div>
                            <FontAwesomeIcon icon={faCloudSun} size="lg" color="#001529" />
                            <Text className="weather-info">
                                {`${weatherInfo.text}, ${weatherInfo.temp}° C`}
                            </Text>
                        </div>
                    </Footer>
                </Layout>
                <LoginModal visible={loginModalVisibility} onOk={login} onCancel={() => setLoginModalVisibility(false)} />
            </UserProvider.Provider>
        </>
    );
}

import React from 'react';
import { Modal, Typography, Form, Input, Button } from 'antd';

const { Title, Paragraph } = Typography;

const tailLayout = {
    wrapperCol: {
        offset: 10,
        span: 16,
    },
};

export default function PostModal(props) {
    const { visible, onOk, onCancel } = props;

    const onFinish = (values) => {
        console.log(values);
        onOk(values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <Modal
                visible={visible}
                footer={null}
                onCancel={onCancel}
            >
                <Title level={3}>
                    Login to update posts
                </Title>
                <Form
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="Username"
                        name="userName"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}
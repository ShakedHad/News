import React from 'react';
import { Modal, Typography, Form, Input, Button, } from 'antd';

const { Title } = Typography;

const tailLayout = {
    wrapperCol: {
        offset: 10,
        span: 16,
    },
};

export default function AddPostModal(props) {
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
                    Add news category
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
                        label="Post Title"
                        name="title"
                        rules={[
                            {
                                required: true,
                                message: 'Please input the new post\'s title!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Post Content"
                        name="content"
                        rules={[
                            {
                                required: true,
                                message: 'Please input the new post\'s content!',
                            },
                        ]}
                    >
                        <Input.TextArea />
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
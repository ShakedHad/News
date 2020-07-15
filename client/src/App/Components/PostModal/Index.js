import React from 'react';
import { Modal, Typography } from 'antd';

const {Title, Paragraph} = Typography;

export default function PostModal(props) {
    const { post, visible, onCancel } = props;

    return (
        <div>
            <Modal
                visible={visible}
                footer={null}
                onCancel={onCancel}
            >
                <Title>
                    {post.title}
                </Title>
                <Paragraph>
                    {post.content}
                </Paragraph>
            </Modal>
        </div>
    );
}

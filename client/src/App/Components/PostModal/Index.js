import React, { useEffect } from 'react';
import { Modal, Typography } from 'antd';
import { EyeFilled } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

export default function PostModal(props) {
    const { post, visible, onCancel } = props;

    return (
        <div>
            <Modal
                visible={visible}
                footer={null}
                onCancel={onCancel}
            >
                <Title className="post-title">
                    <div>
                        {post.title}
                    </div>
                    <div className="post-views">
                        {post.numberOfViews}
                        {' '}
                        <EyeFilled />
                    </div>
                </Title>
                <Paragraph>
                    {post.content}
                </Paragraph>
            </Modal>
        </div>
    );
}

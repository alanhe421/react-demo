import React from 'react';
import {Button, Col, Modal, Row, Table} from 'antd';
import {getBooks} from '../../api';

class AntdPage extends React.Component {

    columns = [
        {
            title: 'title',
            dataIndex: 'title',
            width: 50
        },
        {
            title: 'price',
            dataIndex: 'price'
        },
        {
            title: 'description',
            dataIndex: 'description'
        }
    ];

    constructor(props, context) {
        super(props, context);
        this.state = {
            books: [],
            visible: false
        };
    }

    async componentDidMount() {
        const res = (await getBooks()).data;
        this.setState({books: res});
    }

    toggleModal = () => {
        this.setState({
            visible: !this.state.visible
        });
    };

    handleCancel = () => {
        console.log('Class: AntdPage, Function: handleCancel, Line 43 (): ');
        this.toggleModal();
    };

    handleOk = () => {
        console.log('Class: AntdPage, Function: handleOk, Line 48 (): ');
        this.toggleModal();
    };

    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col span={5}>
                        <div className={'col-5'}>
                            <Table dataSource={this.state.books} columns={this.columns} pagination={false}
                                   rowKey={'title'}/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Button onClick={this.toggleModal}>show modal</Button>
                    <Modal
                        title="Basic Modal"
                        visible={this.state.visible}
                        onCancel={this.handleCancel}
                        footer={this.renderFooter()}
                    >
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </Modal>
                </Row>
            </React.Fragment>
        );
    }

    renderFooter = () => {
        return <React.Fragment>
            <Button>btn 1</Button>
            <Button>btn 2</Button>
        </React.Fragment>;
    };
}

export default AntdPage;

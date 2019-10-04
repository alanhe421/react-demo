import React from 'react';
import {map} from 'lodash-es';
import {getBooks} from '../../api';
import {appendPrefix} from '../../utils';
import {Button, Table} from 'antd';

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
        const columns = map(this.columns);
        return (
            <React.Fragment>
                {
                    JSON.stringify(this.columns)
                }
                <div>
                    {
                        appendPrefix('bob')
                    }
                </div>
                <div>
                    <Button type="primary">Primary</Button>
                    <Button>Default</Button>
                    <Button type="dashed">Dashed</Button>
                    <Button type="danger">Danger</Button>
                    <Button type="link">Link</Button>
                </div>
                {
                    this.renderFooter()
                }
            </React.Fragment>
        );
    }

    renderFooter = () => {
        return <React.Fragment>
            <Table dataSource={[]} columns={this.columns}/>
        </React.Fragment>;
    };
}

export default AntdPage;

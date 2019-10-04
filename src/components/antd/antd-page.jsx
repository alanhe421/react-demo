import React from 'react';
import {Button} from 'antd';
import _ from 'lodash-es';
import {getBooks} from '../../api';
import {appendPrefix} from '../../utils';

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
        const columns = _.map(this.columns);
        return (
            <React.Fragment>
                {
                    JSON.stringify(columns)
                }
                <div>
                    {
                        appendPrefix('bob')
                    }
                </div>
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

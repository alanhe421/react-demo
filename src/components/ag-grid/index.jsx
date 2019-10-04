import * as React from 'react';
import {AgGridReact} from 'ag-grid-react';
import {appendPrefix} from '../../utils';

export class AgGridPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            columnDefs: [{
                headerName: 'Make', field: 'make', sortable: true, filter: true
            }, {
                headerName: 'Model', field: 'model', sortable: true, filter: true
            }, {
                headerName: 'Price', field: 'price', sortable: true, filter: true
            }],
            rowData: [{
                make: 'Toyota', model: 'Celica', price: 35000
            }, {
                make: 'Ford', model: 'Mondeo', price: 32000
            }, {
                make: 'Porsche', model: 'Boxter', price: 72000
            }]
        };
    }

    render() {
        return <div
            className="ag-theme-balham"
            style={{
                height: '500px',
                width: '600px'
            }}
        >
            <AgGridReact
                columnDefs={this.state.columnDefs}
                rowData={this.state.rowData}>
            </AgGridReact>
            <div>
                {
                    appendPrefix('bob')
                }
            </div>
        </div>;
    }
}

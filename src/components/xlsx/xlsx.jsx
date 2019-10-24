import React, {Component} from 'react';
import {Button} from 'antd';
import * as XLSX from 'xlsx';

class XlsxPage extends Component {

    render() {
        return (
            <div>
                <Button onClick={this.exportExcel}>Export</Button>
            </div>
        );
    }

    exportExcel() {
        var ws_name = 'SheetJS';

        /* make worksheet */
        var ws_data = [
            ['S', 'h', 'e', 'e', 't', 'J', 'S'],
            [1, 2, 3, 4, 5]
        ];
        var ws = XLSX.utils.aoa_to_sheet(ws_data);
        var wb = XLSX.utils.book_new();
        /* Add the worksheet to the workbook */
        XLSX.utils.book_append_sheet(wb, ws, ws_name);
        XLSX.writeFile(wb, 'out.xlsx');
    }
}

export default XlsxPage;

import React, { Component } from 'react';
import { Button } from 'antd';
import * as XLSX from 'xlsx';
import * as qs from 'querystring';

class XlsxPage extends Component {

  render() {
    return (
      <div>
        22222
        <div>
          {qs.stringify({ foo: [1, 2, 3] }, { arrayFormat: 'bracket' })}
        </div>
        <Button onClick={this.exportExcel}>Export</Button>
      </div>
    );
  }

  exportExcel() {
    const wsName = 'SheetJS';
    const wsData = [
      [1, 2, 3, { f: 'A1+B1+C1' }]
    ];
    const ws = XLSX.utils.aoa_to_sheet(wsData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, wsName);
    XLSX.writeFile(wb, 'out.xlsx');
  }
}

export default XlsxPage;

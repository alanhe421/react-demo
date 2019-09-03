import React, {Component} from 'react';

class FormPage extends Component {
    formRef = React.createRef();
    render() {
        return (
            <div>
                <form hidden method={'post'} action={'https://baidu.com'} encType={'application/json'} ref={this.formRef}>
                    <input name={'name'} value={'alan'}/>
                    <input name={'password'} value={'123456'}/>
                </form>
                <button onClick={this.onSubmit}>Submit</button>
            </div>
        );
    }

    onSubmit = () => {
        this.formRef.current.submit();
    };
}

export default FormPage;

import React, { Component } from 'react';

class Control extends Component {
    render() {
        return (
            <ul>
                <li>
                    <a href='/create' onClick={function (e) {
                        e.preventDefault();
                        this.props.onChangeMode('create');
                    }.bind(this)}>create</a>
                </li>
                
                 {/* 키값을 넣어주는 것 과 안넣어주는 차이는 무엇인지?  */}
                
                <li><a href='/update' onClick={function (e) {
                    e.preventDefault();
                    this.props.onChangeMode('update');
                }.bind(this)}>update</a>
                </li>
                <li><button onClick={function (e) {
                    e.preventDefault();
                    this.props.onChangeMode('delete');
                }.bind(this)}>delete</button>
                </li>
            </ul>
        )
    }
}

export default Control;
// defatult 를 쓰기 때문, 중괄호 사용 x
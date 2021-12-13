import React, { Component } from 'react';
class UpdateContent extends Component {
    constructor(props) {  // 규칙, 공식 외워야 되는 내용
        super(props);       // <== 여기까지 공식
        this.state = {
            title: this.props.title,
            desc: this.props.desc
            // key : value ... 구조 
        };
    }
    render() {
        return (
            <article>
                <h2>Update Content</h2>
                <form action='/update_process' method='post'
                    onSubmit={function (e) {
                        e.preventDefault();
                        const title = e.target.title.value;
                        const desc = e.target.desc.value;
                        this.props.onSubmit(title, desc);
                    }.bind(this)}>

                    <p><input type='text' name='title'
                        value={this.state.title} onChange={(e) => {
                            // 나 <- UpdateContent
                            this.setState({ title: e.target.value });
                        }}></input></p>

                    <p><textarea name='desc'
                        value={this.state.desc} onChange={(e) => {
                            // 나 <- UpdateContent
                            this.setState({ desc: e.target.value });
                        }}></textarea></p>

                    <p><input type='submit'></input></p>
                </form>
            </article>
        )
    }
}
export default UpdateContent;
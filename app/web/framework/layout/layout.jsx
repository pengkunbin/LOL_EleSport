import React, { Component } from 'react';

export default class Layout extends Component {
    render() {
        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <meta charSet="utf-8"></meta>
                    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui" />
                    <meta name="keywords" content={this.props.keywords} />
                    <meta name="description" content={this.props.description} />
                    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                    <script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=Z6VLb33wYXOcBcWtpVMjPvbU0DpUdQup"></script>
                </head>
                <body>
                    <div id="app">{this.props.children}</div>
                </body>
            </html>
        );
    }
}

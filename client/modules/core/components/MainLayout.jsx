import React from 'react';
import Helmet from 'react-helmet';

const Layout = ({content = () => null }) => (
    <div className="pomodoro-timer">
        <Helmet
            title=" "
            titleTemplate="Pomodoro - %s"
            meta={[
                {"name": "viewport", "content": "width=device-width, initial-scale=1, minimal-ui"},
                {"name": "author", "content": "LsGoulart"},
                {"name": "description", "content": "Pomodoro Timer"},
                {"property": "og:type", "content": "article"}
            ]}
        />
        <h1>Pomodoro Timer</h1>
        {content()}
    </div>
);

export default Layout;

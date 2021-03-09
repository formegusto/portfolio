import React from 'react';
import { RouteComponentProps } from 'react-router';
import MainIntroComponent from '../components/MainIntroComponent';

function MainIntroPage(props: RouteComponentProps) {
    return (
        <MainIntroComponent routeProps={props}/>
    );
}

export default MainIntroPage;
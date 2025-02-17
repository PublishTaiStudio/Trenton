import './index.css';

import '../template/default/css/theme.css';

// FONTAWESOME
import './fontawesome/css/all.css';

import React from 'react';
import { useRouter } from 'next/router';

import Pages from './index';

const App = () => {
    const router = useRouter();

    var page = router.asPath.replace('/', '');
    if(page === ''){
        page = 'home';
    }
    if(router.asPath === '/'){
        page = 'home';
    }
    if(page != null){
        page = page.split('#');
    }
    if(typeof page == "object"){
        page = page[0];
    }

    // try {
    //     require(`../template/${page}/css/theme.css`);
    // } catch (error) {
    //     require('../template/default/css/theme.css');
    // }
    
    return <Pages page={page}/>
}

export default App

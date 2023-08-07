import React from 'react';
import {Provider} from 'react-redux';
import store from '../store/store'; // Redux mağazayı içe aktarın
import '../styles/globals.css';
import Layout from '../components/Layout'
import type {AppProps} from 'next/app'

export default function App({Component, pageProps}: AppProps) {
    return (
        <Provider store={store}> {/* Provider ile Redux mağazayı sarın */}
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}







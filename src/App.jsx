import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { DataProvider } from './utils/DataContext';
import Footer from './components/Footer';
import DevInfo from './components/DevInfo';

const AppLayout = () => {
    return (
        <DataProvider>
            <div className="app">
                <Header />
                <Outlet className="outlet" />
                <DevInfo />
                <Footer />
            </div>
        </DataProvider>
    );
}

export default AppLayout;

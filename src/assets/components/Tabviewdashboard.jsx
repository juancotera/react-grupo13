
// import React from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import Dashboard from './Dashboard';
import Userlist from './Userlist';

export default function Tabviewdashboard() {
    return (
        <div className="card">
            <TabView >
                <TabPanel header="PELICULAS">
                    <Dashboard />
                </TabPanel>
                <TabPanel header="USUARIOS">
                    <Userlist />
                </TabPanel>
            </TabView>
        </div>
    )
}

import React from 'react';
import Header from '../Header';
import TeamList from '../TeamList';
import css from './index.module.scss';

//BEGIN TEMP
import teamData from '/public/data/saturn_sales.json';
//END TEMP

const App = () => (
    <section className={css.container}>
        <Header companyLogo={teamData.companyLogo} companyName={teamData.companyName} />
        <TeamList />
    </section>
)

export default App;
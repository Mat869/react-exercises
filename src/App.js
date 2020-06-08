import React from 'react';
import './App.scss';
import Blob from './Blob/Blob';
import Hide from './Hide/Hide';
import List from './List/List';
import Counter from './Counter/Counter';
import RandomNumber from './RandomNumber/RandomNumber';
import YayValidator from './YayValidator/YayValidator';
import Tasks from './Tasks/Tasks';
import Users from './Users/Users';
import Weather from './Weather/Weather';
import President from './President/President';
import Remover from './Remover/Remover';
import LastClick from './LastClick/LastClick';
import Timer from './Timer/Timer';
import Filter from './Filter/Filter';
import SmartParagraph from './SmartParagraph/SmartParagraph';

function App() {
  return (
    <div className="App">
        <div className="exercise" data-number="1" data-title="<Blob />">
            <Blob showLogo={true} />
        </div>
        <div className="exercise" data-number="2" data-title="<Hide />">
            <Hide />
        </div>
        <div className="exercise" data-number="3" data-title="<List />">
            <List />
        </div>
        <div className="exercise" data-number="4" data-title="<Counter />">
            <Counter />
        </div>
        <div className="exercise" data-number="5" data-title="<RandomNumber />">
            <RandomNumber />
        </div>
        <div className="exercise" data-number="6" data-title="<YayValidator />">
            <YayValidator />
        </div>
        <div className="exercise" data-number="7" data-title="<Tasks />">
            <Tasks />
        </div>
        <div className="exercise" data-number="8" data-title="<Users />">
            <Users />
        </div>
        <div className="exercise" data-number="9" data-title="<LastClick />">
            <LastClick />
        </div>
        <div className="exercise" data-number="10" data-title="<Weather />">
            <Weather />
        </div>
        <div className="exercise" data-number="11" data-title="<President />">
            <President />
        </div>
        <div className="exercise" data-number="12" data-title="<Remover />">
            <Remover />
        </div>
        <div className="exercise" data-number="13" data-title="<Timer />">
            <Timer />
        </div>
        <div className="exercise" data-number="14" data-title="<Filter />">
            <Filter />
        </div>
        <div className="exercise" data-number="15" data-title="<SmartParagraph />">
            <SmartParagraph />
        </div>
    </div>
  );
}

export default App;

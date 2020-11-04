import React, { useEffect, useState } from 'react';
import { Diseases } from '../../Models/Diseases';
import axios from 'axios';
import Card from '../Card/Card';
import './Dashboard.css';
import api from '../../services/api';

const Dashboard = () => {
  const [diseases, setDiseases] = useState<undefined | Diseases>(undefined);

  useEffect(() => {
    getDiseases();
  }, []);

  const getDiseases = async () => {
    const response = await api.get(
      'https://disease.sh/v3/covid-19/countries/germany'
    );
    setDiseases(response.data);
  };

  const getDate = (timestamp: number): string => {
    return new Date(timestamp).toLocaleString();
  };

  return (
    <div className="content">
      <h1>Covid 19 Statistic - Germany</h1>
      <div className="card-overview">
        <Card
          title="Active Cases"
          text={diseases?.active}
          key={diseases?.active}
        />
        <Card
          title="Recovered"
          text={diseases?.recovered}
          key={diseases?.recovered}
        />
        <Card title="Deaths" text={diseases?.deaths} key={diseases?.deaths} />
        <Card title="Tests" text={diseases?.tests} key={diseases?.tests} />
        <Card
          title="Cases today"
          text={diseases?.todayCases}
          key={diseases?.todayCases}
        />
        <Card
          title="Deaths today"
          text={diseases?.todayDeaths}
          key={diseases?.todayDeaths}
        />
        <Card
          title="Updated"
          text={diseases ? getDate(diseases?.updated) : ''}
          key={diseases?.updated}
        />
      </div>
    </div>
  );
};

export default Dashboard;

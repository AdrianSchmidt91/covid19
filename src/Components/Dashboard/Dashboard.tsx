import React, { useEffect, useState } from 'react';
import { Diseases } from '../../Models/Diseases';
import Card from '../Card/Card';
import './Dashboard.css';
import api from '../../services/api';

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [diseases, setDiseases] = useState<undefined | Diseases>(undefined);
  const [country, setCountry] = useState<string | undefined>('Germany');

  useEffect(() => {
    getDiseasesForCountry('Germany');
  }, []);

  const getDate = (timestamp: number): string => {
    return new Date(timestamp).toLocaleString();
  };

  const getDiseasesForCountry = async (country: string): Promise<void> => {
    setIsLoading(true);
    setCountry(country);
    setDiseases(undefined);
    country.toLowerCase();
    const response = await api.get(
      `https://disease.sh/v3/covid-19/countries/${country}`
    );
    setDiseases(response.data);
    setIsLoading(false);
  };

  return (
    <div className="content">
      <h1>Covid 19 Statistic - {country}</h1>
      <div className="menu">
        <label>Select a Country: </label>
        <br />
        <select
          id="countries"
          name="country"
          onChange={(e) => getDiseasesForCountry(e.target.value)}
        >
          <option value="Germany">Germany</option>
          <option value="Italia">Italia</option>
          <option value="France">France</option>
          <option value="Russia">Russia</option>
          <option value="Poland">Poland</option>
        </select>
      </div>
      <div className="card-overview">
        {isLoading ? (
          '...Loading'
        ) : (
          <>
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
            <Card
              title="Deaths"
              text={diseases?.deaths}
              key={diseases?.deaths}
            />
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
            />{' '}
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

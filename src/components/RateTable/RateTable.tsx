import { useContext } from 'react';
import { RateProvider } from '../../store/RateContext';
import { RateRow } from '../RateRow';

export const RateTable = () => {
  const { rateData } = useContext(RateProvider);

  return (
    <table>
      <thead>
        <tr>
          <th>Currency Name</th>
          <th>Code Name</th>
          <th>Currency Code</th>
          <th>Current Rate</th>
          <th>Date</th>
          <th>Coefficient</th>
        </tr>
      </thead>
      <tbody>
        {rateData.map(data => (
          <RateRow key={data.cc} {...data} />
        ))}
      </tbody>
    </table>
  );
};

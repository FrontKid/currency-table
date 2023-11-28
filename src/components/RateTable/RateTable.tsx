import { FC } from 'react';
import { RateRow } from '../RateRow';
import { IRateData } from '../../types/IRateData';

type TRateTable = {
  data: IRateData[];
};

export const RateTable: FC<TRateTable> = props => {
  const { data } = props;

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
        {data.map(dataEntity => (
          <RateRow key={dataEntity.cc} {...dataEntity} />
        ))}
      </tbody>
    </table>
  );
};

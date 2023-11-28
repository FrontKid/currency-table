import { FC } from 'react';

type TRateRowProps = {
  r030: number;
  txt: string;
  rate: number;
  cc: string;
  exchangedate: string;
  coef: number;
};

export const RateRow: FC<TRateRowProps> = props => {
  const { r030, txt, rate, cc, exchangedate, coef } = props;

  return (
    <tr>
      <td>{txt}</td>
      <td>{r030}</td>
      <td>{cc}</td>
      <td>{rate}</td>
      <td>{exchangedate}</td>
      <td>{coef}</td>
    </tr>
  );
};

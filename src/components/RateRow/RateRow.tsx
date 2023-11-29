import { FC } from 'react';
import { Link } from 'react-router-dom';

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
      <td>
        <Link to={`/${cc}`}>
        {txt}
        </Link>
      </td>
      <td>
        <Link to={`/${cc}`}>
        {r030}
        </Link>
      </td>
      <td>
        <Link to={`/${cc}`}>
        {cc}
        </Link>
      </td>
      <td>
        <Link to={`/${cc}`}>
        {rate}
        </Link>
      </td>
      <td>
        <Link to={`/${cc}`}>
        {exchangedate}
        </Link>
      </td>
      <td>
        <Link to={`/${cc}`}>
        {coef}
        </Link>
      </td>
    </tr>
  );
};

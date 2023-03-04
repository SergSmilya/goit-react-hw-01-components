import PropTypes from "prop-types";
import { Transaction } from "../Transaction/Transaction";
import { Table, Head, TR, Tbody } from "./TransactionHistory.styled";

export function TransactionHistory({ transactions }) {
  return (
    <Table>
      <Head>
        <TR>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TR>
      </Head>

      <Tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <Transaction
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </Tbody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

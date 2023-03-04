import PropTypes from "prop-types";

export function Transaction({ type, amount, currency }) {
  return (
    <tr>
      <td>{type[0].toUpperCase() + type.slice(1)}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

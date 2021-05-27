import "./Table.css";
import numeral from "numeral";

function Table({ countries }) {
  return (
    <div className="table">
      <table>
        {countries.map(({ country, cases }) => (
          <tr>
            <td>{country}</td>
            <td><strong>{numeral(cases).format("000,000")}</strong></td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Table;
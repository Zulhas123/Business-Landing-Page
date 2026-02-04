import React from "react";
import "./SpecsTable.css";

export default function SpecsTable({ specs = {} }) {
  const entries = Object.entries(specs);

  if (!entries.length) {
    return null;
  }

  return (
    <div className="specs-table">
      <h3>Specifications</h3>

      <table>
        <tbody>
          {entries.map(([key, value]) => (
            <tr key={key}>
              <th>{key}</th>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

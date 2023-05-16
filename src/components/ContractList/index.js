import { useState } from "react";
import { Section } from "components";
import { contractData } from "__mocks__/contract";
import { tableTitles } from "__mocks__/tableTitles";
import { TableFilter } from "components";

const ContractList = () => {
  const [selectedContractYear, setSelectedContractYear] = useState(0);

  return (
    <Section>
      <TableFilter setSelectedContractYear={setSelectedContractYear} />
      <table className="table">
        <thead>
          <tr>
            {tableTitles.map((item, index) => (
              <th key={index}>{item.title} </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Number(selectedContractYear) === 0
            ? contractData.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.contract}</td>
                  <td>{item.offer}</td>
                  <td>{item.data}</td>
                </tr>
              ))
            : contractData
                .filter(
                  (contract) =>
                    contract.contract === Number(selectedContractYear)
                )
                .map((dataItem, idx) => (
                  <tr key={idx}>
                    <td>{dataItem.id}</td>
                    <td>{dataItem.contract}</td>
                    <td>{dataItem.offer}</td>
                    <td>{dataItem.data}</td>
                  </tr>
                ))}
        </tbody>
      </table>
    </Section>
  );
};

export default ContractList;

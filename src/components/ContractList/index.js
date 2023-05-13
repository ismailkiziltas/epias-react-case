import { Section } from "components";
import { contractData } from "__mocks__/contract";

const ContractList = () => {
  return (
    <Section>
      <div className="table-filter">
        <select>
          <option value={0}>Kontrat Seçiniz</option>
          <option value={2019}>2019</option>
          <option value={2018}>2018</option>
        </select>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Kontrat</th>
            <th>Teklif</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {contractData.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.contract}</td>
              <td>{item.offer}</td>
              <td>{item.data}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Section>
  );
};

export default ContractList;

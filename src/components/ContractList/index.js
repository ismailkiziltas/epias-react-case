import { Section } from "components";
import { contractData } from "__mocks__/contract";
import { TableFilter } from "components";
import { useState } from "react";

const ContractList = () => {
  const [selectedTitles, setSelectedTitles] = useState([]);

  const tableTitles = [
    {
      id: 1,
      title: "Id",
    },
    {
      id: 2,
      title: "Kontrat",
    },
    {
      id: 3,
      title: "Teklif",
    },
    {
      id: 4,
      title: "Data",
    },
  ];

  const handleTableCol = (item) => {
    const hasTitle = selectedTitles.some((title) => title.id === item.id);

    if (!hasTitle) {
      setSelectedTitles((prevTitle) => [...prevTitle, item]);
      return;
    }

    setSelectedTitles(selectedTitles.filter((title) => title.id !== item.id));
  };

  return (
    <Section>
      <TableFilter titles={tableTitles} onChange={handleTableCol} />
      <table className="table">
        <thead>
          <tr>
            {selectedTitles.map((item, index) => (
              <th key={index}>{item.title} </th>
            ))}
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

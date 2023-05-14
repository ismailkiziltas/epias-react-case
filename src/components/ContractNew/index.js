import { Section, Button, Input } from "components";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addContract } from "store/contract";
import styles from "./ContractNew.module.scss";

const ContractNew = () => {
  const [showForm, setShowForm] = useState(false);
  const contractList = useSelector((state) => state.addContract.contractList);
  const dispatch = useDispatch();

  const formHandle = (e) => {
    const formData = Object.fromEntries(new FormData(e.target).entries());
    const isFormValid = Object.values(formData).every((value) => value !== "");
    isFormValid && dispatch(addContract(formData));
    e.preventDefault();
  };

  return (
    <Section>
      <table className="table">
        <tbody>
          {contractList.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.contract}</td>
              <td>{item.offer}</td>
              <td>{item.data}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.newContract}>
        {showForm && (
          <form className={styles.newContractForm} onSubmit={formHandle}>
            <Input type="text" name="id" placeholder="No giriniz" />
            <Input type="text" name="contract" placeholder="Kontrat giriniz" />
            <Input type="text" name="offer" placeholder="Teklif giriniz" />
            <Input type="text" name="data" placeholder="Data giriniz" />
            <Button type="submit">Kaydet</Button>
          </form>
        )}
        <Button type="button" onClick={() => setShowForm(!showForm)}>
          {showForm ? "Vazgeç" : "Yeni Ekle"}
        </Button>
      </div>
    </Section>
  );
};
export default ContractNew;

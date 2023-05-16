import { useState } from "react";
import { useDispatch } from "react-redux";
import { changedLayout } from "store/savedLayout";
import Split from "react-split-grid";
import Header from "components/Header";
import Footer from "components/Footer";
import Content from "components/Content";
import Section from "components/Section";
import ContractList from "components/ContractList";
import ContractNew from "components/ContractNew";
import LayoutConfigInfo from "components/LayoutConfigInfo";

const App = () => {
  const [rowSizes, setRowSizes] = useState(
    localStorage.getItem("rowSizes") || "1fr 10px 1fr"
  );
  const [colSizes, setColSizes] = useState(
    localStorage.getItem("colSizes") || "1fr 10px 1fr"
  );

  const dispatch = useDispatch();

  const handleDrag = (direction, track, style) => {
    if (direction === "column") {
      setColSizes(style);
      localStorage.setItem("colSizes", style);
    } else {
      setRowSizes(style);
      localStorage.setItem("rowSizes", style);
    }
  };

  const watchChange = () => {
    dispatch(changedLayout(true));
    setTimeout(() => {
      dispatch(changedLayout(false));
    }, 1000);
  };

  return (
    <div>
      <Header />
      <Content>
        <Split
          gridTemplateColumns={colSizes}
          gridTemplateRows={rowSizes}
          onDrag={handleDrag}
          onDragEnd={watchChange}
          render={({ getGridProps, getGutterProps }) => (
            <div className="split" {...getGridProps()}>
              <ContractList />
              <LayoutConfigInfo rowSizes={rowSizes} colSizes={colSizes} />
              <div
                className="split-gutter-col gutter-col-1"
                {...getGutterProps("column", 1)}
              />
              <ContractNew />
              <div
                className="split-gutter-row gutter-row-1"
                {...getGutterProps("row", 1)}
              />
              <Section>Section 4</Section>
            </div>
          )}
        />
      </Content>
      <Footer />
    </div>
  );
};
export default App;

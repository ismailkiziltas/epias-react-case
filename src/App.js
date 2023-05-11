import Split from 'react-split-grid'
import Header from "components/Header";
import Footer from "components/Footer";
import Content from "components/Content";
import Section from "components/Section";
import ContractList from "components/ContractList"
import ContractNew from 'components/ContractNew';
import LayoutConfigInfo from 'components/LayoutConfigInfo';

const App = () => {
  return (
    <div>
      <Header />
      <Content>
        <Split
          snapOffset={50}
          render={({
            getGridProps,
            getGutterProps,
          }) => (
            <div className="split" {...getGridProps()}>
              <ContractList />
              <LayoutConfigInfo />
              <div className="split-gutter-col gutter-col-1" {...getGutterProps('column', 1)} />
              <ContractNew />
              <div className="split-gutter-row gutter-row-1" {...getGutterProps('row', 1)} />
              <Section>
                Section 4
              </Section>
            </div>
          )
          }
        />
      </Content>
      <Footer />
    </div >
  );
}
export default App;

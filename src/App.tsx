import './App.css';
import { Header, Columns, BreadCrumbs } from './components';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <BreadCrumbs />
      <Columns />
    </>
  );
};

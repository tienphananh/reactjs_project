import './App.css';
import { Route, Routes } from 'react-router-dom'; 
import { routes } from './router/router'

// const idb = window.indexedDB

function App() {
  return (
    <>
      <Routes>
        {routes.map((item, index) => {
        const Page = item.component;
        const Layout =  item.layout;
        return <Route key={index} path={item.path} element={<Layout><Page/></Layout>}/>
        })}
      </Routes>
      
    </>
    
  );
}

export default App;
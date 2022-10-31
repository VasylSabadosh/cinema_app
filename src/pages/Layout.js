import {Outlet} from 'react-router-dom';
import Header from "../components/Header/Header";
import SubHeader from '../components/SubHeader/SubHeader';

import "./Layout.scss"

const Layout = () => {
  return (
    <section className="section">

      <div className='content'>

        <Header/>

        <SubHeader />

        <div className="layout">
          <Outlet />
        </div>


      </div>



    </section>
  )
}

export default Layout
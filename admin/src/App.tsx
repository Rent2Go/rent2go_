import React, { useEffect } from 'react';
import './App.css';
import { Layout } from './components';
import { useDispatch, useSelector } from 'react-redux';
import SettingsService from './services/SettingsService';
import { setPageSettings } from './store/slices/settingsSlice';
import OverlayLoaderTest from './components/OverlayLoader/OverlayLoaderTest';
import { Helmet } from 'react-helmet';

function App() {

  const settings = useSelector((state: any) => state.settings.setting);
  const dispatch = useDispatch();

  const handleSetPageSettings = async() => {
  const response =     await SettingsService.getById(1)
  .then((res)=> dispatch(setPageSettings(res.data.data)))
  .catch((err) => console.log(err.response.data.message))
   
  };

  useEffect(() => {
    handleSetPageSettings();
  }, []);


  if (!settings) return <OverlayLoaderTest />;
  return (

    
    <React.Fragment>
       <Helmet>
        <title>{settings.title}</title>
        <link rel="icon" href={settings.tabLogo} />
      </Helmet>
      <Layout />
    </React.Fragment>
  );
}

export default App;

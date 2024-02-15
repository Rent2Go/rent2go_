import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import { useDispatch, useSelector } from "react-redux";
import { setPageSettings } from "./store/slices/settingsSlice";
<<<<<<< HEAD
=======
import SettingsService from "./services/SettingsService";
import {Helmet} from 'react-helmet'
import PageNotFound from "./pages/NotFoundPage/PageNotFound";
import OverlayLoaderLoad from "./components/OverlayLoader/OverlayLoaderLoad";
import { toast } from "react-toastify";
function App() {
>>>>>>> sehmus

import Router from "./routes/Router";
import PrivateRoute from "./utils/PrivateRoute";

import OverlayLoader from "./components/OverlayLoader/OverlayLoader";
import { ScrollToTop } from "./components";

import SettingsService from "./services/SettingsService";

import "./App.css";

function App() {
  const settings = useSelector((state: any) => state.settings.setting);
  const dispatch = useDispatch();
<<<<<<< HEAD
  const handleSetPageSettings = async () => {
    const response = await SettingsService.getById(1);
    dispatch(setPageSettings(response.data.data));
=======
  const handleSetPageSettings = async() => {
  const response =     await SettingsService.getById(2)
  .then((res)=> dispatch(setPageSettings(res.data.data)))
  .catch((err) => toast.warn(err.response.data.message))
   
>>>>>>> sehmus
  };

  useEffect(() => {
<<<<<<< HEAD
    handleSetPageSettings();
  }, []);
=======
    handleSetPageSettings() 
   
  }, [])
  
>>>>>>> sehmus

  if (!settings) return <div>Şeyhmus will be modify here .. :)</div>;

<<<<<<< HEAD
  return (
    <>
      <Helmet>
        <title>{settings.title}</title>
        <link rel="icon" href={settings.logo} />
      </Helmet>
=======
  if(!settings) return <OverlayLoaderLoad/>
  return (
    <>
     <Helmet>
      <title>{settings.title}</title>
      <link rel="icon" href={ settings.tabLogo}  />
    </Helmet> 
>>>>>>> sehmus
      <main>
        <ScrollToTop />
        <OverlayLoader />
        <Router />
      </main>
    </>
  );
}

export default App;

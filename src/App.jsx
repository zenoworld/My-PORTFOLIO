import { useState } from 'react'

import './App.css'
import LocomotiveScroll from  'locomotive-scroll'
import Layout from './components/Layout/Layout.jsx';


function App() {

  const locomotiveScroll = new LocomotiveScroll();
  return <Layout/>;
}

export default App

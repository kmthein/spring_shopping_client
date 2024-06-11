import React from 'react'
import banner from '../assets/banner.png';
import { Button } from '@mui/material';

const Home = () => {
  return (
    <div className='main-visual'>
        <img src={banner} style={{width: "100%", position: "absolute", zIndex: 0}} alt="banner" />
        <div className='l-wrap-inner main-visual-info' style={{paddingTop: "150px"}}>
        <h2 style={{fontSize: "48px", fontWeight: 800, lineHeight: 1.3, marginBottom: "20px"}}>Get <span style={{color: "#FF0000"}}>20%</span> Discount <br/>Member Only</h2>
        <p style={{width: "477px", lineHeight: 1.8, fontSize: "17px", marginBottom: "20px"}}>Step into a world of endless possibilities as you explore our curated collection of fashion-forward</p>
        <Button variant="contained" sx={{ bgcolor: "#068179"}}>Outlined</Button>
        </div>
  </div>
  )
}

export default Home
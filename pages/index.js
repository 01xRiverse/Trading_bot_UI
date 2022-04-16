import Head from 'next/head'
import Image from 'next/image'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import styles from '../styles/Home.module.css'
import Like from '../Components/Like/Like';


export default function Home() {
  return (
    
    <div>
      <Like></Like>
      <Navbar></Navbar>
      <Footer></Footer>
    </div>
  )
}

import React from 'react';
import styles from './home.module.css';
import PlasmaInfo from '../PlasmaInfo/plasmaInfo.jsx';
import Footer from '../Footer/footer';

const Index = () => {
    return (


      <div className={styles.container}>

        <p className={styles.para}>
          <div className={styles.quoteDiv}>
            <span className={styles.quote}>DONATE BLOOD SAVE LIVES❤️</span>
          </div>
        </p>
        <PlasmaInfo />
        <Footer/>
      </div>
    
    )
}

export default Index;

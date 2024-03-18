import React, {useEffect} from 'react';
import styles from './home.module.css';
import PlasmaInfo from '../PlasmaInfo/plasmaInfo.jsx';
import Footer from '../Footer/footer';
const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.para}>
        <div className={styles.quoteDiv}>
          <span className={styles.quote}> ❤️ DONATE BLOOD SAVE LIVES ❤️ </span>
        </div>
      </div>
      <PlasmaInfo />
      <Footer />
    </div>
  )
}

export default Index;

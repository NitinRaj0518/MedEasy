import React from 'react';
import styles from './plasma.module.css';
import plasma from './images/plasma.jpg';
import donation from './images/donation.png';
import validate from './images/youcan.png';
import notable from './images/youcannot.png';
import remember from './images/remember.jpg';

export default function PlasmaInfo() {
    return (
      <div className={styles.container}>

            <div className={styles.flipcard}>
            <div className={styles.flipcardinner}>
                <div className={styles.flipcardfront}>
                    <p className={styles.heading}>What is Blood</p>
                <img src={plasma} className={styles.image} alt="Avatar"/>
                </div>
                <div className={styles.flipcardback}>
                <p className={styles.content}>Blood is a vital bodily fluid that circulates through the arteries and veins, delivering oxygen and nutrients to cells and removing waste products. It consists of red blood cells, white blood cells, platelets, and plasma, which contains water, proteins, electrolytes, hormones, and waste products.</p>
                </div>
            </div>
            </div>
            <br/><br/><br/><br/>
            <div className={styles.flipcard}>
            <div className={styles.flipcardinner}>
                <div className={styles.flipcardfront}>
                    <p className={styles.heading}>Importance of Donation</p>
                <img src={donation} className={styles.image} alt="Avatar"/>
                </div> 
                <div className={styles.flipcardback}>
                    
                <p className={styles.content}>
                "<span className={styles.quote}> DONATE BLOOD SAVE LIVES❤️ </span>"<br></br>
                Donating blood can save lives. Your antibodies can help someone fight the infection and emerge victoriously. Just like during any 
                regular blood donation session, blood will be drawn from your arm.</p>
                </div>
            </div>
            </div>

            <br/><br/><br/><br/>
            <div className={styles.flipcard}>
            <div className={styles.flipcardinner}>
                <div className={styles.flipcardfront}>
                    <p className={styles.heading}>You CAN donate blood if</p>
                <img src={validate} className={styles.image} alt="Avatar"/>
                </div> 
                <div className={styles.flipcardback}>
                    
                <p>
                <ul className={styles.ulcontent}>
                    <li className={styles.licontent}>✅ Donors must have adequate hemoglobin levels to ensure they can safely donate blood without risking anemia.</li>
                    <li className={styles.licontent}>✅ You are atleastt 17 or 18 years old.</li>
                    <li className={styles.licontent}>✅ You are free of symptoms for 14 days.</li>
                    <li className={styles.licontent}>✅ Some travel destinations may have restrictions on blood donation due to the risk of exposure to diseases like malaria or Zika virus.</li>
                    <li className={styles.licontent}>✅ Donors must be in good health at the time of donation.</li>
                </ul>
                </p>
                </div>
            </div>
            </div>

            <br/><br/><br/><br/>
            <div className={styles.flipcard}>
            <div className={styles.flipcardinner}>
                <div className={styles.flipcardfront}>
                    <p className={styles.heading}>You CANNOT donate blood if</p>
                <img src={notable} className={styles.image} alt="Avatar"/>
                </div> 
                <div className={styles.flipcardback}>
                    
                <p>
                <ul>
                    <li className={styles.licontent}>🚫 Your weight is less than 50 kg..</li>
                    <li className={styles.licontent}>🚫 Pregnant individuals are usually ineligible to donate blood.</li>
                    <li className={styles.licontent}>🚫 You are diabetic on insulin.</li>
                    <li className={styles.licontent}>🚫 Your Blood Pressure is more than 140 and diastolic less than 60 or more than 90.</li>
                    <li className={styles.licontent}>🚫 Some medications may affect a person's eligibility to donate blood.</li>
                    <li className={styles.licontent}>🚫 You have chronic kidney/heart/lung or liver disease.</li>
                </ul>
                </p>
                </div>
            </div>
            </div>

            <br/><br/><br/><br/>
            <div className={styles.flipcard}>
            <div className={styles.flipcardinner}>
                <div className={styles.flipcardfront}>
                    <p className={styles.heading}>Things to remember before you donate blood</p>
                <img src={remember} className={styles.image} alt="Avatar"/>
                </div> 
                <div className={styles.flipcardback}>
                    
                <p>
                <ul>
                    <li className={styles.licontent}>📌 Do not drink alcohol for at least 24 hours before you donate blood. Alcohol remains in your system for about a day
                        and so could end up in the blood that is collected from you. Besides alcohol acts as a blood thinner, so there
                        could be a lot of bleeding when you are hooked to the blood extraction device.
                    </li>
                    <li className={styles.licontent}>📌 Do not smoke or consume heavy meals/greasy foods before blood donation.</li>
                    <li className={styles.licontent}>📌 Do not pop an aspirin or any kind of pain-relieving medication for 48 hours before the donation. These medicines 
                     affect your blood’s platelets.
                     </li>
                </ul>
                </p>
                </div>
            </div>
            </div>
      </div>
    );
  }
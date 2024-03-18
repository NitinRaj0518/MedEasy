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
                        <p className={styles.heading}>What is Blood?</p>
                        <img src={plasma} className={styles.image} alt="Blood Plasma" />
                    </div>
                    <div className={styles.flipcardback}>
                        <p className={styles.content}>Blood is a vital bodily fluid that circulates through the arteries and veins, delivering oxygen and nutrients to cells and removing waste products. It consists of red blood cells, white blood cells, platelets, and plasma, which contains water, proteins, electrolytes, hormones, and waste products.</p>
                    </div>
                </div>
            </div>

            <div className={styles.flipcard}>
                <div className={styles.flipcardinner}>
                    <div className={styles.flipcardfront}>
                        <p className={styles.heading}>Why Donate Blood?</p>
                        <img src={donation} className={styles.image} alt="Blood Donation" />
                    </div>
                    <div className={styles.flipcardback}>
                        <p className={styles.content}>"<span className={styles.quote}>DONATE BLOOD, SAVE LIVES ❤️</span>"<br />Donating blood can save lives. Your antibodies can help someone fight infection and emerge victoriously. During a blood donation session, blood will be drawn from your arm.</p>
                    </div>
                </div>
            </div>

            <div className={styles.flipcard}>
                <div className={styles.flipcardinner}>
                    <div className={styles.flipcardfront}>
                        <p className={styles.heading}>Eligibility to Donate</p>
                        <img src={validate} className={styles.image} alt="Eligibility" />
                    </div>
                    <div className={styles.flipcardback}>
                        <ul className={styles.ulcontent}>
                            <li className={styles.licontent}>✅ Adequate hemoglobin levels</li>
                            <li className={styles.licontent}>✅ Age 17 or older</li>
                            <li className={styles.licontent}>✅ Symptom-free for 14 days</li>
                            <li className={styles.licontent}>✅ Good health</li>
                            <li className={styles.licontent}>✅ No recent travel to restricted areas</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={styles.flipcard}>
                <div className={styles.flipcardinner}>
                    <div className={styles.flipcardfront}>
                        <p className={styles.heading}>Ineligibility to Donate</p>
                        <img src={notable} className={styles.image} alt="Ineligibility" />
                    </div>
                    <div className={styles.flipcardback}>
                        <ul>
                            <li className={styles.licontent}>🚫 Weight less than 50 kg</li>
                            <li className={styles.licontent}>🚫 Pregnancy</li>
                            <li className={styles.licontent}>🚫 Diabetic on insulin</li>
                            <li className={styles.licontent}>🚫 Abnormal blood pressure</li>
                            <li className={styles.licontent}>🚫 Chronic diseases</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={styles.flipcard}>
                <div className={styles.flipcardinner}>
                    <div className={styles.flipcardfront}>
                        <p className={styles.heading}>Before Donating</p>
                        <img src={remember} className={styles.image} alt="Preparation" />
                    </div>
                    <div className={styles.flipcardback}>
                        <ul>
                            <li className={styles.licontent}>📌 Avoid alcohol for 24 hours</li>
                            <li className={styles.licontent}>📌 Do not smoke or consume heavy meals/greasy foods</li>
                            <li className={styles.licontent}>📌 Avoid aspirin or pain-relieving medications for 48 hours</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

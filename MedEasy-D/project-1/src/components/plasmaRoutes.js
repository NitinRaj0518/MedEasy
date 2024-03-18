import { Routes, Route, Outlet } from 'react-router-dom';


import DonorForm from './Form/DonorForm/form.jsx';
import RequestForm from './Form/RequestForm/form.jsx';
import DonorList from './List/Donor/donor.jsx';
import RequestList from './List/Requester/requester.jsx';
import Logins from './List/Donor/login.jsx';
import UpdateDonor from './List/Donor/update.jsx';
import LoginR from './List/Requester/login.jsx';
import UpdateR from './List/Requester/update.jsx';
import NavvBar from './navbar/NavBar.jsx';

function PlasmaRoutes() {
    return (
        <div className='plasma' style={{ width: "100%" }}>
            <NavvBar />
            <Routes>
                <Route path="/" element={<Outlet />} />
                <Route path="/donateplasma" element={<DonorForm />} />
                <Route path="/requestplasma" element={<RequestForm />} />
                <Route path="/getdonors" element={<DonorList />} />
                <Route path="/getrequesters" element={<RequestList />} />
                <Route path="/login" element={<Logins />} />
                <Route path="/loginanddelete" element={<Logins />} />
                <Route path="/updatedonor" element={<UpdateDonor />} />
                <Route path="/requesterlogin" element={<LoginR />} />
                <Route path="/requesterloginanddelete" element={<LoginR />} />
                <Route path="/updaterequester" element={<UpdateR />} />
            </Routes>
        </div>
    );
}

export default PlasmaRoutes;
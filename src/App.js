import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contact, setContact] = useState([]);
  const [appointment, setAppointment] = useState([]);

  /*
  Implement functions to add data to
  contacts and appointments
  */
  function createNewContact(name, phoneNumber, email) {
    setContact = {
      name: name,
      phoneNumber: phoneNumber,
      email: email
    }
  }

  function createNewAppointment(name, contact, date, time) {
    setAppointment = {
      name: name,
      contact: contact,
      date: date,
      time: time
    }
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contact={contact} createNewContact={createNewContact} /> /* Add props to ContactsPage */ }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage appointment={appointment} createNewAppointment={createNewAppointment} /> /* Add props to AppointmentsPage */ }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;

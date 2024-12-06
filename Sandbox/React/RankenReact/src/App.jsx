import { useState } from 'react'
import './App.css'
import {NavPrimary, NavSecondary, StudentEvents} from './header'
import {UrgentMessages,
        Welcome,
        Support,
        StudentHandbook,
        TitleIX,
        CampusResources,
        Calendar,
        AroundTheCollege,
        RecentNotifications,
        StudentOrientation
       } from './Cards'
function App() {

  return (
    <>
    {/*Handles The appearance of the Index page (home page)*/}
    <NavPrimary />
    <NavSecondary />
    <StudentEvents />
    <UrgentMessages />
    <Welcome />
    <Support />
    <StudentHandbook />
    <TitleIX />
    <CampusResources />
    <Calendar />
    <AroundTheCollege />
    <RecentNotifications />
    <StudentOrientation />
    </>
  )
}

export default App

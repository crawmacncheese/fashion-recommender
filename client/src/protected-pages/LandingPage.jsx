import React from 'react';

// components to import
import Navbar from '../components/Navbar.jsx'
import GenerateForm from '../components/GenerateForm.jsx'

export default function LandingPage() {

    return(
        <div className="h-screen w-screen bg-gradient-to-r from-[#333333] to-[#FBF6F0]">
            <Navbar />
            <GenerateForm />
        </div>
    );
}
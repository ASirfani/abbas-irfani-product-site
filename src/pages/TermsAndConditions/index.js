import React from 'react';
import './index.css';

const TermsAndConditions = () => {
    return (
        <div className='terms-and-conditions'>
            <h1 className='terms titlePage'>Terms & Conditions</h1>
            <p className='txt'>
                Welcome to DEU.com! These terms and conditions outline the rules and
                regulations for the use of our website. By accessing this website, we assume
                you accept these terms and conditions in full. Do not continue to use DEU.com
                if you do not accept all of the terms and conditions stated on this page.
            </p>
            <p className='txt' style={{ marginTop: '10px' }}>
                The following terminology applies to these Terms and Conditions, Privacy
                Statement, and Disclaimer Notice and any or all Agreements: "Client", "You",
                and "Your" refers to you, the person accessing this website and accepting the
                Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and
                "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the
                Client and ourselves, or either the Client or ourselves.
            </p>
            <h2 className='terms subTitle'>Use License</h2>
            <p className='txt'>
                Permission is granted to temporarily download one copy of the materials
                (information or software) on DEU.com for personal, non-commercial
                transitory viewing only. This is the grant of a license, not a transfer of
                title, and under this license, you may not:
            </p>
            <ul className='txt'>
                <li>modify or copy the materials;</li>
                <li>use the materials for any commercial purpose, or for any public display
                    (commercial or non-commercial);</li>
                <li>attempt to decompile or reverse engineer any software contained on
                    DEU.com;</li>
                <li>remove any copyright or other proprietary notations from the materials;
                    or</li>
                <li>transfer the materials to another person or "mirror" the materials on
                    any other server.</li>
            </ul>
            <p className='txt'>
                This license shall automatically terminate if you violate any of these
                restrictions and may be terminated by DEU.com at any time. Upon terminating
                your viewing of these materials or upon the termination of this license, you
                must destroy any downloaded materials in your possession whether in
                electronic or printed format.
            </p>
            {/* More terms and conditions content goes here */}
            {/* Remember to close the div and export the component */}
        </div>
    );
};

export default TermsAndConditions;

/* File: NavBar.js
 * Author(s): Ben Ruland
 *
 */


import { Link } from "react-router-dom";  // import Link tags from React Router



import "./navbar.css";
import "../../App.css";  // import App-wide style sheet

function NavBar() {


    return (
        // create nav element to contain navbar elements
        <nav className="navbar d-flex source-sans justify-content-start sticky-top navbar-light bg-light px-3">
            {/* logo/name element div */}
            <div className="w-25">
                <div className="d-flex w-25 ps-3">
                     
                    <p className="text-start text-grey ps-3 mt-2 fs-3">Winnow</p>
                </div>
            </div>
            {/* navigation links div */}
            <div className="d-flex w-50 fs-3 pb-2 justify-content-center">
                <Link to="/" className="text-decoration-none px-4">Link</Link>
                <Link to="/" className="text-decoration-none px-4">Link</Link>
                <Link to="/" className="text-decoration-none px-4">Link</Link>
                
            </div>
            {/* dropdown toggle button div */}
             <div className="w-25 d-flex justify-content-end">
                 <p> Something</p>
            
            </div>
        </nav>
    );
}

export default NavBar;

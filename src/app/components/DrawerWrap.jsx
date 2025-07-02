import { Link } from 'react-scroll'
import { useState } from 'react'

const DrawerWrap = ({ children }) => {

    const [isChecked, setisChecked] = useState(false);
    const handleIsCheckedChange = () => {
        setisChecked(isChecked => !isChecked)
    }

    return (
        <div>
            <div className="drawer drawer-start">
                <input id="my-drawer-4" type="checkbox" checked={isChecked} onChange={handleIsCheckedChange} className="drawer-toggle" />
                <div className="drawer-content">
                    {children}
                </div>
                <div className="drawer-side md:hidden z-50">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>

                    <ul className="menu menu-md bg-base-200 text-base-content min-h-full w-80 p-4 relative">
                        <li><Link onClick={handleIsCheckedChange} to='section0' smooth={true} className='rounded text-lg py-4' offset={-100} >Home</Link></li>
                        <li><Link onClick={handleIsCheckedChange} to='section1' smooth={true} className='rounded text-lg py-4'>About Us</Link></li>
                        <li><Link onClick={handleIsCheckedChange} to='section2' smooth={true} className='rounded text-lg py-4' offset={-20} >Services</Link></li>
                        <li><Link onClick={handleIsCheckedChange} to='section3' smooth={true} className='rounded text-lg py-4'>Projects</Link></li>
                        {/* <li><Link onClick={handleIsCheckedChange} to='section4' smooth={true} className='rounded text-lg py-4'>Pricing</Link></li> */}
                        <li><Link onClick={handleIsCheckedChange} to='section5' smooth={true} className='rounded text-lg py-4' offset={-10} >Contact Us</Link></li>
                    </ul>

                    {/* <div className='self-end mx-4 my-1'>
                        <span className="font-semibold text-primary dark:text-secondary"> Fortune</span>
                        <span className="font-semibold text-accent">Tech</span>
                        <span className="font-semibold text-primary dark:text-secondary">Solutions</span>.
                    </div> */}
                </div>


            </div>
        </div>
    );
}

export default DrawerWrap;

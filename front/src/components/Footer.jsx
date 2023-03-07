const Footer = () => {
    return (
        <footer className="p-4 bg-neutral-50 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6">
            <span className="text-sm text-gray-700 sm:text-center">
                © 2023 
                <a href="#" className="hover:underline">ThreeBody™</a>
                . All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-700 sm:mt-0">
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Condition de Vente en Ligne</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer

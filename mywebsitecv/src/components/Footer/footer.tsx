import {
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer id="footer" className="w-full border-b md:border-0 pt-6 pb-6">
            <div className="flex justify-center space-x-16">
                <FaGithub size={24} />
                <FaLinkedin size={24} />
            </div>
            <p className="flex justify-center pt-2">Made by Pedro Azevedo</p>
        </footer>
    )
}
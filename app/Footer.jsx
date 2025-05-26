export default function Footer() {
    return(
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} My Application. All rights reserved.</p>
                <p>Follow us on 
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a>, 
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer"> GitHub</a>
                </p>
            </div>
        </footer>
    )
}
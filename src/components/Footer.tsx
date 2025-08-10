export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="min-h-20 flex items-center justify-center text-gray-100 font-semibold text-sm">
            <p>&copy; {currentYear} Zoltán Molnár</p>
        </footer>
    );
}
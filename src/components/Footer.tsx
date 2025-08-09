export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-neutral-900 min-h-20 flex items-center justify-center text-gray-100 font-semibold text-sm">
            <p>&copy; {currentYear} Zoltán Molnár</p>
        </footer>
    );
}
export default function QuizLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <nav>
            The quiz has to be attempted in 2 hours
            {children}
        </nav>
    );
}

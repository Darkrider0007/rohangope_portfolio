import { NextPageContext } from 'next';
import Link from 'next/link';

interface ErrorProps {
    statusCode: number;
}

const ErrorPage = ({ statusCode }: ErrorProps) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-primary-foreground text-secondary-foreground">
            <h1 className="text-5xl font-bold mb-4">Oops!</h1>
            <p className="text-xl mb-8">
                {statusCode
                    ? `An error ${statusCode} occurred on server`
                    : 'An error occurred on client'}
            </p>
            <Link href="/">
                <p className="text-blue-500 hover:underline">Go back to Home</p>
            </Link>
        </div>
    );
};

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default ErrorPage;

import { NextPage, NextPageContext } from 'next';
import Link from 'next/link';

// Define the props for the ErrorPage component
interface ErrorProps {
    statusCode: number;
}

// Create the ErrorPage component
const ErrorPage: NextPage<ErrorProps> = ({ statusCode }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-primary-foreground text-secondary-foreground">
            <h1 className="text-5xl font-bold mb-4">Oops!</h1>
            <p className="text-xl mb-8">
                {statusCode
                    ? `An error ${statusCode} occurred on server`
                    : 'An error occurred on client'}
            </p>
            <Link href="/">
                <a className="text-blue-500 hover:underline">Go back to Home</a>
            </Link>
        </div>
    );
};

// Define getInitialProps for the ErrorPage
ErrorPage.getInitialProps = async (ctx: NextPageContext) => {
    const { res, err } = ctx;
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode: statusCode || 404 }; // Ensure statusCode is always a number
};

export default ErrorPage;

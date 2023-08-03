export const server = () => {
    return {
        MONGO_URL: process.env.MONGO_URL,
        NODE_ENV: process.env.NODE_ENV
    };
};

export const client = () => {
    return {
        NEXT_API_URL: process.env.NEXT_PUBLIC_API_URL
    };
};

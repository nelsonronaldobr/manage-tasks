export const server = () => {
    return {
        MONGO_URL: process.env.MONGO_URL,
        NODE_ENV: process.env.NODE_ENV
    };
};

import { auth } from "@clerk/nextjs";


const adminIds = [
    "user_2g0eryzugrq1WGRJf73X2wakp7w"
]

export const isAdmin = () => {
    const { userId } = auth();

    if (!userId) {
        return false;
    }

    return adminIds.indexOf(userId) !== -1;
}
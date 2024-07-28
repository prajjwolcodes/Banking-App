'use server';

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../server/appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";
import { log } from "console";

export async function signUp(userData: SignUpParams) {
    const { email, password, firstName } = userData
    try {
        const { account } = await createAdminClient();
        const newUser = await account.create(ID.unique(), email, password, firstName);
        const session = await account.createEmailPasswordSession(email, password);

        cookies().set("appwrite-session", session.secret, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: true,
        });

        return parseStringify(newUser);
    } catch (error) {
        console.log(error)
    }
}

export async function signIn(userData: signInProps) {
    const { email, password } = userData
    try {
        const { account } = await createAdminClient();
        const user = await account.createEmailPasswordSession(email, password);

        cookies().set("appwrite-session", user.secret, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: true,
        });

        return parseStringify(user)
    } catch (error) {
        console.log(error);

    }
}


export async function getLoggedInUser() {
    try {
        const { account } = await createSessionClient();
        return await account.get();
    } catch (error) {
        return null;
    }
}

export async function logoutAccount() {
    try {
        const { account } = await createSessionClient();

        cookies().delete('appwrite-session');

        await account.deleteSession('current');
    } catch (error) {
        return null;
    }

}

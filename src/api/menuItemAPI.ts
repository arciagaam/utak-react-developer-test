import { child, get, ref, set } from "firebase/database"
import { db } from '../database/firebase'
import { TMenu } from "@/pages/Home/columns";
import { uid } from 'uid';
import { objectToArray } from "@/helpers/objectToArray";
import { TResponse } from "@/types/response";
import { TZodMenuItem } from "@/types/zod";


export const createMenuItem = async ({data} : {data: TZodMenuItem}): Promise<TResponse<TZodMenuItem>> => {

    try {
        await set(ref(db, `menu/${uid(16)}`), data);

        return {
            data: data,
            status: 200,
            message: 'Menu Item successfully created.'
        }

    } catch (error) {
        return {
            data: undefined,
            status: 400,
            message: error instanceof Error ? error.message : 'Something went wrong'
        }
    }
}

export const getMenuItems = async (): Promise<TResponse<TMenu[]> | undefined> => {
    try {
        const menuSnapshot = await get(child(ref(db), '/menu'));

        if(menuSnapshot.exists()) {
            return {
                data: objectToArray(menuSnapshot.val()),
                status: 200,
                message: 'Success'
            }
        }
        
        return {
            data: undefined,
            status: 400,
            message: 'No menu available'
        }
        
    } catch (error) {
        return {
            data: undefined,
            status: 400,
            message: error instanceof Error ? error.message : 'Something went wrong'
        }
    }
}

export const getMenuItem = async (id: string): Promise<TResponse<TZodMenuItem> | undefined> => {
    try {
        const menuSnapshot = await get(child(ref(db), `/menu/${id}`));

        if(menuSnapshot.exists()) {
            return {
                data: menuSnapshot.val(),
                status: 200,
                message: 'Success'
            }
        }
        
        return {
            data: undefined,
            status: 400,
            message: 'No data available'
        }
        
    } catch (error) {
        return {
            data: undefined,
            status: 400,
            message: error instanceof Error ? error.message : 'Something went wrong'
        }
    }
}
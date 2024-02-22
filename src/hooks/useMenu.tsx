// import { getDatabase, ref, onValue } from "firebase/database";

import { getMenuItems } from "@/api/menuItemAPI";
import { db } from "@/database/firebase";
import { objectToArray } from "@/helpers/objectToArray";
import { TMenu } from "@/pages/Home/columns";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

// const db = getDatabase();
// const starCountRef = ref(db, 'posts/' + postId + '/starCount');
// onValue(starCountRef, (snapshot) => {
//   const data = snapshot.val();
//   updateStarCount(postElement, data);
// });

export const useMenu = () => {

    const [data, setData] = useState<TMenu[]>([]);

    useEffect(() => {
        const getData = async () => {
            const res = await getMenuItems();
            if (res && res.data) {
                setData(res.data);
            }
        }

        getData();
    }, [])

    useEffect(() => {
        const menuRef = ref(db, '/menu');

        onValue(menuRef, (snapshot) => {
            const data = snapshot.val();
            setData(objectToArray(data))
        })
    }, [])

    return { data };

}   
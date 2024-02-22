import { DataTable } from '@/components/global/DataTable'
import React, { useEffect, useState } from 'react'
import { TMenu, columns } from './columns'
import { getMenuItems } from '@/api/menuItemAPI';
import { AddMenuModal } from './components/modals/AddMenuModal';


const Home = () => {

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

    return (
        <div className="flex flex-col min-h-screen gap-5 p-10">
            <h1 className='text-2xl font-bold'>Menu</h1>

            <DataTable
                columns={columns}
                data={data}
                additionalColumns={
                    <>
                        <div className="flex gap-5 ml-auto">
                            <AddMenuModal />
                        </div>
                    </>
                } />
        </div>
    )
}

export default Home
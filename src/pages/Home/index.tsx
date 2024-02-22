import { DataTable } from '@/components/global/DataTable'
import { columns } from './columns'
import { AddMenuModal } from './components/modals/AddMenuModal';
import { useMenu } from '@/hooks/useMenu';


const Home = () => {

    const { data, loading } = useMenu();

    return (
        <div className="flex flex-col min-h-screen gap-5 p-2 md:p-10">
            <h1 className='text-2xl font-bold'>Menu</h1>

            <div className="bg-white rounded-lg border border-black/10 p-5">

                <DataTable
                    columns={columns}
                    data={data}
                    additionalColumns={
                        <div className="flex gap-5 ml-auto w-full md:w-fit">
                            <AddMenuModal />
                        </div>
                    } 
                    loading={loading}
                />
            </div>
        </div>
    )
}

export default Home
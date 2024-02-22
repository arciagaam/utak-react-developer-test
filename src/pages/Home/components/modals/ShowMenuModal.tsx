// import { createMenuItem } from '@/api/menuItemAPI'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { MenuForm } from '../forms/MenuForm';
import { useState } from 'react';

const ShowMenuModal = ({ id }: { id: string }) => {

    const [isEditing, setIsEditing] = useState<boolean>(false);

    return (
        <Dialog>
            <DialogTrigger className='w-full text-left text-sm px-2'>
                View Item
            </DialogTrigger>

            <DialogContent onInteractOutside={(e) => { e.preventDefault() }} className='min-w-[80vw] max-h-[90vh] bg-[#FAFAFA]'>
                <DialogHeader>
                    <DialogTitle>View Menu Item</DialogTitle>
                </DialogHeader>

                <MenuForm formDisabled={true} isEditing={isEditing} setIsEditing={setIsEditing} id={id} />

            </DialogContent>
        </Dialog>
    )
}

export { ShowMenuModal }
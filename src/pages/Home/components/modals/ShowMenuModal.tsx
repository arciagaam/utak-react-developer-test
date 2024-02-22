// import { createMenuItem } from '@/api/menuItemAPI'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { MenuForm } from '../forms/MenuForm';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { AlertModal } from '@/components/global/AlertModal';
import { deleteMenuItem } from '@/api/menuItemAPI';
import toast from 'react-hot-toast';

const ShowMenuModal = ({ id, label = 'View Item', editMenu = false }: { id: string, label?: string, editMenu?: boolean }) => {

    const [isEditing, setIsEditing] = useState<boolean>(editMenu);
    const [formButtonDisabled, setFormButtonDisabled] = useState(false)
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={'ghost'} className='h-fit text-left justify-start items-start w-full p-2'>{label}</Button>
            </DialogTrigger>

            <DialogContent onInteractOutside={(e) => { e.preventDefault() }} className='min-w-[80vw] max-h-[90vh] bg-[#FAFAFA]'>

                <DialogHeader>
                    <DialogTitle className='text-2xl font-bold'>{isEditing ? 'Edit Menu Item' : 'View Menu Item'}</DialogTitle>
                </DialogHeader>

                <MenuForm setFormButtonDisabled={setFormButtonDisabled} formDisabled={!isEditing} isEditing={isEditing} id={id} setIsEditing={setIsEditing} />

                <DialogFooter>
                    {
                        <>
                            <div className='gap-3 flex ml-auto'>
                                <Button className={`${isEditing ? 'block' : 'hidden'}`} type="button" variant='ghost' onClick={() => setIsEditing(false)}>Cancel</Button>
                                <Button disabled={formButtonDisabled} className={`${isEditing ? 'block' : 'hidden'}`} form='add-menu-item-form'>Save</Button>

                                {!isEditing &&
                                    <AlertModal
                                        trigger={<Button className={`${!isEditing ? 'block' : 'hidden'}`} type="button" variant={'destructive'}>Delete Item</Button>}
                                        title="Are you sure?"
                                        description="This action cannot be undone. This will permanently delete the item."
                                        action={() => {
                                            deleteMenuItem(id);
                                            toast.success('Item successfully deleted');
                                        }}
                                    />
                                }

                                <Button className={`${!isEditing ? 'block' : 'hidden'}`} type="button" onClick={() => setIsEditing(true)}>Edit Item</Button>
                            </div>
                        </>
                    }
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export { ShowMenuModal }
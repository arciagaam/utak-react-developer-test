import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { MenuForm } from '../forms/MenuForm'
import { PlusIcon } from 'lucide-react'

const AddMenuModal = () => {

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={'default'} className='flex gap-2'><PlusIcon size={18}/> Add Menu Item</Button>
            </DialogTrigger>

            <DialogContent onInteractOutside={(e) => { e.preventDefault() }} className='min-w-[80vw] lg:max-h-[90vh] bg-[#FAFAFA]'>
                <DialogHeader>
                    <DialogTitle className='text-2xl font-bold'>Add Menu Item</DialogTitle>
                </DialogHeader>

                <MenuForm />

                <DialogFooter>
                    <Button form='add-menu-item-form' type="submit">Add Menu</Button>
                </DialogFooter>
            </DialogContent>

        </Dialog>
    )
}

export { AddMenuModal }
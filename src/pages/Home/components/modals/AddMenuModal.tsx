import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { MenuForm } from '../forms/MenuForm'

const AddMenuModal = () => {

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={'default'}>Add Menu Item +</Button>
            </DialogTrigger>

            <DialogContent onInteractOutside={(e) => { e.preventDefault() }} className='min-w-[80vw] max-h-[90vh] bg-[#FAFAFA]'>
                <DialogHeader>
                    <DialogTitle>Add Menu Item</DialogTitle>
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
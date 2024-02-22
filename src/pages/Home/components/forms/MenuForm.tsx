import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { menuItemSchema } from "@/validators/menuItem"
import { zodResolver } from "@hookform/resolvers/zod"
import { OptionGroupFields } from "../OptionGroupFields"
import { useForm } from "react-hook-form"
import { createMenuItem, getMenuItem, updateMenuItem } from "@/api/menuItemAPI"
import { TZodMenuItem } from "@/types/zod"
import React, { SetStateAction, useEffect } from "react"
import toast from "react-hot-toast"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MenuForm = (
    {
        formDisabled = false,
        setFormButtonDisabled,
        isEditing = false,
        setIsEditing,
        id = null
    }: {
        formDisabled?: boolean,
        isEditing?: boolean,
        setFormButtonDisabled: React.Dispatch<SetStateAction<boolean>>,
        setIsEditing?: React.Dispatch<SetStateAction<boolean>>,
        id?: string | null
    }) => {

    const addMenuItemForm = useForm<TZodMenuItem>({
        resolver: zodResolver(menuItemSchema),
        defaultValues: {
            name: '',
            basePrice: 0,
            category: '',
            options: [],
            cost: 0,
            amountInStock: 0,
        }
    });

    const onFormSubmit = async (values: TZodMenuItem) => {
        setFormButtonDisabled(true);
        
        if (isEditing && id && setIsEditing) {
            await updateMenuItem({ data: values, id: id });
            toast.success('Menu successfully updated');
            setIsEditing(false);
        } else {
            await createMenuItem({ data: values });
            toast.success('Menu successfully created');
            addMenuItemForm.reset()
        }
        
        setFormButtonDisabled(false);

    }

    useEffect(() => {
        const getData = async () => {
            if (!id) return;

            const res = await getMenuItem(id);

            if (res && res.data) {
                addMenuItemForm.reset(res.data);
            }
        }
        getData();
    }, [addMenuItemForm, id, isEditing])

    return (
        <Form {...addMenuItemForm}>
            <form id="add-menu-item-form" onSubmit={addMenuItemForm.handleSubmit(onFormSubmit)} className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-h-[70vh] overflow-auto h-full">
                <div className="flex flex-col gap-3 bg-white p-5 rounded-md border border-black/10 h-fit">
                    <FormField
                        control={addMenuItemForm.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Item Name</FormLabel>
                                <FormControl>
                                    <Input disabled={formDisabled} placeholder="Enter item name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={addMenuItemForm.control}
                        name="basePrice"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Base Price</FormLabel>
                                <FormControl>
                                    <Input disabled={formDisabled} placeholder="Enter item base price" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={addMenuItemForm.control}
                        name="category"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Category</FormLabel>
                                <FormControl>
                                    <Input disabled={formDisabled} placeholder="Enter item category" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={addMenuItemForm.control}
                        name="cost"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Cost</FormLabel>
                                <FormControl>
                                    <Input disabled={formDisabled} placeholder="Enter item cost" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={addMenuItemForm.control}
                        name="amountInStock"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Amount in Stock</FormLabel>
                                <FormControl>
                                    <Input disabled={formDisabled} placeholder="Enter item stock" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <OptionGroupFields formDisabled={formDisabled} form={addMenuItemForm} />

            </form>
        </Form>
    )
}





export { MenuForm }
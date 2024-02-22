import { Button } from '@/components/ui/button';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { menuItemSchema } from '@/validators/menuItem';
import { TrashIcon } from 'lucide-react';
import React from 'react'
import { UseFormReturn, useFieldArray } from 'react-hook-form';
import { z } from 'zod';
import OptionItem from './OptionItem';

const OptionGroup = ({ id, nestIndex, form, handleRemove, formDisabled }: { id: number | string, nestIndex: number, form: UseFormReturn<z.infer<typeof menuItemSchema>>, handleRemove: () => void, formDisabled?: boolean }) => {

    const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: `options.${nestIndex}.items`
    });

    const handleAppendOptionItem = () => {
        append({ name: '', additionalPrice: 0 });
    }

    const handleRemoveOptionItem = (index: number) => {
        remove(index);
    }

    return (
        <div className="flex flex-col gap-2 border-b border-b-slate/20 pb-5 p-5 rounded-md border border-black/10 bg-white">

            <div className="flex gap-2 items-end">
                <FormField
                    key={id}
                    control={form.control}
                    name={`options.${nestIndex}.name`}
                    render={({ field }) => (
                        <FormItem className="w-full">
                            <FormLabel>Option Name</FormLabel>
                            <FormControl>
                                <Input disabled={formDisabled} placeholder="Enter option name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {
                    !formDisabled && <Button type="button" onClick={handleRemove} variant={'destructive'} className="flex gap-1"><TrashIcon size={18} /> Remove Option</Button>
                }


            </div>

            <div className="flex flex-col gap-2 mt-5">
                {
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    fields.map(({ id }, index) => (
                        <OptionItem key={index} id={id} index={index} nestIndex={nestIndex} form={form} formDisabled={formDisabled} handleRemoveOptionItem={() => handleRemoveOptionItem(index)} />
                    ))
                }
            </div>
            
            {
                !formDisabled && <Button type="button" className="mt-10" variant={'outline'} onClick={handleAppendOptionItem}>Add Item +</Button>
            }

        </div>
    )
}
export { OptionGroup }
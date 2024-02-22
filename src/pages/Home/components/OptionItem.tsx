import { Button } from '@/components/ui/button';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { menuItemSchema } from '@/validators/menuItem';
import { TrashIcon } from 'lucide-react';
import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';

const OptionItem = ({ id, index, nestIndex, form, handleRemoveOptionItem, formDisabled }: { id: string | number, index: number, nestIndex: number, form: UseFormReturn<z.infer<typeof menuItemSchema>>, handleRemoveOptionItem: () => void, formDisabled?: boolean }) => {
    return (
        <div className="flex gap-2 w-full items-end">
            <FormField
                key={`${id}.name`}
                control={form.control}
                name={`options.${nestIndex}.items.${index}.name`}
                render={({ field }) => (
                    <FormItem className="w-full">
                        <FormLabel>Item Name</FormLabel>
                        <FormControl>
                            <Input disabled={formDisabled} placeholder="Enter item name" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <FormField
                key={`${id}.additionalPrice`}
                control={form.control}
                name={`options.${nestIndex}.items.${index}.additionalPrice`}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Additional Price</FormLabel>
                        <FormControl>
                            <Input disabled={formDisabled} placeholder="Enter item additional price" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            {
                !formDisabled && <Button type="button" onClick={handleRemoveOptionItem} variant={'outline'} className="flex gap-1"><TrashIcon size={18} /></Button>
            }

        </div>
    )
}

export default OptionItem
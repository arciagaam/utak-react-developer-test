import { OptionGroup } from './OptionGroup'
import { Button } from '@/components/ui/button'
import { UseFormReturn, useFieldArray } from 'react-hook-form';
import { menuItemSchema } from '@/validators/menuItem';
import { z } from 'zod';
import { PlusIcon } from 'lucide-react';

const OptionGroupFields = ({form, formDisabled }: {form: UseFormReturn<z.infer<typeof menuItemSchema>>, formDisabled?: boolean}) => {
    const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: 'options'
    });

    const handleAddOption = () => {
        append({ name: '', items: [{ name: '', additionalPrice: 0 }] });
    }

    const handleRemoveOption = (index: number) => {
        remove(index);
    }

    return (
        <div className="flex flex-col gap-5">
            {
                fields.map(({id} : {id: number | string}, index) => (
                    <OptionGroup key={index} id={id} nestIndex={index} form={form} formDisabled={formDisabled} handleRemove={() => handleRemoveOption(index)} />
                ))
            }

            {
                !formDisabled && <Button type="button" variant={'outline'} onClick={handleAddOption} className='flex gap-2'><PlusIcon size={18}/> Add Option</Button>
            }
            
        </div>
    )
}

export { OptionGroupFields }
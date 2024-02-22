import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react";
import { ShowMenuModal } from "./components/modals/ShowMenuModal";
import { AlertModal } from "@/components/global/AlertModal";
import { deleteMenuItem } from "@/api/menuItemAPI";
import { Badge } from "@/components/ui/badge";
import toast from "react-hot-toast";

export type TOptionItem = {
    name: string,
    additionalPrice: number,
}

export type TOption = {
    name: string;
    items: TOptionItem[];
}

export type TMenu = {
    id: string;
    name: string;
    basePrice: number;
    category: string;
    options: TOption[];
    cost: number;
    amountInStock: number;
}

export const columns: ColumnDef<TMenu>[] = [
    {
        accessorKey: 'name',
        header: 'Name',
    },
    {
        accessorKey: 'basePrice',
        header: 'Base Price',
    },
    {
        accessorKey: 'category',
        header: 'Category'
    },
    {
        accessorKey: 'options',
        header: 'Option/s',
        cell: ({ row }) => {
            const options = row.getValue("options") as TOption[];
            if (!options) return 'N/A'

            const optionsStringArray = options.map((option) => option.name);
            const optionsString = optionsStringArray.join(', ');

            if (optionsStringArray.length > 2) {
                return <p title={optionsString}>{optionsStringArray[0]}, {optionsStringArray[1]} <Badge className="ml-1" variant="outline">11 more</Badge></p>
            }

            return optionsString || 'N/A'
        },
    },
    {
        accessorKey: 'cost',
        header: 'Cost'
    },
    {
        accessorKey: 'amountInStock',
        header: 'Stock'
    },
    {
        id: "actions",
        enableHiding: false,
        header: "Actions",
        cell: ({ row }) => {
            const { id, name } = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions - {name}</DropdownMenuLabel>

                        <div className="flex flex-col items-start gap-1">
                            <ShowMenuModal id={id} />
                            <ShowMenuModal id={id} label={'Edit Item'} editMenu={true} />
                            <AlertModal
                                trigger={<Button className="text-left justify-start items-start hover:bg-red-500 hover:text-secondary w-full h-fit p-2" variant={'ghost'}>Delete Item</Button>}
                                title="Are you sure?"
                                description="This action cannot be undone. This will permanently delete the item."
                                action={() => {
                                    deleteMenuItem(id);
                                    toast.success('Item successfully deleted');
                                }}
                            />
                        </div>
                        {/*
                        <DropdownMenuItem className="focus:bg-red-100 focus:text-red-500 text-red-500 bg-red-50">Delete User</DropdownMenuItem>
                    */}
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    }
]





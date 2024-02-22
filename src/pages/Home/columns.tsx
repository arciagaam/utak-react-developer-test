import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react";
import { ShowMenuModal } from "./components/modals/ShowMenuModal";

export type TOptionItem = {
    name: string,
    additionalPrice: string,
}

export type TOption = {
    name: string;
    items: TOptionItem[];
}

export type TMenu = {
    id: string;
    name: string;
    basePrice: string;
    category: string;
    options: TOption[];
    cost: string;
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
            if(!options) return 'N/A'

            const optionsStringArray = options.map((option) => option.name);
            const optionsString = optionsStringArray.join(', ');


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
            const { id } = row.original

            return (
                <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>

                    <ShowMenuModal id={id} />
                    {/*
                        <DropdownMenuItem className="focus:bg-red-100 focus:text-red-500 text-red-500 bg-red-50">Delete User</DropdownMenuItem>
                    */}
                </DropdownMenuContent>
            </DropdownMenu>
            )
        },
    }
]





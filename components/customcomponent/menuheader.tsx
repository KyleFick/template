import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"

export function MenuHeader() {
    return (
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem> New Window </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem> Share </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem> Print </MenubarItem>
                    <MenubarSeparator />
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    )
}
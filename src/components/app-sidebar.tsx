import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
} from "@/components/ui/sidebar"
import {logo} from "../assets/images"
import { Button } from "@/components/ui/button"

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader>
                <img src={logo} className="w-70 mt-4  rounded-lg" />
            </ SidebarHeader>

            <SidebarContent>
                <SidebarGroup>
                    <Button className="mb-3 hover:border" variant={"secondary"}>
                        Dashboard
                    </Button>
                    <Button className="mb-3 hover:border" variant={"secondary"}>
                        Products
                    </Button>
                </SidebarGroup>
                <SidebarGroup />
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}
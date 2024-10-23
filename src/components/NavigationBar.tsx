import {
    NavigationMenu,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuViewport,
    navigationMenuTriggerStyle
  } from "@/components/ui/navigation-menu";

  import Link from 'next/link';

  {/* Navigation Menu */}
  const NavigationBar: React.FC = () => {
    return (
        <nav className="absolute bg-transparent text-white top-0 right-0 p-4">
        <NavigationMenu>
            <NavigationMenuList className="flex justify-end space-x-4">
                <NavigationMenuItem>
                    <Link href="/home" legacyBehavior passHref>
                    <NavigationMenuLink className={`bg-transparent text-white p-2 rounded-md ${navigationMenuTriggerStyle()}`}>
                        Home
                    </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={`bg-transparent text-white p-2 rounded-md ${navigationMenuTriggerStyle()}`}>
                        Characters
                    </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/countdown" legacyBehavior passHref>
                    <NavigationMenuLink className={`bg-transparent text-white p-2 rounded-md ${navigationMenuTriggerStyle()}`}>
                        Countdown to Movie
                    </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                </NavigationMenuList>
            <NavigationMenuIndicator />
            <NavigationMenuViewport />
        </NavigationMenu>
        </nav>
    );
  };
export default NavigationBar;
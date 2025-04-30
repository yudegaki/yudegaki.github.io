import type React from "react";
import { GraduationCap, Menu, Earth } from "lucide-react";
import { CiCoffeeBean } from "react-icons/ci";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface MenuItem {
  titleIcon?: React.ReactNode;
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface NavbarProps {
  menu?: MenuItem[];
}

const Navbar = ({
  menu = [
    { title: "Home", url: "/" },
    {
      title: "Coffee Quiz",
      titleIcon: <CiCoffeeBean className="size-5" />,
      url: "#",
      items: [
        {
          title: "コーヒー検定クイズ",
          description:
            "コーヒーインストラクター検定2級レベルのクイズを出題します",
          icon: <GraduationCap className="size-6 shrink-0" />,
          url: "/coffeequiz",
        },
        {
          title: "コーヒーベルト国名クイズ",
          description: "コーヒーベルト付近の国名を当てるクイズです",
          icon: <Earth className="size-6 shrink-0" />,
          url: "/coffeebeltquiz",
        },
      ],
    },
  ],
}: NavbarProps) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto flex pd-3 items-center justify-between">
        {/* Desktop Menu */}
        <nav className="hidden justify-between lg:flex pt-3">
          <div className="flex items-center">
            <NavigationMenu>
              <NavigationMenuList>
                {menu.map((item) => renderMenuItem(item))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div />
        {/* Button の右寄せのために入れた */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden my-3 h-12 w-12"
            >
              <Menu className="h-12 w-12" />
            </Button>
          </SheetTrigger>
          <SheetContent className="overflow-y-auto w-[85%] sm:max-w-md">
            <div className="flex flex-col gap-6 p-4">
              <Accordion
                type="single"
                collapsible
                className="flex w-full flex-col gap-6 mt-8"
              >
                {menu.map((item) => renderMobileMenuItem(item))}
              </Accordion>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>
          {item.titleIcon}
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="flex flex-col gap-3 p-4 md:w-[300px] lg:w-[400px] lg:grid-cols-[.75fr_1fr]">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-80">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-md font-medium transition-colors hover:bg-muted"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        {item.titleIcon}
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-2">
        <AccordionTrigger className="py-3 font-semibold hover:no-underline text-gray-800 hover:text-gray-800 hover:bg-gray-100">
          <span className="text-xl md:text-2xl flex items-center gap-2">
            {item.titleIcon && <span className="mr-1">{item.titleIcon}</span>}
            {item.title}
          </span>
        </AccordionTrigger>
        <AccordionContent className="mt-3 space-y-4 pb-4">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a
      key={item.title}
      href={item.url}
      className="text-xl md:text-2xl font-bold py-3 block no-underline hover:underline text-gray-800 hover:text-gray-800 hover:bg-gray-100"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      {item.title}
    </a>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
      className="flex flex-row gap-4 rounded-md p-4 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground hover:w-full"
      style={{ textDecoration: "none", color: "inherit" }}
      href={item.url}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-base font-semibold mb-1">{item.title}</div>
        {item.description && (
          <p className="text-sm leading-snug text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
};

export default Navbar;

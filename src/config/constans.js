import { BsBox, BsFolder, BsFolderPlus } from "react-icons/bs";
import { LiaCartPlusSolid } from "react-icons/lia";

export const sidebarMenuItems = [
  { id: 1, label: "Home", path: "/", icon: BsBox },
  {
    id: 2,
    label: "Create product",
    path: "/create-product",
    icon: LiaCartPlusSolid,
  },
  { id: 3, label: "Categories", path: "/categories", icon: BsFolder },
  {
    id: 4,
    label: "Create category",
    path: "/create-category",
    icon: BsFolderPlus,
  },
];

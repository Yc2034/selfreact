import { AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';
import { FiShoppingBag, FiEdit, FiPieChart } from 'react-icons/fi';
import { BsKanban, BsBarChart } from 'react-icons/bs';
import { BiColorFill } from 'react-icons/bi';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine, RiStockLine } from 'react-icons/ri';
import { GiLouvrePyramid } from 'react-icons/gi';

export const links = [
    {
      title: 'Dashboard',
      links: [
        {
          name: 'fansDashboard',
          icon: <FiShoppingBag />,
        },
      ],
    },
  
    {
      title: 'Pages',
      links: [
        {
          name: 'orders',
          icon: <AiOutlineShoppingCart />,
        },
        {
          name: 'employees',
          icon: <IoMdContacts />,
        },
        {
          name: 'customers',
          icon: <RiContactsLine />,
        },
      ],
    },
    {
      title: 'Published Themes',
      links: [
        {
          name: 'topics',
          icon: <BsKanban />,
        }
      ],
    },
    {
      title: 'Fans Charts',
      links: [
        {
          name: 'line',
          icon: <AiOutlineStock />,
        },
  
        {
          name: 'pieAge',
          icon: <FiPieChart />,
        },
        {
          name: 'pieCity',
          icon: <FiPieChart />,
        },
        {
          name: 'weather',
          icon: <BsBarChart />,
        },
        {
          name: 'pyramid',
          icon: <GiLouvrePyramid />,
        }
     
      ],
    },
  ];
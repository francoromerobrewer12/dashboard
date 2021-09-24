//Sidebar Icons import
import AppsIcon from '@mui/icons-material/Apps';
import TimelineIcon from '@mui/icons-material/Timeline';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import MessageIcon from '@mui/icons-material/Message';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ReportIcon from '@mui/icons-material/Report';

//Small widget import
import foto1 from './assets/1.jpg'
import foto2 from './assets/2.jpg'
import foto3 from './assets/3.jpg'
import foto4 from './assets/4.jpg'
import foto5 from './assets/5.jpg'



export const iconos = [AppsIcon,TimelineIcon,ShowChartIcon,"",PersonOutlineIcon,StorefrontIcon,AttachMoneyIcon,EqualizerIcon,"",MailOutlineIcon,DynamicFeedIcon,MessageIcon,"",WorkOutlineIcon,TimelineIcon,ReportIcon];

export const sidebarList = [
    {
        category: "title",
        title: "Dashboard"
    },
    {
        icon: AppsIcon,
        title: "Home",
        link: "/"
    },
    {
        icon: TimelineIcon,
        title: "Analytics",
    },
    {
        icon: ShowChartIcon,
        title: "Sales",
    },
    {
        category: "title",
        title: "Quick Menu"
    },
    {
        icon: PersonOutlineIcon,
        title: "Users",
        link: "/users"
    },
    {
        icon: StorefrontIcon,
        title: "Products",
        link: "/products"
    },
    {
        icon: AttachMoneyIcon,
        title: "Transactions",
    },
    {
        icon: EqualizerIcon,
        title: "Reports",
    },
    {
        category: "title",
        title: "Notifications"
    },
    {
        icon: MailOutlineIcon,
        title: "Mail",
    },
    {
        icon: DynamicFeedIcon,
        title: "Feedback",
    },
    {
        icon: MessageIcon,
        title: "Messages",
    },
    {
        category: "title",
        title: "Staff"
    },
    {
        icon: WorkOutlineIcon,
        title: "Manage",
    },
    {
        icon: TimelineIcon,
        title: "Analytics",
    },
    {
        icon: ReportIcon,
        title: "Reports",
    }
]

//HOME PAGE: Chart data
export const chartData = [
    {
      Month: 'Jan',
      "Active Users": 4000,
    },
    {
      Month: 'Feb',
      "Active Users": 3000,
    },
    {
      Month: 'Mar',
      "Active Users": 2000,
    },
    {
      Month: 'Apr',
      "Active Users": 5000,
    },
    {
      Month: 'May',
      "Active Users": 4000,
    },
    {
      Month: 'Jun',
      "Active Users": 1000,
    },
    {
      Month: 'Jul',
      "Active Users": 2500,
    },
    {
      Month: 'Aug',
      "Active Users": 4000,
    },
    {
      Month: 'Sep',
      "Active Users": 6500,
    },
    {
      Month: 'Oct',
      "Active Users": 7000,
    },
    {
      Month: 'Nov',
      "Active Users": 5800,
    },
    {
      Month: 'Dec',
      "Active Users": 5900,
    },
  ];

//HOME PAGE: Small Widget data

export const widgetSmData = [
  {
    name: "Alice Stokes",
    job: "Software Engineer",
    img: foto1
  },
  {
    name: "Alice Stokes",
    job: "Software Engineer",
    img: foto2
  },
  {
    name: "Alice Stokes",
    job: "Software Engineer",
    img: foto3
  },
  {
    name: "Alice Stokes",
    job: "Software Engineer",
    img: foto4
  },
  {
    name: "Alice Stokes",
    job: "Software Engineer",
    img: foto5
  }
]

//HOME PAGE: Large Widget Data
export const widgetLgData = [
  {
    name: "Susan Carol",
    date: "2 Jun 2021",
    amount: "122.00",
    button: "Aproved"
  },
  {
    name: "John Pops",
    date: "12 Apr 2021",
    amount: "100.50",
    button: "Declined"
  },
  {
    name: "Alex Stars",
    date: "29 May 2021",
    amount: "82.00",
    button: "Aproved"
  },
  {
    name: "Frank Towers",
    date: "5 Mar 2021",
    amount: "272.00",
    button: "Aproved"
  },
  {
    name: "Carol Blonde",
    date: "10 Jan 2021",
    amount: "320.00",
    button: "Declined"
  }
]

//USERS PAGE: Table row data

export const rows = [
  { id: 1, username: 'John Place', avatar:foto1 , email: 'johnplace@gmail.com', status: "Active", transactions:"$120.00",job:"Software Engineer", location:"New York, United States", phone: "3518037527", nickname:"poppero", date:"12.09.1994" },
  { id: 2, username: 'Paul Towers', avatar:foto2 , email: 'johnplace@gmail.com', status: "Active", transactions:"$120.00",job:"Software Engineer", location:"New York, United States", phone: "3518037527", nickname:"poppero", date:"12.09.1994"  },
  { id: 3, username: 'John Place', avatar:foto3 , email: 'johnplace@gmail.com', status: "Active", transactions:"$120.00" ,job:"Software Engineer", location:"New York, United States", phone: "3518037527", nickname:"poppero", date:"12.09.1994" },
  { id: 4, username: 'Mike Pops', avatar:foto4 , email: 'johnplace@gmail.com', status: "Active", transactions:"$120.00",job:"Software Engineer", location:"New York, United States", phone: "3518037527", nickname:"poppero", date:"12.09.1994"  },
  { id: 5, username: 'Alice Kayce', avatar:foto5 , email: 'johnplace@gmail.com', status: "Active", transactions:"$120.00",job:"Software Engineer", location:"New York, United States", phone: "3518037527", nickname:"poppero", date:"12.09.1994"  },
  { id: 6, username: 'Frank Loster', avatar:foto1 , email: 'johnplace@gmail.com', status: "Active", transactions:"$120.00",job:"Software Engineer", location:"New York, United States", phone: "3518037527", nickname:"poppero", date:"12.09.1994"  },
  { id: 7, username: 'John Times', avatar:foto2 , email: 'johnplace@gmail.com', status: "Active", transactions:"$120.00",job:"Software Engineer", location:"New York, United States", phone: "3518037527", nickname:"poppero", date:"12.09.1994"  }
];
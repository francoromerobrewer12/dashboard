//Sidebar Icons import
import AppsIcon from "@mui/icons-material/Apps";
import TimelineIcon from "@mui/icons-material/Timeline";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import MessageIcon from "@mui/icons-material/Message";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ReportIcon from "@mui/icons-material/Report";

//Small widget import
import foto1 from "./assets/1.jpg";
import foto2 from "./assets/2.jpg";
import foto3 from "./assets/3.jpg";
import foto4 from "./assets/4.jpg";
import foto5 from "./assets/5.jpg";
import foto6 from "./assets/6.jpg";
import foto7 from "./assets/7.jpg";
import foto8 from "./assets/8.jpg";
import foto9 from "./assets/9.jpg";

export const iconos = [
  AppsIcon,
  TimelineIcon,
  ShowChartIcon,
  "",
  PersonOutlineIcon,
  StorefrontIcon,
  AttachMoneyIcon,
  EqualizerIcon,
  "",
  MailOutlineIcon,
  DynamicFeedIcon,
  MessageIcon,
  "",
  WorkOutlineIcon,
  TimelineIcon,
  ReportIcon,
];

export const sidebarList = [
  {
    category: "title",
    title: "Dashboard",
  },
  {
    icon: AppsIcon,
    title: "Home",
    link: "/",
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
    title: "Quick Menu",
  },
  {
    icon: PersonOutlineIcon,
    title: "Users",
    link: "/users",
  },
  {
    icon: StorefrontIcon,
    title: "Products",
    link: "/products",
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
    title: "Notifications",
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
    title: "Staff",
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
  },
];

//HOME PAGE: Chart data
export const chartData = [
  {
    Month: "Jan",
    "Active Users": 4000,
  },
  {
    Month: "Feb",
    "Active Users": 3000,
  },
  {
    Month: "Mar",
    "Active Users": 2000,
  },
  {
    Month: "Apr",
    "Active Users": 5000,
  },
  {
    Month: "May",
    "Active Users": 4000,
  },
  {
    Month: "Jun",
    "Active Users": 1000,
  },
  {
    Month: "Jul",
    "Active Users": 2500,
  },
  {
    Month: "Aug",
    "Active Users": 4000,
  },
  {
    Month: "Sep",
    "Active Users": 6500,
  },
  {
    Month: "Oct",
    "Active Users": 7000,
  },
  {
    Month: "Nov",
    "Active Users": 5800,
  },
  {
    Month: "Dec",
    "Active Users": 5900,
  },
];

//HOME PAGE: Small Widget data

export const widgetSmData = [
  {
    name: "Alice Stokes",
    job: "Software Engineer",
    img: foto1,
  },
  {
    name: "Alice Stokes",
    job: "Software Engineer",
    img: foto2,
  },
  {
    name: "Alice Stokes",
    job: "Software Engineer",
    img: foto3,
  },
  {
    name: "Alice Stokes",
    job: "Software Engineer",
    img: foto4,
  },
  {
    name: "Alice Stokes",
    job: "Software Engineer",
    img: foto5,
  },
];

//HOME PAGE: Large Widget Data
export const widgetLgData = [
  {
    name: "Susan Carol",
    date: "2 Jun 2021",
    amount: "122.00",
    button: "Aproved",
  },
  {
    name: "John Pops",
    date: "12 Apr 2021",
    amount: "100.50",
    button: "Declined",
  },
  {
    name: "Alex Stars",
    date: "29 May 2021",
    amount: "82.00",
    button: "Aproved",
  },
  {
    name: "Frank Towers",
    date: "5 Mar 2021",
    amount: "272.00",
    button: "Aproved",
  },
  {
    name: "Carol Blonde",
    date: "10 Jan 2021",
    amount: "320.00",
    button: "Declined",
  },
];

//USERS PAGE: Table row data

export const rows = [
  {
    id: 1,
    username: "John Place",
    avatar: foto1,
    email: "johnplace@gmail.com",
    status: "Active",
    transactions: {
      value: "$120.00",
      status: "Approved"
    },
    job: "Software Engineer",
    location: "New York, United States",
    phone: "3518037527",
    nickname: "johnnyplace",
    date: "12/09/1994",
    category: "new"
  },
  {
    id: 2,
    username: "Paul Towers",
    avatar: foto2,
    email: "johnplace@gmail.com",
    status: "Active",
    transactions: {
      value: "$100.00",
      status: "Approved"
    },
    job: "Electronic Engineer",
    location: "Chicago, United States",
    phone: "3518022227",
    nickname: "paultowers",
    date: "10/11/1990",
    category: "new"
  },
  {
    id: 3,
    username: "Jim Peeks",
    avatar: foto3,
    email: "jimpeeks@gmail.com",
    status: "Active",
    transactions: {
      value: "$160.00",
      status: "Approved"
    },
    job: "Architect",
    location: "Boston, United States",
    phone: "3523337527",
    nickname: "jimmypeeks",
    date: "01/09/1999",
    category: "new"
  },
  {
    id: 4,
    username: "Mike Pops",
    avatar: foto4,
    email: "mikepops@gmail.com",
    status: "Active",
    transactions: {
      value: "$210.00",
      status: "Approved"
    },
    job: "CEO Manager",
    location: "Washington, United States",
    phone: "35180372237",
    nickname: "mikepops",
    date: "05/03/1991",
    category: "new"
  },
  {
    id: 5,
    username: "Alice Kayce",
    avatar: foto5,
    email: "alicekayce@gmail.com",
    status: "Passive",
    transactions: {
      value: "$125.00",
      status: "Approved"
    },
    job: "Software Engineer",
    location: "Los Angeles, United States",
    phone: "321118037527",
    nickname: "alicekayce",
    date: "08/10/1986",
    category: "new"
  },
  {
    id: 6,
    username: "Sophie Mans",
    avatar: foto6,
    email: "sophiemans@gmail.com",
    status: "Passive",
    transactions: {
      value: "$130.00",
      status: "Approved"
    },
    job: "Technical Employee",
    location: "Paris, France",
    phone: "3518037527",
    nickname: "sophiemans",
    date: "24/09/1978",
    category: "last"
  },
  {
    id: 7,
    username: "Laia Pranks",
    avatar: foto7,
    email: "laiapranks@gmail.com",
    status: "Passive",
    transactions: {
      value: "$10.00",
      status: "Passive"
    },
    job: "Animation Manager",
    location: "Paris, France",
    phone: "35180321210",
    nickname: "laiapranks",
    date: "08/05/1992",
    category: "last"
  },
  {
    id: 8,
    username: "Paul Broxer",
    avatar: foto8,
    email: "paulbroxer@gmail.com",
    status: "Active",
    transactions: {
      value: "$150.00",
      status: "Approved"
    },
    job: "Electronic Engineer",
    location: "Miami, United States",
    phone: "35180323127",
    nickname: "paulbroxer",
    date: "18/07/1992",
    category: "last"
  },
  {
    id: 9,
    username: "Laura Smooth",
    avatar: foto9,
    email: "laurasmooth@gmail.com",
    status: "Active",
    transactions: {
      value: "$70.00",
      status: "Approved"
    },
    job: "Dancer",
    location: "DF, México",
    phone: "3518037527",
    nickname: "laurasmooth",
    date: "10/10/1987",
    category: "last"
  },
];

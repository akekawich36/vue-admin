import {
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined,
  HomeOutlined,
} from "@ant-design/icons-vue";
import { h } from "vue";
import { useRouter } from "vue-router";

const mainMenu = [
  {
    key: "1",
    icon: () => h(HomeOutlined),
    label: "หน้าแรก",
    title: "หน้าแรก",
    link: "/home",
  },
  {
    key: "2",
    icon: () => h(DesktopOutlined),
    label: "Student",
    title: "Student",
    link: "/student",
  },
  {
    key: "3",
    icon: () => h(InboxOutlined),
    label: "Option 3",
    title: "Option 3",
    link: "/table"
  },
  {
    key: "sub1",
    icon: () => h(MailOutlined),
    label: "Navigation One",
    title: "Navigation One",
    children: [
      {
        key: "5",
        label: "Option 5",
        title: "Option 5",
      },
      {
        key: "6",
        label: "Option 6",
        title: "Option 6",
      },
      {
        key: "7",
        label: "Option 7",
        title: "Option 7",
      },
      {
        key: "8",
        label: "Option 8",
        title: "Option 8",
      },
    ],
  },
  {
    key: "sub2",
    icon: () => h(AppstoreOutlined),
    label: "Navigation Two",
    title: "Navigation Two",
    children: [
      {
        key: "9",
        label: "Option 9",
        title: "Option 9",
      },
      {
        key: "10",
        label: "Option 10",
        title: "Option 10",
      },
      // {
      //   key: "sub3",
      //   label: "Submenu",
      //   title: "Submenu",
      //   children: [
      //     {
      //       key: "11",
      //       label: "Option 11",
      //       title: "Option 11",
      //     },
      //     {
      //       key: "12",
      //       label: "Option 12",
      //       title: "Option 12",
      //     },
      //   ],
      // },
    ],
  },
];

export default mainMenu;

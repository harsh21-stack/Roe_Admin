import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import React, { useState } from "react";
import {
  FiMessageSquare,
  BsBell,
  SlCalender,
  MdOutlineDashboardCustomize,
  AiOutlineFileAdd,
  GrTasks,
  BsChatLeftDots,
  TiContacts,
  FcTodoList,
  FiSearch,
  MdPersonOutline,
  BsGrid3X3Gap,
  IoColorPaletteOutline,
  HiInformationCircle,
  TbFileTypography,
  FaWpforms,
  BsCurrencyDollar,
  CgDanger,
  FaUserLock,
  BiLockOpen,
  BiRegistered,
  BiLogIn,
} from "../Icons";
import Footer from "./Footer";
import Dashboardpage from "../Pages/Dashboard-page/index";
import Calender from "../Pages/Calender/calender";
import Chat from "../Pages/Chat/chat";
import Contacts from "../Pages/Contacts/Contacts";
import Todos from "../Pages/Todos/Todos";
import Scrumboard from "../Pages/Scrumboard/Scrumboard";
import File from "../Pages/File-Manager/File";

const { Header, Sider, Content } = Layout;

const Demo = () => {
  const [collapsed, setCollapsed] = useState({
    open: false,
    type: false,
  });
  console.log(collapsed, "cccc");
  const [key, setKey] = useState("1");

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const hoverEvent = () => {
    setCollapsed({
      open: true,
      type: collapsed.type,
    });
  };

  const closeHoverEvent = () => {
    setCollapsed({
      open: collapsed.type,
      type: collapsed.type,
    });
  };
  return (
    <Layout className="layout">
      <Sider
        trigger={null}
        collapsible
        collapsed={!collapsed.open}
        onMouseEnter={hoverEvent}
        onMouseLeave={closeHoverEvent}
        style={{ overflow: "auto" }}
        className="Scroll"
      >
        <div className="logo">
          <MdPersonOutline />
          {collapsed.open ? "Roe Admin" : ""}
        </div>
        <div className="span"> {collapsed.open ? "App" : ""}</div>
        <Menu
          style={{ height: "100%" }}
          className="menu"
          theme="light"
          mode="inline"
          onClick={({ key }) => setKey(key)}
          items={[
            {
              key: "1",
              icon: <MdOutlineDashboardCustomize />,
              label: "Dashboards",
            },
            {
              key: "2",
              icon: <SlCalender />,
              label: "Calender",
            },
            {
              key: "3",
              icon: <BsChatLeftDots />,
              label: " Chat",
            },
            {
              key: "4",
              icon: <TiContacts />,
              label: " Contacts",
            },
            {
              key: "5",
              icon: <AiOutlineFileAdd />,
              label: "File Manager",
            },
            {
              key: "6",
              icon: <GrTasks />,
              label: "Scrumboard",
            },
            {
              key: "7",
              icon: <FcTodoList />,
              label: "Todos",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            backgroundImage: "linear-gradient(to right,#311b92 , #9575cd)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div className="icons">
              <div className="fa-menu">
                {React.createElement(
                  collapsed.open ? MenuUnfoldOutlined : MenuFoldOutlined,
                  {
                    className: "trigger",
                    onClick: () =>
                      setCollapsed({
                        open: !collapsed.open,
                        type: !collapsed.type,
                      }),
                  }
                )}
              </div>
              <FiMessageSquare className="fa-icons" />
              <BsBell className="fa-icons" />
            </div>

            <div className="icons">
              <FiSearch className="fa-icon" />
              <img
                src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg"
                alt="profile"
                className="display-profile"
              />
              <BsGrid3X3Gap className="fa-icon" />
            </div>
          </div>
        </Header>
        <Content
          className="Scroll"
          style={{
            margin: key === "1" ? "24px 16px" : 0,
            padding: key === "1" ? 24 : 0,
            minHeight: 280,
            background: colorBgContainer,
            overflowY: "auto",
          }}
        >
          {key === "1" && <Dashboardpage />}
          {key === "2" && <Calender />}
          {key === "3" && <Chat />}
          {key === "4" && <Contacts />}
          {key === "7" && <Todos />}
          {key === "6" && <Scrumboard />}
          {key === "5" && <File />}
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};
export default Demo;

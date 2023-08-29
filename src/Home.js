import React, { useState, useEffect } from "react";
import ClayTabs from "@clayui/tabs";
import GetDoc from "./Documents and Media/GetDoc";
import CRUDBlogs from "./Blogs/CRUD-Blogs";
import CRUDaricles from "./Knowledge Base/CRUD-KnowledgeBase";

export default function Home() {
  const [active, setActive] = useState(0);

  return (
    <>
      <ClayTabs active={active} justified onActiveChange={setActive}>
        <ClayTabs.Item
          innerProps={{
            "aria-controls": "tabpanel-1",
          }}
        >
          Blogs
        </ClayTabs.Item>
        <ClayTabs.Item
          innerProps={{
            "aria-controls": "tabpanel-2",
          }}
        >
         Documents and Media
        </ClayTabs.Item>
        <ClayTabs.Item
          innerProps={{
            "aria-controls": "tabpanel-3",
          }}
        >
          Knowledge Base
        </ClayTabs.Item>
        
      </ClayTabs>
      <ClayTabs.Content activeIndex={active} fade>
        <ClayTabs.TabPane aria-labelledby="tab-1">
          
        <CRUDBlogs/>


        </ClayTabs.TabPane>
        <ClayTabs.TabPane aria-labelledby="tab-2">
        <GetDoc/>
        </ClayTabs.TabPane>
        <ClayTabs.TabPane aria-labelledby="tab-3">
          <CRUDaricles/>
        </ClayTabs.TabPane>
        
      </ClayTabs.Content>
    </>
  );
}

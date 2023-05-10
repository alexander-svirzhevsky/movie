import React from "react";
import { useThemeContext } from "../ThemeContext";
import Accordion from "../CompoundComponents/Accordion";
import AccordionItem from "../CompoundComponents/AccordionItem";
import { Posts } from "../HighOrderComponent/Posts";
import HOKPosts from "../HighOrderComponent/HOKPosts";
import { PortalWithElement } from "../Portal/PortalWithElement";
import "../index.css";

export const Home = () => {
  const value = useThemeContext();
  const PostsNew = HOKPosts(Posts);

  return (
    <div className="wrapper">
      <PortalWithElement />
      <Accordion defaultExpanded="section2">
        <AccordionItem value="section1">section1</AccordionItem>
        <AccordionItem value="section2">section2</AccordionItem>
      </Accordion>
      <PostsNew />
    </div>
  );
};

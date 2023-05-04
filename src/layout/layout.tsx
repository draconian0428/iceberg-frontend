import React from "react";
import styled from "styled-components";
import { Header } from "./header";

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({children}: LayoutProps) => {
  return (
    <LayoutWrapper>
      <Header></Header>
      {
        children
      }
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div`
`
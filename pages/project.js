import React from "react";
import Layout from "@/components/Layout";

import  Projects  from '@/components/projects/projects';

function project() {
  
  return <Layout title={"Project"}>
    <p className="pt-20"></p>
    <Projects></Projects>
  </Layout>;
}

export default project;

import React from "react";
import Skillcard from "./Skillcard";
import PythonLogo from "../assets/python-logo.png";
import FLaskLogo from "../assets/flask-log.png";
import GitLogo from "../assets/git.png";
import AwsLogo from "../assets/aws.png";
import TenserflowLogo from "../assets/tensorflow.png";
import MongodbLogo from "../assets/mongodb.png";
import NextLogo from "../assets/next-logo.png";
import NodeJSLogo from "../assets/nodejs-logo.png";
import PostgresSQLLogo from "../assets/PostgresSQL.svg";
import ReactJSLogo from "../assets/reactjs-log.png";
import ReduxLogo from "../assets/redux-logo.png";
import TailwindCSSLogo from "../assets/TailwindCSS.png";
function Skills() {
  return (
    <section
      id="skills"
      className="mx-[30px] md:mx-[70px] lg:mx-[180px] mt-[66px] pt-10"
    >
      <div className="flex justify-start items-center gap-4">
        <h1 className=" text-[24px] md:text-[32px] font-bold  text-bluePrimary">
          03. Skills
        </h1>
        <div className="border-2  w-[130px] md:w-[230px] h-[1px] border-blueAccent "></div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-[66px] md:mt-[66px] mt-[56px] gap-10 lg:grid-cols-3 lg:gap-[77px] mx-auto w-fit lg:mt-[84px]">
        <Skillcard src={PythonLogo} />
        <Skillcard src={FLaskLogo} classes={"w-[100px]"} />
        <Skillcard src={GitLogo} />
        <Skillcard src={AwsLogo} classes={"w-[100px]"} />
        <Skillcard src={MongodbLogo} />
        <Skillcard src={TenserflowLogo} />
        <Skillcard src={NextLogo} />
        <Skillcard src={NodeJSLogo} />
        <Skillcard src={PostgresSQLLogo} classes={"w-[150px]"} />
        <Skillcard src={ReactJSLogo} />
        <Skillcard src={ReduxLogo} />
        <Skillcard src={TailwindCSSLogo} classes={"w-[100px]"} />
      </div>
    </section>
  );
}

export default Skills;

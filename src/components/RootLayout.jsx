import Layout from "./TestLayout";
import SideNav from "./nav/SideNav";
import TopNav from "./nav/TopNav";
import AccordionItem from "./re-useable/AccordionItem";
import SubAccordionItem from "./re-useable/SubAccordionItem";
import Task from "./re-useable/Task";

function RootLayout() {
  return (
    <div className="flex">
      <div className="w-72">
        {" "}
        <SideNav />
      </div>
      <div className="w-full">
        <div className="bottom-0">
          <TopNav />
        </div>
        <div className="pt-28 -z-100 h-full">
          <AccordionItem title="Project 1">
            <SubAccordionItem title="Sub task 1">
              <Task title="Task 1">tasks</Task>
            </SubAccordionItem>
            <SubAccordionItem title="Sub task 2">
              Sub-Accordion task 2 goes in here
            </SubAccordionItem>
          </AccordionItem>
          <AccordionItem title="Project 2">
            <SubAccordionItem title="Sub task 1">
              Sub-Accordion task 1 goes in here
            </SubAccordionItem>
          </AccordionItem>
        </div>
      </div>
    </div>
    // <div>
    //   <Layout>
    //     <h1 className="text-3xl font-bold mb-4">Main Content</h1>
    //     <p>Your content goes here.</p>
    //   </Layout>
    // </div>
  );
}

export default RootLayout;

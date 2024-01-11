import { useState, Fragment } from "react";
import RootLayout from "./components/RootLayout";
// import Layout from "./components/TestLayout";
import "./styles/button.css";
import MultiStepModal from "./MultiStepModal";
import MultiForm from "./components/MultiForm";
import MultistepRegistrationForm from "./components/test/MultistepRegistrationForm";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Fragment>
        <RootLayout />
        <MultiForm />
        {/* <MultistepRegistrationForm /> */}
      </Fragment>
    </>
  );
}

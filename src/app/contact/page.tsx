import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start with a free consultation Let's talk!",
  description: "Start with a free consultation Let's talk!",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Meaningful conversations create GREAT solutions. Share details, and our experts will contact you proactively to schedule a call."
      />

      <Contact />
    </>
  );
};

export default ContactPage;

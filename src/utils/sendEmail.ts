import emailjs from "@emailjs/browser";

const sendEmail = async (formData: any) => {
  const serviceID = "service_ir9o86g";
  const templateID = "template_qy8143o";
  const publicKey = "aBVivZYO5hbsX3iow";
  const templateParams = {
    name: formData.name,
    message: formData.message,
    email: formData.email,
    phone: formData.phone,
    company: formData.company || "-",
  };

  await emailjs.send(serviceID, templateID, templateParams, publicKey);
};

export default sendEmail;
